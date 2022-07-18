import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TerritoriesCreateWithoutRegionInput } from "../inputs/TerritoriesCreateWithoutRegionInput";
import { TerritoriesUpdateWithoutRegionInput } from "../inputs/TerritoriesUpdateWithoutRegionInput";
import { TerritoriesWhereUniqueInput } from "../inputs/TerritoriesWhereUniqueInput";

@TypeGraphQL.InputType("TerritoriesUpsertWithWhereUniqueWithoutRegionInput", {
  isAbstract: true
})
export class TerritoriesUpsertWithWhereUniqueWithoutRegionInput {
  @TypeGraphQL.Field(_type => TerritoriesWhereUniqueInput, {
    nullable: false
  })
  where!: TerritoriesWhereUniqueInput;

  @TypeGraphQL.Field(_type => TerritoriesUpdateWithoutRegionInput, {
    nullable: false
  })
  update!: TerritoriesUpdateWithoutRegionInput;

  @TypeGraphQL.Field(_type => TerritoriesCreateWithoutRegionInput, {
    nullable: false
  })
  create!: TerritoriesCreateWithoutRegionInput;
}
