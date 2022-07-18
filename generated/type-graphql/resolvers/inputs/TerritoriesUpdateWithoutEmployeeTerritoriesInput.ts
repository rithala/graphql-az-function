import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RegionUpdateOneRequiredWithoutTerritoriesNestedInput } from "../inputs/RegionUpdateOneRequiredWithoutTerritoriesNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("TerritoriesUpdateWithoutEmployeeTerritoriesInput", {
  isAbstract: true
})
export class TerritoriesUpdateWithoutEmployeeTerritoriesInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  TerritoryID?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  TerritoryDescription?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => RegionUpdateOneRequiredWithoutTerritoriesNestedInput, {
    nullable: true
  })
  Region?: RegionUpdateOneRequiredWithoutTerritoriesNestedInput | undefined;
}
