import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EmployeeTerritoriesCreateManyEmployeesInputEnvelope } from "../inputs/EmployeeTerritoriesCreateManyEmployeesInputEnvelope";
import { EmployeeTerritoriesCreateOrConnectWithoutEmployeesInput } from "../inputs/EmployeeTerritoriesCreateOrConnectWithoutEmployeesInput";
import { EmployeeTerritoriesCreateWithoutEmployeesInput } from "../inputs/EmployeeTerritoriesCreateWithoutEmployeesInput";
import { EmployeeTerritoriesScalarWhereInput } from "../inputs/EmployeeTerritoriesScalarWhereInput";
import { EmployeeTerritoriesUpdateManyWithWhereWithoutEmployeesInput } from "../inputs/EmployeeTerritoriesUpdateManyWithWhereWithoutEmployeesInput";
import { EmployeeTerritoriesUpdateWithWhereUniqueWithoutEmployeesInput } from "../inputs/EmployeeTerritoriesUpdateWithWhereUniqueWithoutEmployeesInput";
import { EmployeeTerritoriesUpsertWithWhereUniqueWithoutEmployeesInput } from "../inputs/EmployeeTerritoriesUpsertWithWhereUniqueWithoutEmployeesInput";
import { EmployeeTerritoriesWhereUniqueInput } from "../inputs/EmployeeTerritoriesWhereUniqueInput";

@TypeGraphQL.InputType("EmployeeTerritoriesUpdateManyWithoutEmployeesNestedInput", {
  isAbstract: true
})
export class EmployeeTerritoriesUpdateManyWithoutEmployeesNestedInput {
  @TypeGraphQL.Field(_type => [EmployeeTerritoriesCreateWithoutEmployeesInput], {
    nullable: true
  })
  create?: EmployeeTerritoriesCreateWithoutEmployeesInput[] | undefined;

  @TypeGraphQL.Field(_type => [EmployeeTerritoriesCreateOrConnectWithoutEmployeesInput], {
    nullable: true
  })
  connectOrCreate?: EmployeeTerritoriesCreateOrConnectWithoutEmployeesInput[] | undefined;

  @TypeGraphQL.Field(_type => [EmployeeTerritoriesUpsertWithWhereUniqueWithoutEmployeesInput], {
    nullable: true
  })
  upsert?: EmployeeTerritoriesUpsertWithWhereUniqueWithoutEmployeesInput[] | undefined;

  @TypeGraphQL.Field(_type => EmployeeTerritoriesCreateManyEmployeesInputEnvelope, {
    nullable: true
  })
  createMany?: EmployeeTerritoriesCreateManyEmployeesInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [EmployeeTerritoriesUpdateWithWhereUniqueWithoutEmployeesInput], {
    nullable: true
  })
  update?: EmployeeTerritoriesUpdateWithWhereUniqueWithoutEmployeesInput[] | undefined;

  @TypeGraphQL.Field(_type => [EmployeeTerritoriesUpdateManyWithWhereWithoutEmployeesInput], {
    nullable: true
  })
  updateMany?: EmployeeTerritoriesUpdateManyWithWhereWithoutEmployeesInput[] | undefined;

  @TypeGraphQL.Field(_type => [EmployeeTerritoriesScalarWhereInput], {
    nullable: true
  })
  deleteMany?: EmployeeTerritoriesScalarWhereInput[] | undefined;
}
