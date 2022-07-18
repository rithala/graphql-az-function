import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { UpdateOneEmployeeTerritoriesArgs } from "./args/UpdateOneEmployeeTerritoriesArgs";
import { EmployeeTerritories } from "../../../models/EmployeeTerritories";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => EmployeeTerritories)
export class UpdateOneEmployeeTerritoriesResolver {
  @TypeGraphQL.Mutation(_returns => EmployeeTerritories, {
    nullable: true
  })
  async updateOneEmployeeTerritories(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateOneEmployeeTerritoriesArgs): Promise<EmployeeTerritories | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).employeeTerritories.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
