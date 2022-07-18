import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { UpdateOneEmployeesArgs } from "./args/UpdateOneEmployeesArgs";
import { Employees } from "../../../models/Employees";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Employees)
export class UpdateOneEmployeesResolver {
  @TypeGraphQL.Mutation(_returns => Employees, {
    nullable: true
  })
  async updateOneEmployees(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateOneEmployeesArgs): Promise<Employees | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).employees.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
