import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EmployeesCreateWithoutOrdersInput } from "../inputs/EmployeesCreateWithoutOrdersInput";
import { EmployeesWhereUniqueInput } from "../inputs/EmployeesWhereUniqueInput";

@TypeGraphQL.InputType("EmployeesCreateOrConnectWithoutOrdersInput", {
  isAbstract: true
})
export class EmployeesCreateOrConnectWithoutOrdersInput {
  @TypeGraphQL.Field(_type => EmployeesWhereUniqueInput, {
    nullable: false
  })
  where!: EmployeesWhereUniqueInput;

  @TypeGraphQL.Field(_type => EmployeesCreateWithoutOrdersInput, {
    nullable: false
  })
  create!: EmployeesCreateWithoutOrdersInput;
}
