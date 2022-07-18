import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OrdersCreateManyEmployeesInputEnvelope } from "../inputs/OrdersCreateManyEmployeesInputEnvelope";
import { OrdersCreateOrConnectWithoutEmployeesInput } from "../inputs/OrdersCreateOrConnectWithoutEmployeesInput";
import { OrdersCreateWithoutEmployeesInput } from "../inputs/OrdersCreateWithoutEmployeesInput";
import { OrdersWhereUniqueInput } from "../inputs/OrdersWhereUniqueInput";

@TypeGraphQL.InputType("OrdersCreateNestedManyWithoutEmployeesInput", {
  isAbstract: true
})
export class OrdersCreateNestedManyWithoutEmployeesInput {
  @TypeGraphQL.Field(_type => [OrdersCreateWithoutEmployeesInput], {
    nullable: true
  })
  create?: OrdersCreateWithoutEmployeesInput[] | undefined;

  @TypeGraphQL.Field(_type => [OrdersCreateOrConnectWithoutEmployeesInput], {
    nullable: true
  })
  connectOrCreate?: OrdersCreateOrConnectWithoutEmployeesInput[] | undefined;

  @TypeGraphQL.Field(_type => OrdersCreateManyEmployeesInputEnvelope, {
    nullable: true
  })
  createMany?: OrdersCreateManyEmployeesInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [OrdersWhereUniqueInput], {
    nullable: true
  })
  connect?: OrdersWhereUniqueInput[] | undefined;
}
