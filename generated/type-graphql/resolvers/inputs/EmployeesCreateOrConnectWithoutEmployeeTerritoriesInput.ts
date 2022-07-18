import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EmployeesCreateWithoutEmployeeTerritoriesInput } from "../inputs/EmployeesCreateWithoutEmployeeTerritoriesInput";
import { EmployeesWhereUniqueInput } from "../inputs/EmployeesWhereUniqueInput";

@TypeGraphQL.InputType("EmployeesCreateOrConnectWithoutEmployeeTerritoriesInput", {
  isAbstract: true
})
export class EmployeesCreateOrConnectWithoutEmployeeTerritoriesInput {
  @TypeGraphQL.Field(_type => EmployeesWhereUniqueInput, {
    nullable: false
  })
  where!: EmployeesWhereUniqueInput;

  @TypeGraphQL.Field(_type => EmployeesCreateWithoutEmployeeTerritoriesInput, {
    nullable: false
  })
  create!: EmployeesCreateWithoutEmployeeTerritoriesInput;
}
