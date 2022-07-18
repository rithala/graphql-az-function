import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EmployeeTerritoriesCreateManyTerritoriesInputEnvelope } from "../inputs/EmployeeTerritoriesCreateManyTerritoriesInputEnvelope";
import { EmployeeTerritoriesCreateOrConnectWithoutTerritoriesInput } from "../inputs/EmployeeTerritoriesCreateOrConnectWithoutTerritoriesInput";
import { EmployeeTerritoriesCreateWithoutTerritoriesInput } from "../inputs/EmployeeTerritoriesCreateWithoutTerritoriesInput";
import { EmployeeTerritoriesScalarWhereInput } from "../inputs/EmployeeTerritoriesScalarWhereInput";
import { EmployeeTerritoriesUpdateManyWithWhereWithoutTerritoriesInput } from "../inputs/EmployeeTerritoriesUpdateManyWithWhereWithoutTerritoriesInput";
import { EmployeeTerritoriesUpdateWithWhereUniqueWithoutTerritoriesInput } from "../inputs/EmployeeTerritoriesUpdateWithWhereUniqueWithoutTerritoriesInput";
import { EmployeeTerritoriesUpsertWithWhereUniqueWithoutTerritoriesInput } from "../inputs/EmployeeTerritoriesUpsertWithWhereUniqueWithoutTerritoriesInput";
import { EmployeeTerritoriesWhereUniqueInput } from "../inputs/EmployeeTerritoriesWhereUniqueInput";

@TypeGraphQL.InputType("EmployeeTerritoriesUpdateManyWithoutTerritoriesNestedInput", {
  isAbstract: true
})
export class EmployeeTerritoriesUpdateManyWithoutTerritoriesNestedInput {
  @TypeGraphQL.Field(_type => [EmployeeTerritoriesCreateWithoutTerritoriesInput], {
    nullable: true
  })
  create?: EmployeeTerritoriesCreateWithoutTerritoriesInput[] | undefined;

  @TypeGraphQL.Field(_type => [EmployeeTerritoriesCreateOrConnectWithoutTerritoriesInput], {
    nullable: true
  })
  connectOrCreate?: EmployeeTerritoriesCreateOrConnectWithoutTerritoriesInput[] | undefined;

  @TypeGraphQL.Field(_type => [EmployeeTerritoriesUpsertWithWhereUniqueWithoutTerritoriesInput], {
    nullable: true
  })
  upsert?: EmployeeTerritoriesUpsertWithWhereUniqueWithoutTerritoriesInput[] | undefined;

  @TypeGraphQL.Field(_type => EmployeeTerritoriesCreateManyTerritoriesInputEnvelope, {
    nullable: true
  })
  createMany?: EmployeeTerritoriesCreateManyTerritoriesInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [EmployeeTerritoriesWhereUniqueInput], {
    nullable: true
  })
  set?: EmployeeTerritoriesWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [EmployeeTerritoriesWhereUniqueInput], {
    nullable: true
  })
  disconnect?: EmployeeTerritoriesWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [EmployeeTerritoriesWhereUniqueInput], {
    nullable: true
  })
  delete?: EmployeeTerritoriesWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [EmployeeTerritoriesWhereUniqueInput], {
    nullable: true
  })
  connect?: EmployeeTerritoriesWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [EmployeeTerritoriesUpdateWithWhereUniqueWithoutTerritoriesInput], {
    nullable: true
  })
  update?: EmployeeTerritoriesUpdateWithWhereUniqueWithoutTerritoriesInput[] | undefined;

  @TypeGraphQL.Field(_type => [EmployeeTerritoriesUpdateManyWithWhereWithoutTerritoriesInput], {
    nullable: true
  })
  updateMany?: EmployeeTerritoriesUpdateManyWithWhereWithoutTerritoriesInput[] | undefined;

  @TypeGraphQL.Field(_type => [EmployeeTerritoriesScalarWhereInput], {
    nullable: true
  })
  deleteMany?: EmployeeTerritoriesScalarWhereInput[] | undefined;
}
