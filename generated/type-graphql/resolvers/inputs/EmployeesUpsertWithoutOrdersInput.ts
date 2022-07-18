import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EmployeesCreateWithoutOrdersInput } from "../inputs/EmployeesCreateWithoutOrdersInput";
import { EmployeesUpdateWithoutOrdersInput } from "../inputs/EmployeesUpdateWithoutOrdersInput";

@TypeGraphQL.InputType("EmployeesUpsertWithoutOrdersInput", {
  isAbstract: true
})
export class EmployeesUpsertWithoutOrdersInput {
  @TypeGraphQL.Field(_type => EmployeesUpdateWithoutOrdersInput, {
    nullable: false
  })
  update!: EmployeesUpdateWithoutOrdersInput;

  @TypeGraphQL.Field(_type => EmployeesCreateWithoutOrdersInput, {
    nullable: false
  })
  create!: EmployeesCreateWithoutOrdersInput;
}
