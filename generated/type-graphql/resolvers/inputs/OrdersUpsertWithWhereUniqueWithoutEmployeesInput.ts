import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OrdersCreateWithoutEmployeesInput } from "../inputs/OrdersCreateWithoutEmployeesInput";
import { OrdersUpdateWithoutEmployeesInput } from "../inputs/OrdersUpdateWithoutEmployeesInput";
import { OrdersWhereUniqueInput } from "../inputs/OrdersWhereUniqueInput";

@TypeGraphQL.InputType("OrdersUpsertWithWhereUniqueWithoutEmployeesInput", {
  isAbstract: true
})
export class OrdersUpsertWithWhereUniqueWithoutEmployeesInput {
  @TypeGraphQL.Field(_type => OrdersWhereUniqueInput, {
    nullable: false
  })
  where!: OrdersWhereUniqueInput;

  @TypeGraphQL.Field(_type => OrdersUpdateWithoutEmployeesInput, {
    nullable: false
  })
  update!: OrdersUpdateWithoutEmployeesInput;

  @TypeGraphQL.Field(_type => OrdersCreateWithoutEmployeesInput, {
    nullable: false
  })
  create!: OrdersCreateWithoutEmployeesInput;
}
