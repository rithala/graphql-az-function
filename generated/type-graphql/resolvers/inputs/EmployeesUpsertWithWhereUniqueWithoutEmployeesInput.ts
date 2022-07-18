import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EmployeesCreateWithoutEmployeesInput } from "../inputs/EmployeesCreateWithoutEmployeesInput";
import { EmployeesUpdateWithoutEmployeesInput } from "../inputs/EmployeesUpdateWithoutEmployeesInput";
import { EmployeesWhereUniqueInput } from "../inputs/EmployeesWhereUniqueInput";

@TypeGraphQL.InputType("EmployeesUpsertWithWhereUniqueWithoutEmployeesInput", {
  isAbstract: true
})
export class EmployeesUpsertWithWhereUniqueWithoutEmployeesInput {
  @TypeGraphQL.Field(_type => EmployeesWhereUniqueInput, {
    nullable: false
  })
  where!: EmployeesWhereUniqueInput;

  @TypeGraphQL.Field(_type => EmployeesUpdateWithoutEmployeesInput, {
    nullable: false
  })
  update!: EmployeesUpdateWithoutEmployeesInput;

  @TypeGraphQL.Field(_type => EmployeesCreateWithoutEmployeesInput, {
    nullable: false
  })
  create!: EmployeesCreateWithoutEmployeesInput;
}
