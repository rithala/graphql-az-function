import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EmployeeTerritoriesCreateWithoutEmployeesInput } from "../inputs/EmployeeTerritoriesCreateWithoutEmployeesInput";
import { EmployeeTerritoriesUpdateWithoutEmployeesInput } from "../inputs/EmployeeTerritoriesUpdateWithoutEmployeesInput";
import { EmployeeTerritoriesWhereUniqueInput } from "../inputs/EmployeeTerritoriesWhereUniqueInput";

@TypeGraphQL.InputType("EmployeeTerritoriesUpsertWithWhereUniqueWithoutEmployeesInput", {
  isAbstract: true
})
export class EmployeeTerritoriesUpsertWithWhereUniqueWithoutEmployeesInput {
  @TypeGraphQL.Field(_type => EmployeeTerritoriesWhereUniqueInput, {
    nullable: false
  })
  where!: EmployeeTerritoriesWhereUniqueInput;

  @TypeGraphQL.Field(_type => EmployeeTerritoriesUpdateWithoutEmployeesInput, {
    nullable: false
  })
  update!: EmployeeTerritoriesUpdateWithoutEmployeesInput;

  @TypeGraphQL.Field(_type => EmployeeTerritoriesCreateWithoutEmployeesInput, {
    nullable: false
  })
  create!: EmployeeTerritoriesCreateWithoutEmployeesInput;
}
