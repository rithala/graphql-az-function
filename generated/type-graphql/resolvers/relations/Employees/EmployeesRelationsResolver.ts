import * as TypeGraphQL from "type-graphql";
import { EmployeeTerritories } from "../../../models/EmployeeTerritories";
import { Employees } from "../../../models/Employees";
import { Orders } from "../../../models/Orders";
import { EmployeesEmployeeTerritoriesArgs } from "./args/EmployeesEmployeeTerritoriesArgs";
import { EmployeesOrdersArgs } from "./args/EmployeesOrdersArgs";
import { EmployeesOther_EmployeesArgs } from "./args/EmployeesOther_EmployeesArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Employees)
export class EmployeesRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Employees, {
    nullable: true
  })
  async Employees(@TypeGraphQL.Root() employees: Employees, @TypeGraphQL.Ctx() ctx: any): Promise<Employees | null> {
    return getPrismaFromContext(ctx).employees.findUnique({
      where: {
        EmployeeID: employees.EmployeeID,
      },
    }).Employees({});
  }

  @TypeGraphQL.FieldResolver(_type => [Employees], {
    nullable: false
  })
  async other_Employees(@TypeGraphQL.Root() employees: Employees, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: EmployeesOther_EmployeesArgs): Promise<Employees[]> {
    return getPrismaFromContext(ctx).employees.findUnique({
      where: {
        EmployeeID: employees.EmployeeID,
      },
    }).other_Employees(args);
  }

  @TypeGraphQL.FieldResolver(_type => [EmployeeTerritories], {
    nullable: false
  })
  async EmployeeTerritories(@TypeGraphQL.Root() employees: Employees, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: EmployeesEmployeeTerritoriesArgs): Promise<EmployeeTerritories[]> {
    return getPrismaFromContext(ctx).employees.findUnique({
      where: {
        EmployeeID: employees.EmployeeID,
      },
    }).EmployeeTerritories(args);
  }

  @TypeGraphQL.FieldResolver(_type => [Orders], {
    nullable: false
  })
  async Orders(@TypeGraphQL.Root() employees: Employees, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: EmployeesOrdersArgs): Promise<Orders[]> {
    return getPrismaFromContext(ctx).employees.findUnique({
      where: {
        EmployeeID: employees.EmployeeID,
      },
    }).Orders(args);
  }
}
