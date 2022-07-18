import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FloatFieldUpdateOperationsInput } from "../inputs/FloatFieldUpdateOperationsInput";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { OrdersUpdateOneRequiredWithoutOrder_DetailsNestedInput } from "../inputs/OrdersUpdateOneRequiredWithoutOrder_DetailsNestedInput";

@TypeGraphQL.InputType("Order_DetailsUpdateWithoutProductsInput", {
  isAbstract: true
})
export class Order_DetailsUpdateWithoutProductsInput {
  @TypeGraphQL.Field(_type => FloatFieldUpdateOperationsInput, {
    nullable: true
  })
  UnitPrice?: FloatFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput, {
    nullable: true
  })
  Quantity?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => FloatFieldUpdateOperationsInput, {
    nullable: true
  })
  Discount?: FloatFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => OrdersUpdateOneRequiredWithoutOrder_DetailsNestedInput, {
    nullable: true
  })
  Orders?: OrdersUpdateOneRequiredWithoutOrder_DetailsNestedInput | undefined;
}
