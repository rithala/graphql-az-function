import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OrdersCreateWithoutOrder_DetailsInput } from "../inputs/OrdersCreateWithoutOrder_DetailsInput";
import { OrdersWhereUniqueInput } from "../inputs/OrdersWhereUniqueInput";

@TypeGraphQL.InputType("OrdersCreateOrConnectWithoutOrder_DetailsInput", {
  isAbstract: true
})
export class OrdersCreateOrConnectWithoutOrder_DetailsInput {
  @TypeGraphQL.Field(_type => OrdersWhereUniqueInput, {
    nullable: false
  })
  where!: OrdersWhereUniqueInput;

  @TypeGraphQL.Field(_type => OrdersCreateWithoutOrder_DetailsInput, {
    nullable: false
  })
  create!: OrdersCreateWithoutOrder_DetailsInput;
}
