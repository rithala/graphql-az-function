import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OrdersCreateManyEmployeesInputEnvelope } from "../inputs/OrdersCreateManyEmployeesInputEnvelope";
import { OrdersCreateOrConnectWithoutEmployeesInput } from "../inputs/OrdersCreateOrConnectWithoutEmployeesInput";
import { OrdersCreateWithoutEmployeesInput } from "../inputs/OrdersCreateWithoutEmployeesInput";
import { OrdersScalarWhereInput } from "../inputs/OrdersScalarWhereInput";
import { OrdersUpdateManyWithWhereWithoutEmployeesInput } from "../inputs/OrdersUpdateManyWithWhereWithoutEmployeesInput";
import { OrdersUpdateWithWhereUniqueWithoutEmployeesInput } from "../inputs/OrdersUpdateWithWhereUniqueWithoutEmployeesInput";
import { OrdersUpsertWithWhereUniqueWithoutEmployeesInput } from "../inputs/OrdersUpsertWithWhereUniqueWithoutEmployeesInput";
import { OrdersWhereUniqueInput } from "../inputs/OrdersWhereUniqueInput";

@TypeGraphQL.InputType("OrdersUpdateManyWithoutEmployeesNestedInput", {
  isAbstract: true
})
export class OrdersUpdateManyWithoutEmployeesNestedInput {
  @TypeGraphQL.Field(_type => [OrdersCreateWithoutEmployeesInput], {
    nullable: true
  })
  create?: OrdersCreateWithoutEmployeesInput[] | undefined;

  @TypeGraphQL.Field(_type => [OrdersCreateOrConnectWithoutEmployeesInput], {
    nullable: true
  })
  connectOrCreate?: OrdersCreateOrConnectWithoutEmployeesInput[] | undefined;

  @TypeGraphQL.Field(_type => [OrdersUpsertWithWhereUniqueWithoutEmployeesInput], {
    nullable: true
  })
  upsert?: OrdersUpsertWithWhereUniqueWithoutEmployeesInput[] | undefined;

  @TypeGraphQL.Field(_type => OrdersCreateManyEmployeesInputEnvelope, {
    nullable: true
  })
  createMany?: OrdersCreateManyEmployeesInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [OrdersWhereUniqueInput], {
    nullable: true
  })
  set?: OrdersWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [OrdersWhereUniqueInput], {
    nullable: true
  })
  disconnect?: OrdersWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [OrdersWhereUniqueInput], {
    nullable: true
  })
  delete?: OrdersWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [OrdersWhereUniqueInput], {
    nullable: true
  })
  connect?: OrdersWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [OrdersUpdateWithWhereUniqueWithoutEmployeesInput], {
    nullable: true
  })
  update?: OrdersUpdateWithWhereUniqueWithoutEmployeesInput[] | undefined;

  @TypeGraphQL.Field(_type => [OrdersUpdateManyWithWhereWithoutEmployeesInput], {
    nullable: true
  })
  updateMany?: OrdersUpdateManyWithWhereWithoutEmployeesInput[] | undefined;

  @TypeGraphQL.Field(_type => [OrdersScalarWhereInput], {
    nullable: true
  })
  deleteMany?: OrdersScalarWhereInput[] | undefined;
}
