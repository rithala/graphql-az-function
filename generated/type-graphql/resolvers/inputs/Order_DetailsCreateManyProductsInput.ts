import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("Order_DetailsCreateManyProductsInput", {
  isAbstract: true
})
export class Order_DetailsCreateManyProductsInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  OrderID!: number;

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
}
