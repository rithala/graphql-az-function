import * as TypeGraphQL from "type-graphql";
import { EmployeeTerritories } from "../../../models/EmployeeTerritories";
import { Employees } from "../../../models/Employees";
import { Territories } from "../../../models/Territories";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => EmployeeTerritories)
export class EmployeeTerritoriesRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Employees, {
    nullable: false
  })
  async Employees(@TypeGraphQL.Root() employeeTerritories: EmployeeTerritories, @TypeGraphQL.Ctx() ctx: any): Promise<Employees> {
    return getPrismaFromContext(ctx).employeeTerritories.findUnique({
      where: {
        EmployeeID_TerritoryID: {
          EmployeeID: employeeTerritories.EmployeeID,
          TerritoryID: employeeTerritories.TerritoryID,
        },
      },
    }).Employees({});
  }

  @TypeGraphQL.FieldResolver(_type => Territories, {
    nullable: false
  })
  async Territories(@TypeGraphQL.Root() employeeTerritories: EmployeeTerritories, @TypeGraphQL.Ctx() ctx: any): Promise<Territories> {
    return getPrismaFromContext(ctx).employeeTerritories.findUnique({
      where: {
        EmployeeID_TerritoryID: {
          EmployeeID: employeeTerritories.EmployeeID,
          TerritoryID: employeeTerritories.TerritoryID,
        },
      },
    }).Territories({});
  }
}
