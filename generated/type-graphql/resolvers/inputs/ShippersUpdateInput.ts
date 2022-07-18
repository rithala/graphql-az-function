import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { OrdersUpdateManyWithoutShippersNestedInput } from "../inputs/OrdersUpdateManyWithoutShippersNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("ShippersUpdateInput", {
  isAbstract: true
})
export class ShippersUpdateInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  CompanyName?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  Phone?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => OrdersUpdateManyWithoutShippersNestedInput, {
    nullable: true
  })
  Orders?: OrdersUpdateManyWithoutShippersNestedInput | undefined;
}
