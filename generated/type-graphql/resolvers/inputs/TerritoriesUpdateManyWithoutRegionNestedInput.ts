import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TerritoriesCreateManyRegionInputEnvelope } from "../inputs/TerritoriesCreateManyRegionInputEnvelope";
import { TerritoriesCreateOrConnectWithoutRegionInput } from "../inputs/TerritoriesCreateOrConnectWithoutRegionInput";
import { TerritoriesCreateWithoutRegionInput } from "../inputs/TerritoriesCreateWithoutRegionInput";
import { TerritoriesScalarWhereInput } from "../inputs/TerritoriesScalarWhereInput";
import { TerritoriesUpdateManyWithWhereWithoutRegionInput } from "../inputs/TerritoriesUpdateManyWithWhereWithoutRegionInput";
import { TerritoriesUpdateWithWhereUniqueWithoutRegionInput } from "../inputs/TerritoriesUpdateWithWhereUniqueWithoutRegionInput";
import { TerritoriesUpsertWithWhereUniqueWithoutRegionInput } from "../inputs/TerritoriesUpsertWithWhereUniqueWithoutRegionInput";
import { TerritoriesWhereUniqueInput } from "../inputs/TerritoriesWhereUniqueInput";

@TypeGraphQL.InputType("TerritoriesUpdateManyWithoutRegionNestedInput", {
  isAbstract: true
})
export class TerritoriesUpdateManyWithoutRegionNestedInput {
  @TypeGraphQL.Field(_type => [TerritoriesCreateWithoutRegionInput], {
    nullable: true
  })
  create?: TerritoriesCreateWithoutRegionInput[] | undefined;

  @TypeGraphQL.Field(_type => [TerritoriesCreateOrConnectWithoutRegionInput], {
    nullable: true
  })
  connectOrCreate?: TerritoriesCreateOrConnectWithoutRegionInput[] | undefined;

  @TypeGraphQL.Field(_type => [TerritoriesUpsertWithWhereUniqueWithoutRegionInput], {
    nullable: true
  })
  upsert?: TerritoriesUpsertWithWhereUniqueWithoutRegionInput[] | undefined;

  @TypeGraphQL.Field(_type => TerritoriesCreateManyRegionInputEnvelope, {
    nullable: true
  })
  createMany?: TerritoriesCreateManyRegionInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [TerritoriesWhereUniqueInput], {
    nullable: true
  })
  set?: TerritoriesWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TerritoriesWhereUniqueInput], {
    nullable: true
  })
  disconnect?: TerritoriesWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TerritoriesWhereUniqueInput], {
    nullable: true
  })
  delete?: TerritoriesWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TerritoriesWhereUniqueInput], {
    nullable: true
  })
  connect?: TerritoriesWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TerritoriesUpdateWithWhereUniqueWithoutRegionInput], {
    nullable: true
  })
  update?: TerritoriesUpdateWithWhereUniqueWithoutRegionInput[] | undefined;

  @TypeGraphQL.Field(_type => [TerritoriesUpdateManyWithWhereWithoutRegionInput], {
    nullable: true
  })
  updateMany?: TerritoriesUpdateManyWithWhereWithoutRegionInput[] | undefined;

  @TypeGraphQL.Field(_type => [TerritoriesScalarWhereInput], {
    nullable: true
  })
  deleteMany?: TerritoriesScalarWhereInput[] | undefined;
}
