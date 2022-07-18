import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EmployeesUpdateWithoutEmployeesInput } from "../inputs/EmployeesUpdateWithoutEmployeesInput";
import { EmployeesWhereUniqueInput } from "../inputs/EmployeesWhereUniqueInput";

@TypeGraphQL.InputType("EmployeesUpdateWithWhereUniqueWithoutEmployeesInput", {
  isAbstract: true
})
export class EmployeesUpdateWithWhereUniqueWithoutEmployeesInput {
  @TypeGraphQL.Field(_type => EmployeesWhereUniqueInput, {
    nullable: false
  })
  where!: EmployeesWhereUniqueInput;

  @TypeGraphQL.Field(_type => EmployeesUpdateWithoutEmployeesInput, {
    nullable: false
  })
  data!: EmployeesUpdateWithoutEmployeesInput;
}
