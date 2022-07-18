import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FloatFieldUpdateOperationsInput } from "../inputs/FloatFieldUpdateOperationsInput";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { OrdersUpdateOneRequiredWithoutOrder_DetailsNestedInput } from "../inputs/OrdersUpdateOneRequiredWithoutOrder_DetailsNestedInput";
import { ProductsUpdateOneRequiredWithoutOrder_DetailsNestedInput } from "../inputs/ProductsUpdateOneRequiredWithoutOrder_DetailsNestedInput";

@TypeGraphQL.InputType("Order_DetailsUpdateInput", {
  isAbstract: true
})
export class Order_DetailsUpdateInput {
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

  @TypeGraphQL.Field(_type => ProductsUpdateOneRequiredWithoutOrder_DetailsNestedInput, {
    nullable: true
  })
  Products?: ProductsUpdateOneRequiredWithoutOrder_DetailsNestedInput | undefined;
}
