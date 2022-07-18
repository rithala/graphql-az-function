import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OrdersCreateWithoutEmployeesInput } from "../inputs/OrdersCreateWithoutEmployeesInput";
import { OrdersWhereUniqueInput } from "../inputs/OrdersWhereUniqueInput";

@TypeGraphQL.InputType("OrdersCreateOrConnectWithoutEmployeesInput", {
  isAbstract: true
})
export class OrdersCreateOrConnectWithoutEmployeesInput {
  @TypeGraphQL.Field(_type => OrdersWhereUniqueInput, {
    nullable: false
  })
  where!: OrdersWhereUniqueInput;

  @TypeGraphQL.Field(_type => OrdersCreateWithoutEmployeesInput, {
    nullable: false
  })
  create!: OrdersCreateWithoutEmployeesInput;
}
