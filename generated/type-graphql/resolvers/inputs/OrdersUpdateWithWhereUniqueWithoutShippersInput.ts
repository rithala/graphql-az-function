import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OrdersUpdateWithoutShippersInput } from "../inputs/OrdersUpdateWithoutShippersInput";
import { OrdersWhereUniqueInput } from "../inputs/OrdersWhereUniqueInput";

@TypeGraphQL.InputType("OrdersUpdateWithWhereUniqueWithoutShippersInput", {
  isAbstract: true
})
export class OrdersUpdateWithWhereUniqueWithoutShippersInput {
  @TypeGraphQL.Field(_type => OrdersWhereUniqueInput, {
    nullable: false
  })
  where!: OrdersWhereUniqueInput;

  @TypeGraphQL.Field(_type => OrdersUpdateWithoutShippersInput, {
    nullable: false
  })
  data!: OrdersUpdateWithoutShippersInput;
}
