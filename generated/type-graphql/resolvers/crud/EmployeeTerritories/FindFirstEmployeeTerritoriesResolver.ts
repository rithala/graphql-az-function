import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { FindFirstEmployeeTerritoriesArgs } from "./args/FindFirstEmployeeTerritoriesArgs";
import { EmployeeTerritories } from "../../../models/EmployeeTerritories";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => EmployeeTerritories)
export class FindFirstEmployeeTerritoriesResolver {
  @TypeGraphQL.Query(_returns => EmployeeTerritories, {
    nullable: true
  })
  async findFirstEmployeeTerritories(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstEmployeeTerritoriesArgs): Promise<EmployeeTerritories | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).employeeTerritories.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
