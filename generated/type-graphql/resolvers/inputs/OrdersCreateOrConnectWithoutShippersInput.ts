import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OrdersCreateWithoutShippersInput } from "../inputs/OrdersCreateWithoutShippersInput";
import { OrdersWhereUniqueInput } from "../inputs/OrdersWhereUniqueInput";

@TypeGraphQL.InputType("OrdersCreateOrConnectWithoutShippersInput", {
  isAbstract: true
})
export class OrdersCreateOrConnectWithoutShippersInput {
  @TypeGraphQL.Field(_type => OrdersWhereUniqueInput, {
    nullable: false
  })
  where!: OrdersWhereUniqueInput;

  @TypeGraphQL.Field(_type => OrdersCreateWithoutShippersInput, {
    nullable: false
  })
  create!: OrdersCreateWithoutShippersInput;
}
