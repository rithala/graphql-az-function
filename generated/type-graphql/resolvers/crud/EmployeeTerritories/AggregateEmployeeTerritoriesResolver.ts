import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateEmployeeTerritoriesArgs } from "./args/AggregateEmployeeTerritoriesArgs";
import { EmployeeTerritories } from "../../../models/EmployeeTerritories";
import { AggregateEmployeeTerritories } from "../../outputs/AggregateEmployeeTerritories";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => EmployeeTerritories)
export class AggregateEmployeeTerritoriesResolver {
  @TypeGraphQL.Query(_returns => AggregateEmployeeTerritories, {
    nullable: false
  })
  async aggregateEmployeeTerritories(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateEmployeeTerritoriesArgs): Promise<AggregateEmployeeTerritories> {
    return getPrismaFromContext(ctx).employeeTerritories.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
