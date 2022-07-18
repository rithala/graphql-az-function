import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EmployeeTerritoriesUpdateManyWithoutTerritoriesNestedInput } from "../inputs/EmployeeTerritoriesUpdateManyWithoutTerritoriesNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("TerritoriesUpdateWithoutRegionInput", {
  isAbstract: true
})
export class TerritoriesUpdateWithoutRegionInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  TerritoryID?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  TerritoryDescription?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => EmployeeTerritoriesUpdateManyWithoutTerritoriesNestedInput, {
    nullable: true
  })
  EmployeeTerritories?: EmployeeTerritoriesUpdateManyWithoutTerritoriesNestedInput | undefined;
}
