import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EmployeesCreateWithoutEmployeesInput } from "../inputs/EmployeesCreateWithoutEmployeesInput";
import { EmployeesWhereUniqueInput } from "../inputs/EmployeesWhereUniqueInput";

@TypeGraphQL.InputType("EmployeesCreateOrConnectWithoutEmployeesInput", {
  isAbstract: true
})
export class EmployeesCreateOrConnectWithoutEmployeesInput {
  @TypeGraphQL.Field(_type => EmployeesWhereUniqueInput, {
    nullable: false
  })
  where!: EmployeesWhereUniqueInput;

  @TypeGraphQL.Field(_type => EmployeesCreateWithoutEmployeesInput, {
    nullable: false
  })
  create!: EmployeesCreateWithoutEmployeesInput;
}
