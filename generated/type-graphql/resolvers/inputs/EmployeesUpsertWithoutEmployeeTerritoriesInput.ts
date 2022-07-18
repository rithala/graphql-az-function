import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EmployeesCreateWithoutEmployeeTerritoriesInput } from "../inputs/EmployeesCreateWithoutEmployeeTerritoriesInput";
import { EmployeesUpdateWithoutEmployeeTerritoriesInput } from "../inputs/EmployeesUpdateWithoutEmployeeTerritoriesInput";

@TypeGraphQL.InputType("EmployeesUpsertWithoutEmployeeTerritoriesInput", {
  isAbstract: true
})
export class EmployeesUpsertWithoutEmployeeTerritoriesInput {
  @TypeGraphQL.Field(_type => EmployeesUpdateWithoutEmployeeTerritoriesInput, {
    nullable: false
  })
  update!: EmployeesUpdateWithoutEmployeeTerritoriesInput;

  @TypeGraphQL.Field(_type => EmployeesCreateWithoutEmployeeTerritoriesInput, {
    nullable: false
  })
  create!: EmployeesCreateWithoutEmployeeTerritoriesInput;
}
