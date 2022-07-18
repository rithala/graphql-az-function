import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EmployeesCreateWithoutOther_EmployeesInput } from "../inputs/EmployeesCreateWithoutOther_EmployeesInput";
import { EmployeesWhereUniqueInput } from "../inputs/EmployeesWhereUniqueInput";

@TypeGraphQL.InputType("EmployeesCreateOrConnectWithoutOther_EmployeesInput", {
  isAbstract: true
})
export class EmployeesCreateOrConnectWithoutOther_EmployeesInput {
  @TypeGraphQL.Field(_type => EmployeesWhereUniqueInput, {
    nullable: false
  })
  where!: EmployeesWhereUniqueInput;

  @TypeGraphQL.Field(_type => EmployeesCreateWithoutOther_EmployeesInput, {
    nullable: false
  })
  create!: EmployeesCreateWithoutOther_EmployeesInput;
}
