import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EmployeesCreateManyEmployeesInputEnvelope } from "../inputs/EmployeesCreateManyEmployeesInputEnvelope";
import { EmployeesCreateOrConnectWithoutEmployeesInput } from "../inputs/EmployeesCreateOrConnectWithoutEmployeesInput";
import { EmployeesCreateWithoutEmployeesInput } from "../inputs/EmployeesCreateWithoutEmployeesInput";
import { EmployeesScalarWhereInput } from "../inputs/EmployeesScalarWhereInput";
import { EmployeesUpdateManyWithWhereWithoutEmployeesInput } from "../inputs/EmployeesUpdateManyWithWhereWithoutEmployeesInput";
import { EmployeesUpdateWithWhereUniqueWithoutEmployeesInput } from "../inputs/EmployeesUpdateWithWhereUniqueWithoutEmployeesInput";
import { EmployeesUpsertWithWhereUniqueWithoutEmployeesInput } from "../inputs/EmployeesUpsertWithWhereUniqueWithoutEmployeesInput";
import { EmployeesWhereUniqueInput } from "../inputs/EmployeesWhereUniqueInput";

@TypeGraphQL.InputType("EmployeesUpdateManyWithoutEmployeesNestedInput", {
  isAbstract: true
})
export class EmployeesUpdateManyWithoutEmployeesNestedInput {
  @TypeGraphQL.Field(_type => [EmployeesCreateWithoutEmployeesInput], {
    nullable: true
  })
  create?: EmployeesCreateWithoutEmployeesInput[] | undefined;

  @TypeGraphQL.Field(_type => [EmployeesCreateOrConnectWithoutEmployeesInput], {
    nullable: true
  })
  connectOrCreate?: EmployeesCreateOrConnectWithoutEmployeesInput[] | undefined;

  @TypeGraphQL.Field(_type => [EmployeesUpsertWithWhereUniqueWithoutEmployeesInput], {
    nullable: true
  })
  upsert?: EmployeesUpsertWithWhereUniqueWithoutEmployeesInput[] | undefined;

  @TypeGraphQL.Field(_type => EmployeesCreateManyEmployeesInputEnvelope, {
    nullable: true
  })
  createMany?: EmployeesCreateManyEmployeesInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [EmployeesWhereUniqueInput], {
    nullable: true
  })
  set?: EmployeesWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [EmployeesWhereUniqueInput], {
    nullable: true
  })
  disconnect?: EmployeesWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [EmployeesWhereUniqueInput], {
    nullable: true
  })
  delete?: EmployeesWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [EmployeesWhereUniqueInput], {
    nullable: true
  })
  connect?: EmployeesWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [EmployeesUpdateWithWhereUniqueWithoutEmployeesInput], {
    nullable: true
  })
  update?: EmployeesUpdateWithWhereUniqueWithoutEmployeesInput[] | undefined;

  @TypeGraphQL.Field(_type => [EmployeesUpdateManyWithWhereWithoutEmployeesInput], {
    nullable: true
  })
  updateMany?: EmployeesUpdateManyWithWhereWithoutEmployeesInput[] | undefined;

  @TypeGraphQL.Field(_type => [EmployeesScalarWhereInput], {
    nullable: true
  })
  deleteMany?: EmployeesScalarWhereInput[] | undefined;
}
