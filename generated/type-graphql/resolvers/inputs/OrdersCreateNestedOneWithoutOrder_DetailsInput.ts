import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OrdersCreateOrConnectWithoutOrder_DetailsInput } from "../inputs/OrdersCreateOrConnectWithoutOrder_DetailsInput";
import { OrdersCreateWithoutOrder_DetailsInput } from "../inputs/OrdersCreateWithoutOrder_DetailsInput";
import { OrdersWhereUniqueInput } from "../inputs/OrdersWhereUniqueInput";

@TypeGraphQL.InputType("OrdersCreateNestedOneWithoutOrder_DetailsInput", {
  isAbstract: true
})
export class OrdersCreateNestedOneWithoutOrder_DetailsInput {
  @TypeGraphQL.Field(_type => OrdersCreateWithoutOrder_DetailsInput, {
    nullable: true
  })
  create?: OrdersCreateWithoutOrder_DetailsInput | undefined;

  @TypeGraphQL.Field(_type => OrdersCreateOrConnectWithoutOrder_DetailsInput, {
    nullable: true
  })
  connectOrCreate?: OrdersCreateOrConnectWithoutOrder_DetailsInput | undefined;

  @TypeGraphQL.Field(_type => OrdersWhereUniqueInput, {
    nullable: true
  })
  connect?: OrdersWhereUniqueInput | undefined;
}
