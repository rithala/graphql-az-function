import * as TypeGraphQL from "type-graphql";
import { EmployeeTerritories } from "../../../models/EmployeeTerritories";
import { Region } from "../../../models/Region";
import { Territories } from "../../../models/Territories";
import { TerritoriesEmployeeTerritoriesArgs } from "./args/TerritoriesEmployeeTerritoriesArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Territories)
export class TerritoriesRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Region, {
    nullable: false
  })
  async Region(@TypeGraphQL.Root() territories: Territories, @TypeGraphQL.Ctx() ctx: any): Promise<Region> {
    return getPrismaFromContext(ctx).territories.findUnique({
      where: {
        TerritoryID: territories.TerritoryID,
      },
    }).Region({});
  }

  @TypeGraphQL.FieldResolver(_type => [EmployeeTerritories], {
    nullable: false
  })
  async EmployeeTerritories(@TypeGraphQL.Root() territories: Territories, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: TerritoriesEmployeeTerritoriesArgs): Promise<EmployeeTerritories[]> {
    return getPrismaFromContext(ctx).territories.findUnique({
      where: {
        TerritoryID: territories.TerritoryID,
      },
    }).EmployeeTerritories(args);
  }
}
