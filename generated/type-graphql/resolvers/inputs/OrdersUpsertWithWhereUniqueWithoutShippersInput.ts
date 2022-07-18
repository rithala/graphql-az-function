import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OrdersCreateWithoutShippersInput } from "../inputs/OrdersCreateWithoutShippersInput";
import { OrdersUpdateWithoutShippersInput } from "../inputs/OrdersUpdateWithoutShippersInput";
import { OrdersWhereUniqueInput } from "../inputs/OrdersWhereUniqueInput";

@TypeGraphQL.InputType("OrdersUpsertWithWhereUniqueWithoutShippersInput", {
  isAbstract: true
})
export class OrdersUpsertWithWhereUniqueWithoutShippersInput {
  @TypeGraphQL.Field(_type => OrdersWhereUniqueInput, {
    nullable: false
  })
  where!: OrdersWhereUniqueInput;

  @TypeGraphQL.Field(_type => OrdersUpdateWithoutShippersInput, {
    nullable: false
  })
  update!: OrdersUpdateWithoutShippersInput;

  @TypeGraphQL.Field(_type => OrdersCreateWithoutShippersInput, {
    nullable: false
  })
  create!: OrdersCreateWithoutShippersInput;
}
