import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EmployeeTerritoriesCreateWithoutEmployeesInput } from "../inputs/EmployeeTerritoriesCreateWithoutEmployeesInput";
import { EmployeeTerritoriesWhereUniqueInput } from "../inputs/EmployeeTerritoriesWhereUniqueInput";

@TypeGraphQL.InputType("EmployeeTerritoriesCreateOrConnectWithoutEmployeesInput", {
  isAbstract: true
})
export class EmployeeTerritoriesCreateOrConnectWithoutEmployeesInput {
  @TypeGraphQL.Field(_type => EmployeeTerritoriesWhereUniqueInput, {
    nullable: false
  })
  where!: EmployeeTerritoriesWhereUniqueInput;

  @TypeGraphQL.Field(_type => EmployeeTerritoriesCreateWithoutEmployeesInput, {
    nullable: false
  })
  create!: EmployeeTerritoriesCreateWithoutEmployeesInput;
}
