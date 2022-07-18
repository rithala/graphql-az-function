import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TerritoriesUpdateWithoutRegionInput } from "../inputs/TerritoriesUpdateWithoutRegionInput";
import { TerritoriesWhereUniqueInput } from "../inputs/TerritoriesWhereUniqueInput";

@TypeGraphQL.InputType("TerritoriesUpdateWithWhereUniqueWithoutRegionInput", {
  isAbstract: true
})
export class TerritoriesUpdateWithWhereUniqueWithoutRegionInput {
  @TypeGraphQL.Field(_type => TerritoriesWhereUniqueInput, {
    nullable: false
  })
  where!: TerritoriesWhereUniqueInput;

  @TypeGraphQL.Field(_type => TerritoriesUpdateWithoutRegionInput, {
    nullable: false
  })
  data!: TerritoriesUpdateWithoutRegionInput;
}
