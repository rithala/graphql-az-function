import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OrdersCreateOrConnectWithoutOrder_DetailsInput } from "../inputs/OrdersCreateOrConnectWithoutOrder_DetailsInput";
import { OrdersCreateWithoutOrder_DetailsInput } from "../inputs/OrdersCreateWithoutOrder_DetailsInput";
import { OrdersUpdateWithoutOrder_DetailsInput } from "../inputs/OrdersUpdateWithoutOrder_DetailsInput";
import { OrdersUpsertWithoutOrder_DetailsInput } from "../inputs/OrdersUpsertWithoutOrder_DetailsInput";
import { OrdersWhereUniqueInput } from "../inputs/OrdersWhereUniqueInput";

@TypeGraphQL.InputType("OrdersUpdateOneRequiredWithoutOrder_DetailsNestedInput", {
  isAbstract: true
})
export class OrdersUpdateOneRequiredWithoutOrder_DetailsNestedInput {
  @TypeGraphQL.Field(_type => OrdersCreateWithoutOrder_DetailsInput, {
    nullable: true
  })
  create?: OrdersCreateWithoutOrder_DetailsInput | undefined;

  @TypeGraphQL.Field(_type => OrdersCreateOrConnectWithoutOrder_DetailsInput, {
    nullable: true
  })
  connectOrCreate?: OrdersCreateOrConnectWithoutOrder_DetailsInput | undefined;

  @TypeGraphQL.Field(_type => OrdersUpsertWithoutOrder_DetailsInput, {
    nullable: true
  })
  upsert?: OrdersUpsertWithoutOrder_DetailsInput | undefined;

  @TypeGraphQL.Field(_type => OrdersWhereUniqueInput, {
    nullable: true
  })
  connect?: OrdersWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => OrdersUpdateWithoutOrder_DetailsInput, {
    nullable: true
  })
  update?: OrdersUpdateWithoutOrder_DetailsInput | undefined;
}
