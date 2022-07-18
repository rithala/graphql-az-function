import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RegionCreateNestedOneWithoutTerritoriesInput } from "../inputs/RegionCreateNestedOneWithoutTerritoriesInput";

@TypeGraphQL.InputType("TerritoriesCreateWithoutEmployeeTerritoriesInput", {
  isAbstract: true
})
export class TerritoriesCreateWithoutEmployeeTerritoriesInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  TerritoryID!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  TerritoryDescription!: string;

  @TypeGraphQL.Field(_type => RegionCreateNestedOneWithoutTerritoriesInput, {
    nullable: false
  })
  Region!: RegionCreateNestedOneWithoutTerritoriesInput;
}
