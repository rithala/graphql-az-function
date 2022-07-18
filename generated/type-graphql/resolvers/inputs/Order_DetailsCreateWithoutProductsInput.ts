import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OrdersCreateNestedOneWithoutOrder_DetailsInput } from "../inputs/OrdersCreateNestedOneWithoutOrder_DetailsInput";

@TypeGraphQL.InputType("Order_DetailsCreateWithoutProductsInput", {
  isAbstract: true
})
export class Order_DetailsCreateWithoutProductsInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: true
  })
  UnitPrice?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  Quantity?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: true
  })
  Discount?: number | undefined;

  @TypeGraphQL.Field(_type => OrdersCreateNestedOneWithoutOrder_DetailsInput, {
    nullable: false
  })
  Orders!: OrdersCreateNestedOneWithoutOrder_DetailsInput;
}
