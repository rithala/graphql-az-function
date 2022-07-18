import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OrdersCreateManyShippersInputEnvelope } from "../inputs/OrdersCreateManyShippersInputEnvelope";
import { OrdersCreateOrConnectWithoutShippersInput } from "../inputs/OrdersCreateOrConnectWithoutShippersInput";
import { OrdersCreateWithoutShippersInput } from "../inputs/OrdersCreateWithoutShippersInput";
import { OrdersWhereUniqueInput } from "../inputs/OrdersWhereUniqueInput";

@TypeGraphQL.InputType("OrdersCreateNestedManyWithoutShippersInput", {
  isAbstract: true
})
export class OrdersCreateNestedManyWithoutShippersInput {
  @TypeGraphQL.Field(_type => [OrdersCreateWithoutShippersInput], {
    nullable: true
  })
  create?: OrdersCreateWithoutShippersInput[] | undefined;

  @TypeGraphQL.Field(_type => [OrdersCreateOrConnectWithoutShippersInput], {
    nullable: true
  })
  connectOrCreate?: OrdersCreateOrConnectWithoutShippersInput[] | undefined;

  @TypeGraphQL.Field(_type => OrdersCreateManyShippersInputEnvelope, {
    nullable: true
  })
  createMany?: OrdersCreateManyShippersInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [OrdersWhereUniqueInput], {
    nullable: true
  })
  connect?: OrdersWhereUniqueInput[] | undefined;
}
