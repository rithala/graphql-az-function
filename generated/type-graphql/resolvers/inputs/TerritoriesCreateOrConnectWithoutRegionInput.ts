import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TerritoriesCreateWithoutRegionInput } from "../inputs/TerritoriesCreateWithoutRegionInput";
import { TerritoriesWhereUniqueInput } from "../inputs/TerritoriesWhereUniqueInput";

@TypeGraphQL.InputType("TerritoriesCreateOrConnectWithoutRegionInput", {
  isAbstract: true
})
export class TerritoriesCreateOrConnectWithoutRegionInput {
  @TypeGraphQL.Field(_type => TerritoriesWhereUniqueInput, {
    nullable: false
  })
  where!: TerritoriesWhereUniqueInput;

  @TypeGraphQL.Field(_type => TerritoriesCreateWithoutRegionInput, {
    nullable: false
  })
  create!: TerritoriesCreateWithoutRegionInput;
}
