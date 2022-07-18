import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { UpsertOneTerritoriesArgs } from "./args/UpsertOneTerritoriesArgs";
import { Territories } from "../../../models/Territories";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Territories)
export class UpsertOneTerritoriesResolver {
  @TypeGraphQL.Mutation(_returns => Territories, {
    nullable: false
  })
  async upsertOneTerritories(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOneTerritoriesArgs): Promise<Territories> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).territories.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
