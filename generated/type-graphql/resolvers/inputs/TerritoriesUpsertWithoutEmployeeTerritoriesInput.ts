import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TerritoriesCreateWithoutEmployeeTerritoriesInput } from "../inputs/TerritoriesCreateWithoutEmployeeTerritoriesInput";
import { TerritoriesUpdateWithoutEmployeeTerritoriesInput } from "../inputs/TerritoriesUpdateWithoutEmployeeTerritoriesInput";

@TypeGraphQL.InputType("TerritoriesUpsertWithoutEmployeeTerritoriesInput", {
  isAbstract: true
})
export class TerritoriesUpsertWithoutEmployeeTerritoriesInput {
  @TypeGraphQL.Field(_type => TerritoriesUpdateWithoutEmployeeTerritoriesInput, {
    nullable: false
  })
  update!: TerritoriesUpdateWithoutEmployeeTerritoriesInput;

  @TypeGraphQL.Field(_type => TerritoriesCreateWithoutEmployeeTerritoriesInput, {
    nullable: false
  })
  create!: TerritoriesCreateWithoutEmployeeTerritoriesInput;
}
