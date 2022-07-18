import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TerritoriesCreateNestedOneWithoutEmployeeTerritoriesInput } from "../inputs/TerritoriesCreateNestedOneWithoutEmployeeTerritoriesInput";

@TypeGraphQL.InputType("EmployeeTerritoriesCreateWithoutEmployeesInput", {
  isAbstract: true
})
export class EmployeeTerritoriesCreateWithoutEmployeesInput {
  @TypeGraphQL.Field(_type => TerritoriesCreateNestedOneWithoutEmployeeTerritoriesInput, {
    nullable: false
  })
  Territories!: TerritoriesCreateNestedOneWithoutEmployeeTerritoriesInput;
}
