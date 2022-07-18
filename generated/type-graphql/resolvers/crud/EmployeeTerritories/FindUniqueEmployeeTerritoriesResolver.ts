import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { FindUniqueEmployeeTerritoriesArgs } from "./args/FindUniqueEmployeeTerritoriesArgs";
import { EmployeeTerritories } from "../../../models/EmployeeTerritories";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => EmployeeTerritories)
export class FindUniqueEmployeeTerritoriesResolver {
  @TypeGraphQL.Query(_returns => EmployeeTerritories, {
    nullable: true
  })
  async findUniqueEmployeeTerritories(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueEmployeeTerritoriesArgs): Promise<EmployeeTerritories | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).employeeTerritories.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
