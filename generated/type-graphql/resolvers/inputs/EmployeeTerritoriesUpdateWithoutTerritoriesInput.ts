import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EmployeesUpdateOneRequiredWithoutEmployeeTerritoriesNestedInput } from "../inputs/EmployeesUpdateOneRequiredWithoutEmployeeTerritoriesNestedInput";

@TypeGraphQL.InputType("EmployeeTerritoriesUpdateWithoutTerritoriesInput", {
  isAbstract: true
})
export class EmployeeTerritoriesUpdateWithoutTerritoriesInput {
  @TypeGraphQL.Field(_type => EmployeesUpdateOneRequiredWithoutEmployeeTerritoriesNestedInput, {
    nullable: true
  })
  Employees?: EmployeesUpdateOneRequiredWithoutEmployeeTerritoriesNestedInput | undefined;
}
