import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OrdersOrderByWithRelationInput } from "../inputs/OrdersOrderByWithRelationInput";
import { ProductsOrderByWithRelationInput } from "../inputs/ProductsOrderByWithRelationInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Order_DetailsOrderByWithRelationInput", {
  isAbstract: true
})
export class Order_DetailsOrderByWithRelationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  OrderID?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  ProductID?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  UnitPrice?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  Quantity?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  Discount?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => OrdersOrderByWithRelationInput, {
    nullable: true
  })
  Orders?: OrdersOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => ProductsOrderByWithRelationInput, {
    nullable: true
  })
  Products?: ProductsOrderByWithRelationInput | undefined;
}
