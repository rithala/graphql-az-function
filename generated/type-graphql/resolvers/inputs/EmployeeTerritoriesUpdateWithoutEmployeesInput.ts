import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TerritoriesUpdateOneRequiredWithoutEmployeeTerritoriesNestedInput } from "../inputs/TerritoriesUpdateOneRequiredWithoutEmployeeTerritoriesNestedInput";

@TypeGraphQL.InputType("EmployeeTerritoriesUpdateWithoutEmployeesInput", {
  isAbstract: true
})
export class EmployeeTerritoriesUpdateWithoutEmployeesInput {
  @TypeGraphQL.Field(_type => TerritoriesUpdateOneRequiredWithoutEmployeeTerritoriesNestedInput, {
    nullable: true
  })
  Territories?: TerritoriesUpdateOneRequiredWithoutEmployeeTerritoriesNestedInput | undefined;
}
