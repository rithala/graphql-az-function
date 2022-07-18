import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EmployeesCreateNestedOneWithoutEmployeeTerritoriesInput } from "../inputs/EmployeesCreateNestedOneWithoutEmployeeTerritoriesInput";
import { TerritoriesCreateNestedOneWithoutEmployeeTerritoriesInput } from "../inputs/TerritoriesCreateNestedOneWithoutEmployeeTerritoriesInput";

@TypeGraphQL.InputType("EmployeeTerritoriesCreateInput", {
  isAbstract: true
})
export class EmployeeTerritoriesCreateInput {
  @TypeGraphQL.Field(_type => EmployeesCreateNestedOneWithoutEmployeeTerritoriesInput, {
    nullable: false
  })
  Employees!: EmployeesCreateNestedOneWithoutEmployeeTerritoriesInput;

  @TypeGraphQL.Field(_type => TerritoriesCreateNestedOneWithoutEmployeeTerritoriesInput, {
    nullable: false
  })
  Territories!: TerritoriesCreateNestedOneWithoutEmployeeTerritoriesInput;
}
