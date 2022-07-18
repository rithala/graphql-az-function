import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OrdersCreateManyShippersInput } from "../inputs/OrdersCreateManyShippersInput";

@TypeGraphQL.InputType("OrdersCreateManyShippersInputEnvelope", {
  isAbstract: true
})
export class OrdersCreateManyShippersInputEnvelope {
  @TypeGraphQL.Field(_type => [OrdersCreateManyShippersInput], {
    nullable: false
  })
  data!: OrdersCreateManyShippersInput[];
}
