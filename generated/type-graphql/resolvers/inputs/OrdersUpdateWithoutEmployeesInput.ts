import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CustomersUpdateOneWithoutOrdersNestedInput } from "../inputs/CustomersUpdateOneWithoutOrdersNestedInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { NullableFloatFieldUpdateOperationsInput } from "../inputs/NullableFloatFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { Order_DetailsUpdateManyWithoutOrdersNestedInput } from "../inputs/Order_DetailsUpdateManyWithoutOrdersNestedInput";
import { ShippersUpdateOneWithoutOrdersNestedInput } from "../inputs/ShippersUpdateOneWithoutOrdersNestedInput";

@TypeGraphQL.InputType("OrdersUpdateWithoutEmployeesInput", {
  isAbstract: true
})
export class OrdersUpdateWithoutEmployeesInput {
  @TypeGraphQL.Field(_type => NullableDateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  OrderDate?: NullableDateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableDateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  RequiredDate?: NullableDateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableDateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  ShippedDate?: NullableDateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableFloatFieldUpdateOperationsInput, {
    nullable: true
  })
  Freight?: NullableFloatFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  ShipName?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  ShipAddress?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  ShipCity?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  ShipRegion?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  ShipPostalCode?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  ShipCountry?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => CustomersUpdateOneWithoutOrdersNestedInput, {
    nullable: true
  })
  Customers?: CustomersUpdateOneWithoutOrdersNestedInput | undefined;

  @TypeGraphQL.Field(_type => ShippersUpdateOneWithoutOrdersNestedInput, {
    nullable: true
  })
  Shippers?: ShippersUpdateOneWithoutOrdersNestedInput | undefined;

  @TypeGraphQL.Field(_type => Order_DetailsUpdateManyWithoutOrdersNestedInput, {
    nullable: true
  })
  Order_Details?: Order_DetailsUpdateManyWithoutOrdersNestedInput | undefined;
}
