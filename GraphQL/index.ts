import 'reflect-metadata';
import { PrismaClient } from '@prisma/client';
import { buildSchema } from 'type-graphql';
import { AzureFunction, Context, HttpRequest } from '@azure/functions';
import { ApolloServer } from 'apollo-server-azure-functions';
import { resolvers } from '../generated/type-graphql';

async function getClient() {
  const prisma = new PrismaClient();
  await prisma.$connect();

  return prisma;
}

async function buildGraphQlSchema() {
  return await buildSchema({
    resolvers,
    validate: false,
  });
}

// Lazy initialization of Prisma client and GraphQL schema
const prismaClientPromise = getClient();
const graphqlSchemaPromise = buildGraphQlSchema();

async function buildApolloHandler() {
  const schema = await graphqlSchemaPromise;
  const prismaClient = await prismaClientPromise;

  const server = new ApolloServer({
    schema: schema,
    csrfPrevention: true,
    cache: 'bounded',
    // enabled introspection to test the deployed function in Apollo Studio Sandbox
    introspection: true,
    context: {
      prisma: prismaClient,
    },
  });

  return server.createHandler({
    disableHealthCheck: true,
  });
}

// Lazy initialization of Apollo Azure Function handler
const apolloHandlerPromise = buildApolloHandler();

export const graphqlHandler: AzureFunction = async function (
  context: Context,
  req: HttpRequest
): Promise<void> {
  // Resolve Apollo handler instance
  const handler = await apolloHandlerPromise;
  return await new Promise((resolve, reject) => {
    const contextWithPromisifiedDone = {
      ...context,
      // This hack is required as we require some async operation prior using handler.
      done: (err?: Error | string | null, result?: any) => {
        if (err) {
          reject(err);
          return;
        }
        resolve(result);
      },
    };

    // Run Apollo handler
    handler(contextWithPromisifiedDone, req);
  });
};
