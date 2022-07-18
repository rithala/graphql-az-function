import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EmployeesUpdateOneRequiredWithoutEmployeeTerritoriesNestedInput } from "../inputs/EmployeesUpdateOneRequiredWithoutEmployeeTerritoriesNestedInput";
import { TerritoriesUpdateOneRequiredWithoutEmployeeTerritoriesNestedInput } from "../inputs/TerritoriesUpdateOneRequiredWithoutEmployeeTerritoriesNestedInput";

@TypeGraphQL.InputType("EmployeeTerritoriesUpdateInput", {
  isAbstract: true
})
export class EmployeeTerritoriesUpdateInput {
  @TypeGraphQL.Field(_type => EmployeesUpdateOneRequiredWithoutEmployeeTerritoriesNestedInput, {
    nullable: true
  })
  Employees?: EmployeesUpdateOneRequiredWithoutEmployeeTerritoriesNestedInput | undefined;

  @TypeGraphQL.Field(_type => TerritoriesUpdateOneRequiredWithoutEmployeeTerritoriesNestedInput, {
    nullable: true
  })
  Territories?: TerritoriesUpdateOneRequiredWithoutEmployeeTerritoriesNestedInput | undefined;
}
