import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TerritoriesCreateManyRegionInputEnvelope } from "../inputs/TerritoriesCreateManyRegionInputEnvelope";
import { TerritoriesCreateOrConnectWithoutRegionInput } from "../inputs/TerritoriesCreateOrConnectWithoutRegionInput";
import { TerritoriesCreateWithoutRegionInput } from "../inputs/TerritoriesCreateWithoutRegionInput";
import { TerritoriesWhereUniqueInput } from "../inputs/TerritoriesWhereUniqueInput";

@TypeGraphQL.InputType("TerritoriesCreateNestedManyWithoutRegionInput", {
  isAbstract: true
})
export class TerritoriesCreateNestedManyWithoutRegionInput {
  @TypeGraphQL.Field(_type => [TerritoriesCreateWithoutRegionInput], {
    nullable: true
  })
  create?: TerritoriesCreateWithoutRegionInput[] | undefined;

  @TypeGraphQL.Field(_type => [TerritoriesCreateOrConnectWithoutRegionInput], {
    nullable: true
  })
  connectOrCreate?: TerritoriesCreateOrConnectWithoutRegionInput[] | undefined;

  @TypeGraphQL.Field(_type => TerritoriesCreateManyRegionInputEnvelope, {
    nullable: true
  })
  createMany?: TerritoriesCreateManyRegionInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [TerritoriesWhereUniqueInput], {
    nullable: true
  })
  connect?: TerritoriesWhereUniqueInput[] | undefined;
}
