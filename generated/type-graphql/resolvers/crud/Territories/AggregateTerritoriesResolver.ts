import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateTerritoriesArgs } from "./args/AggregateTerritoriesArgs";
import { Territories } from "../../../models/Territories";
import { AggregateTerritories } from "../../outputs/AggregateTerritories";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Territories)
export class AggregateTerritoriesResolver {
  @TypeGraphQL.Query(_returns => AggregateTerritories, {
    nullable: false
  })
  async aggregateTerritories(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateTerritoriesArgs): Promise<AggregateTerritories> {
    return getPrismaFromContext(ctx).territories.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
