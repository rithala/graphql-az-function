import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Orders } from "../models/Orders";
import { Products } from "../models/Products";

@TypeGraphQL.ObjectType("Order_Details", {
  isAbstract: true
})
export class Order_Details {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  OrderID!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  ProductID!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: false
  })
  UnitPrice!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  Quantity!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: false
  })
  Discount!: number;

  Orders?: Orders;

  Products?: Products;
}
