import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { GroupByTerritoriesArgs } from "./args/GroupByTerritoriesArgs";
import { Territories } from "../../../models/Territories";
import { TerritoriesGroupBy } from "../../outputs/TerritoriesGroupBy";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Territories)
export class GroupByTerritoriesResolver {
  @TypeGraphQL.Query(_returns => [TerritoriesGroupBy], {
    nullable: false
  })
  async groupByTerritories(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByTerritoriesArgs): Promise<TerritoriesGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).territories.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
