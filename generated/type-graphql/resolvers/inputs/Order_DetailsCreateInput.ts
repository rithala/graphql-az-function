import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OrdersCreateNestedOneWithoutOrder_DetailsInput } from "../inputs/OrdersCreateNestedOneWithoutOrder_DetailsInput";
import { ProductsCreateNestedOneWithoutOrder_DetailsInput } from "../inputs/ProductsCreateNestedOneWithoutOrder_DetailsInput";

@TypeGraphQL.InputType("Order_DetailsCreateInput", {
  isAbstract: true
})
export class Order_DetailsCreateInput {
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

  @TypeGraphQL.Field(_type => ProductsCreateNestedOneWithoutOrder_DetailsInput, {
    nullable: false
  })
  Products!: ProductsCreateNestedOneWithoutOrder_DetailsInput;
}
