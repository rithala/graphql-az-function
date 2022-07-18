import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EmployeesOrderByWithRelationInput } from "../inputs/EmployeesOrderByWithRelationInput";
import { TerritoriesOrderByWithRelationInput } from "../inputs/TerritoriesOrderByWithRelationInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("EmployeeTerritoriesOrderByWithRelationInput", {
  isAbstract: true
})
export class EmployeeTerritoriesOrderByWithRelationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  EmployeeID?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  TerritoryID?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => EmployeesOrderByWithRelationInput, {
    nullable: true
  })
  Employees?: EmployeesOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => TerritoriesOrderByWithRelationInput, {
    nullable: true
  })
  Territories?: TerritoriesOrderByWithRelationInput | undefined;
}
