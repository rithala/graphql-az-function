import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.ObjectType("OrdersCount", {
  isAbstract: true
})
export class OrdersCount {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  Order_Details!: number;
}
