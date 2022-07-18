import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EmployeesCreateManyEmployeesInputEnvelope } from "../inputs/EmployeesCreateManyEmployeesInputEnvelope";
import { EmployeesCreateOrConnectWithoutEmployeesInput } from "../inputs/EmployeesCreateOrConnectWithoutEmployeesInput";
import { EmployeesCreateWithoutEmployeesInput } from "../inputs/EmployeesCreateWithoutEmployeesInput";
import { EmployeesWhereUniqueInput } from "../inputs/EmployeesWhereUniqueInput";

@TypeGraphQL.InputType("EmployeesCreateNestedManyWithoutEmployeesInput", {
  isAbstract: true
})
export class EmployeesCreateNestedManyWithoutEmployeesInput {
  @TypeGraphQL.Field(_type => [EmployeesCreateWithoutEmployeesInput], {
    nullable: true
  })
  create?: EmployeesCreateWithoutEmployeesInput[] | undefined;

  @TypeGraphQL.Field(_type => [EmployeesCreateOrConnectWithoutEmployeesInput], {
    nullable: true
  })
  connectOrCreate?: EmployeesCreateOrConnectWithoutEmployeesInput[] | undefined;

  @TypeGraphQL.Field(_type => EmployeesCreateManyEmployeesInputEnvelope, {
    nullable: true
  })
  createMany?: EmployeesCreateManyEmployeesInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [EmployeesWhereUniqueInput], {
    nullable: true
  })
  connect?: EmployeesWhereUniqueInput[] | undefined;
}
