import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OrdersUpdateWithoutEmployeesInput } from "../inputs/OrdersUpdateWithoutEmployeesInput";
import { OrdersWhereUniqueInput } from "../inputs/OrdersWhereUniqueInput";

@TypeGraphQL.InputType("OrdersUpdateWithWhereUniqueWithoutEmployeesInput", {
  isAbstract: true
})
export class OrdersUpdateWithWhereUniqueWithoutEmployeesInput {
  @TypeGraphQL.Field(_type => OrdersWhereUniqueInput, {
    nullable: false
  })
  where!: OrdersWhereUniqueInput;

  @TypeGraphQL.Field(_type => OrdersUpdateWithoutEmployeesInput, {
    nullable: false
  })
  data!: OrdersUpdateWithoutEmployeesInput;
}
