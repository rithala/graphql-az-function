import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EmployeesCreateOrConnectWithoutOrdersInput } from "../inputs/EmployeesCreateOrConnectWithoutOrdersInput";
import { EmployeesCreateWithoutOrdersInput } from "../inputs/EmployeesCreateWithoutOrdersInput";
import { EmployeesWhereUniqueInput } from "../inputs/EmployeesWhereUniqueInput";

@TypeGraphQL.InputType("EmployeesCreateNestedOneWithoutOrdersInput", {
  isAbstract: true
})
export class EmployeesCreateNestedOneWithoutOrdersInput {
  @TypeGraphQL.Field(_type => EmployeesCreateWithoutOrdersInput, {
    nullable: true
  })
  create?: EmployeesCreateWithoutOrdersInput | undefined;

  @TypeGraphQL.Field(_type => EmployeesCreateOrConnectWithoutOrdersInput, {
    nullable: true
  })
  connectOrCreate?: EmployeesCreateOrConnectWithoutOrdersInput | undefined;

  @TypeGraphQL.Field(_type => EmployeesWhereUniqueInput, {
    nullable: true
  })
  connect?: EmployeesWhereUniqueInput | undefined;
}
