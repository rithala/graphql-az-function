import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OrdersCreateManyShippersInputEnvelope } from "../inputs/OrdersCreateManyShippersInputEnvelope";
import { OrdersCreateOrConnectWithoutShippersInput } from "../inputs/OrdersCreateOrConnectWithoutShippersInput";
import { OrdersCreateWithoutShippersInput } from "../inputs/OrdersCreateWithoutShippersInput";
import { OrdersScalarWhereInput } from "../inputs/OrdersScalarWhereInput";
import { OrdersUpdateManyWithWhereWithoutShippersInput } from "../inputs/OrdersUpdateManyWithWhereWithoutShippersInput";
import { OrdersUpdateWithWhereUniqueWithoutShippersInput } from "../inputs/OrdersUpdateWithWhereUniqueWithoutShippersInput";
import { OrdersUpsertWithWhereUniqueWithoutShippersInput } from "../inputs/OrdersUpsertWithWhereUniqueWithoutShippersInput";
import { OrdersWhereUniqueInput } from "../inputs/OrdersWhereUniqueInput";

@TypeGraphQL.InputType("OrdersUpdateManyWithoutShippersNestedInput", {
  isAbstract: true
})
export class OrdersUpdateManyWithoutShippersNestedInput {
  @TypeGraphQL.Field(_type => [OrdersCreateWithoutShippersInput], {
    nullable: true
  })
  create?: OrdersCreateWithoutShippersInput[] | undefined;

  @TypeGraphQL.Field(_type => [OrdersCreateOrConnectWithoutShippersInput], {
    nullable: true
  })
  connectOrCreate?: OrdersCreateOrConnectWithoutShippersInput[] | undefined;

  @TypeGraphQL.Field(_type => [OrdersUpsertWithWhereUniqueWithoutShippersInput], {
    nullable: true
  })
  upsert?: OrdersUpsertWithWhereUniqueWithoutShippersInput[] | undefined;

  @TypeGraphQL.Field(_type => OrdersCreateManyShippersInputEnvelope, {
    nullable: true
  })
  createMany?: OrdersCreateManyShippersInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [OrdersUpdateWithWhereUniqueWithoutShippersInput], {
    nullable: true
  })
  update?: OrdersUpdateWithWhereUniqueWithoutShippersInput[] | undefined;

  @TypeGraphQL.Field(_type => [OrdersUpdateManyWithWhereWithoutShippersInput], {
    nullable: true
  })
  updateMany?: OrdersUpdateManyWithWhereWithoutShippersInput[] | undefined;

  @TypeGraphQL.Field(_type => [OrdersScalarWhereInput], {
    nullable: true
  })
  deleteMany?: OrdersScalarWhereInput[] | undefined;
}
