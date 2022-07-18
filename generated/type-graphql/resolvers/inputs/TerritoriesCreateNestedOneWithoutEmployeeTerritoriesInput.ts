import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TerritoriesCreateOrConnectWithoutEmployeeTerritoriesInput } from "../inputs/TerritoriesCreateOrConnectWithoutEmployeeTerritoriesInput";
import { TerritoriesCreateWithoutEmployeeTerritoriesInput } from "../inputs/TerritoriesCreateWithoutEmployeeTerritoriesInput";
import { TerritoriesWhereUniqueInput } from "../inputs/TerritoriesWhereUniqueInput";

@TypeGraphQL.InputType("TerritoriesCreateNestedOneWithoutEmployeeTerritoriesInput", {
  isAbstract: true
})
export class TerritoriesCreateNestedOneWithoutEmployeeTerritoriesInput {
  @TypeGraphQL.Field(_type => TerritoriesCreateWithoutEmployeeTerritoriesInput, {
    nullable: true
  })
  create?: TerritoriesCreateWithoutEmployeeTerritoriesInput | undefined;

  @TypeGraphQL.Field(_type => TerritoriesCreateOrConnectWithoutEmployeeTerritoriesInput, {
    nullable: true
  })
  connectOrCreate?: TerritoriesCreateOrConnectWithoutEmployeeTerritoriesInput | undefined;

  @TypeGraphQL.Field(_type => TerritoriesWhereUniqueInput, {
    nullable: true
  })
  connect?: TerritoriesWhereUniqueInput | undefined;
}
