import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { FindUniqueTerritoriesArgs } from "./args/FindUniqueTerritoriesArgs";
import { Territories } from "../../../models/Territories";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Territories)
export class FindUniqueTerritoriesResolver {
  @TypeGraphQL.Query(_returns => Territories, {
    nullable: true
  })
  async findUniqueTerritories(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueTerritoriesArgs): Promise<Territories | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).territories.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
