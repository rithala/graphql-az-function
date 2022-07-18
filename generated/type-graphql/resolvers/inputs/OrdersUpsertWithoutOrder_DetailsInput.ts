import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OrdersCreateWithoutOrder_DetailsInput } from "../inputs/OrdersCreateWithoutOrder_DetailsInput";
import { OrdersUpdateWithoutOrder_DetailsInput } from "../inputs/OrdersUpdateWithoutOrder_DetailsInput";

@TypeGraphQL.InputType("OrdersUpsertWithoutOrder_DetailsInput", {
  isAbstract: true
})
export class OrdersUpsertWithoutOrder_DetailsInput {
  @TypeGraphQL.Field(_type => OrdersUpdateWithoutOrder_DetailsInput, {
    nullable: false
  })
  update!: OrdersUpdateWithoutOrder_DetailsInput;

  @TypeGraphQL.Field(_type => OrdersCreateWithoutOrder_DetailsInput, {
    nullable: false
  })
  create!: OrdersCreateWithoutOrder_DetailsInput;
}
