import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EmployeesCreateWithoutOther_EmployeesInput } from "../inputs/EmployeesCreateWithoutOther_EmployeesInput";
import { EmployeesUpdateWithoutOther_EmployeesInput } from "../inputs/EmployeesUpdateWithoutOther_EmployeesInput";

@TypeGraphQL.InputType("EmployeesUpsertWithoutOther_EmployeesInput", {
  isAbstract: true
})
export class EmployeesUpsertWithoutOther_EmployeesInput {
  @TypeGraphQL.Field(_type => EmployeesUpdateWithoutOther_EmployeesInput, {
    nullable: false
  })
  update!: EmployeesUpdateWithoutOther_EmployeesInput;

  @TypeGraphQL.Field(_type => EmployeesCreateWithoutOther_EmployeesInput, {
    nullable: false
  })
  create!: EmployeesCreateWithoutOther_EmployeesInput;
}
