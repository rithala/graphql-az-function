import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EmployeesScalarWhereInput } from "../inputs/EmployeesScalarWhereInput";
import { EmployeesUpdateManyMutationInput } from "../inputs/EmployeesUpdateManyMutationInput";

@TypeGraphQL.InputType("EmployeesUpdateManyWithWhereWithoutEmployeesInput", {
  isAbstract: true
})
export class EmployeesUpdateManyWithWhereWithoutEmployeesInput {
  @TypeGraphQL.Field(_type => EmployeesScalarWhereInput, {
    nullable: false
  })
  where!: EmployeesScalarWhereInput;

  @TypeGraphQL.Field(_type => EmployeesUpdateManyMutationInput, {
    nullable: false
  })
  data!: EmployeesUpdateManyMutationInput;
}
