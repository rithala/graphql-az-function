import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TerritoriesCreateOrConnectWithoutEmployeeTerritoriesInput } from "../inputs/TerritoriesCreateOrConnectWithoutEmployeeTerritoriesInput";
import { TerritoriesCreateWithoutEmployeeTerritoriesInput } from "../inputs/TerritoriesCreateWithoutEmployeeTerritoriesInput";
import { TerritoriesUpdateWithoutEmployeeTerritoriesInput } from "../inputs/TerritoriesUpdateWithoutEmployeeTerritoriesInput";
import { TerritoriesUpsertWithoutEmployeeTerritoriesInput } from "../inputs/TerritoriesUpsertWithoutEmployeeTerritoriesInput";
import { TerritoriesWhereUniqueInput } from "../inputs/TerritoriesWhereUniqueInput";

@TypeGraphQL.InputType("TerritoriesUpdateOneRequiredWithoutEmployeeTerritoriesNestedInput", {
  isAbstract: true
})
export class TerritoriesUpdateOneRequiredWithoutEmployeeTerritoriesNestedInput {
  @TypeGraphQL.Field(_type => TerritoriesCreateWithoutEmployeeTerritoriesInput, {
    nullable: true
  })
  create?: TerritoriesCreateWithoutEmployeeTerritoriesInput | undefined;

  @TypeGraphQL.Field(_type => TerritoriesCreateOrConnectWithoutEmployeeTerritoriesInput, {
    nullable: true
  })
  connectOrCreate?: TerritoriesCreateOrConnectWithoutEmployeeTerritoriesInput | undefined;

  @TypeGraphQL.Field(_type => TerritoriesUpsertWithoutEmployeeTerritoriesInput, {
    nullable: true
  })
  upsert?: TerritoriesUpsertWithoutEmployeeTerritoriesInput | undefined;

  @TypeGraphQL.Field(_type => TerritoriesWhereUniqueInput, {
    nullable: true
  })
  connect?: TerritoriesWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TerritoriesUpdateWithoutEmployeeTerritoriesInput, {
    nullable: true
  })
  update?: TerritoriesUpdateWithoutEmployeeTerritoriesInput | undefined;
}
