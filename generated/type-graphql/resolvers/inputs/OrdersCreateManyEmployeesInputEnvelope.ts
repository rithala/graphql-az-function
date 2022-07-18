import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OrdersCreateManyEmployeesInput } from "../inputs/OrdersCreateManyEmployeesInput";

@TypeGraphQL.InputType("OrdersCreateManyEmployeesInputEnvelope", {
  isAbstract: true
})
export class OrdersCreateManyEmployeesInputEnvelope {
  @TypeGraphQL.Field(_type => [OrdersCreateManyEmployeesInput], {
    nullable: false
  })
  data!: OrdersCreateManyEmployeesInput[];
}
