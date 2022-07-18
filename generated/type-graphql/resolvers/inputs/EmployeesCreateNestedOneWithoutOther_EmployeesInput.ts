import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EmployeesCreateOrConnectWithoutOther_EmployeesInput } from "../inputs/EmployeesCreateOrConnectWithoutOther_EmployeesInput";
import { EmployeesCreateWithoutOther_EmployeesInput } from "../inputs/EmployeesCreateWithoutOther_EmployeesInput";
import { EmployeesWhereUniqueInput } from "../inputs/EmployeesWhereUniqueInput";

@TypeGraphQL.InputType("EmployeesCreateNestedOneWithoutOther_EmployeesInput", {
  isAbstract: true
})
export class EmployeesCreateNestedOneWithoutOther_EmployeesInput {
  @TypeGraphQL.Field(_type => EmployeesCreateWithoutOther_EmployeesInput, {
    nullable: true
  })
  create?: EmployeesCreateWithoutOther_EmployeesInput | undefined;

  @TypeGraphQL.Field(_type => EmployeesCreateOrConnectWithoutOther_EmployeesInput, {
    nullable: true
  })
  connectOrCreate?: EmployeesCreateOrConnectWithoutOther_EmployeesInput | undefined;

  @TypeGraphQL.Field(_type => EmployeesWhereUniqueInput, {
    nullable: true
  })
  connect?: EmployeesWhereUniqueInput | undefined;
}
