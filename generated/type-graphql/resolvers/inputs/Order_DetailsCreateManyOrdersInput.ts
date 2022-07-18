import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("Order_DetailsCreateManyOrdersInput", {
  isAbstract: true
})
export class Order_DetailsCreateManyOrdersInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  ProductID!: number;

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
