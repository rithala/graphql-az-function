import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { UpsertOneEmployeesArgs } from "./args/UpsertOneEmployeesArgs";
import { Employees } from "../../../models/Employees";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Employees)
export class UpsertOneEmployeesResolver {
  @TypeGraphQL.Mutation(_returns => Employees, {
    nullable: false
  })
  async upsertOneEmployees(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOneEmployeesArgs): Promise<Employees> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).employees.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
