import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TerritoriesCreateWithoutEmployeeTerritoriesInput } from "../inputs/TerritoriesCreateWithoutEmployeeTerritoriesInput";
import { TerritoriesWhereUniqueInput } from "../inputs/TerritoriesWhereUniqueInput";

@TypeGraphQL.InputType("TerritoriesCreateOrConnectWithoutEmployeeTerritoriesInput", {
  isAbstract: true
})
export class TerritoriesCreateOrConnectWithoutEmployeeTerritoriesInput {
  @TypeGraphQL.Field(_type => TerritoriesWhereUniqueInput, {
    nullable: false
  })
  where!: TerritoriesWhereUniqueInput;

  @TypeGraphQL.Field(_type => TerritoriesCreateWithoutEmployeeTerritoriesInput, {
    nullable: false
  })
  create!: TerritoriesCreateWithoutEmployeeTerritoriesInput;
}
