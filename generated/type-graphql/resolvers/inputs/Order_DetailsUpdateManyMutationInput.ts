import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FloatFieldUpdateOperationsInput } from "../inputs/FloatFieldUpdateOperationsInput";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";

@TypeGraphQL.InputType("Order_DetailsUpdateManyMutationInput", {
  isAbstract: true
})
export class Order_DetailsUpdateManyMutationInput {
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
}
