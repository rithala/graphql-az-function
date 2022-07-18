import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { UpsertOneEmployeeTerritoriesArgs } from "./args/UpsertOneEmployeeTerritoriesArgs";
import { EmployeeTerritories } from "../../../models/EmployeeTerritories";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => EmployeeTerritories)
export class UpsertOneEmployeeTerritoriesResolver {
  @TypeGraphQL.Mutation(_returns => EmployeeTerritories, {
    nullable: false
  })
  async upsertOneEmployeeTerritories(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOneEmployeeTerritoriesArgs): Promise<EmployeeTerritories> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).employeeTerritories.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
