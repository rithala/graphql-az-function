import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { CreateOneShippersArgs } from "./args/CreateOneShippersArgs";
import { Shippers } from "../../../models/Shippers";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Shippers)
export class CreateOneShippersResolver {
  @TypeGraphQL.Mutation(_returns => Shippers, {
    nullable: false
  })
  async createOneShippers(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateOneShippersArgs): Promise<Shippers> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).shippers.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
