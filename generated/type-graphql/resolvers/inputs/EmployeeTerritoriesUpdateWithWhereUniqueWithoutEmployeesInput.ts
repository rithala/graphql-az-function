import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EmployeeTerritoriesUpdateWithoutEmployeesInput } from "../inputs/EmployeeTerritoriesUpdateWithoutEmployeesInput";
import { EmployeeTerritoriesWhereUniqueInput } from "../inputs/EmployeeTerritoriesWhereUniqueInput";

@TypeGraphQL.InputType("EmployeeTerritoriesUpdateWithWhereUniqueWithoutEmployeesInput", {
  isAbstract: true
})
export class EmployeeTerritoriesUpdateWithWhereUniqueWithoutEmployeesInput {
  @TypeGraphQL.Field(_type => EmployeeTerritoriesWhereUniqueInput, {
    nullable: false
  })
  where!: EmployeeTerritoriesWhereUniqueInput;

  @TypeGraphQL.Field(_type => EmployeeTerritoriesUpdateWithoutEmployeesInput, {
    nullable: false
  })
  data!: EmployeeTerritoriesUpdateWithoutEmployeesInput;
}
