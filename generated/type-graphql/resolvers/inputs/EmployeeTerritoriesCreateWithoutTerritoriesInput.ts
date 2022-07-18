import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EmployeesCreateNestedOneWithoutEmployeeTerritoriesInput } from "../inputs/EmployeesCreateNestedOneWithoutEmployeeTerritoriesInput";

@TypeGraphQL.InputType("EmployeeTerritoriesCreateWithoutTerritoriesInput", {
  isAbstract: true
})
export class EmployeeTerritoriesCreateWithoutTerritoriesInput {
  @TypeGraphQL.Field(_type => EmployeesCreateNestedOneWithoutEmployeeTerritoriesInput, {
    nullable: false
  })
  Employees!: EmployeesCreateNestedOneWithoutEmployeeTerritoriesInput;
}
