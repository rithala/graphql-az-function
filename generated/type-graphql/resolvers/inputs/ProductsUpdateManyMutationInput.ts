import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolFieldUpdateOperationsInput } from "../inputs/BoolFieldUpdateOperationsInput";
import { NullableFloatFieldUpdateOperationsInput } from "../inputs/NullableFloatFieldUpdateOperationsInput";
import { NullableIntFieldUpdateOperationsInput } from "../inputs/NullableIntFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("ProductsUpdateManyMutationInput", {
  isAbstract: true
})
export class ProductsUpdateManyMutationInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  ProductName?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  QuantityPerUnit?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableFloatFieldUpdateOperationsInput, {
    nullable: true
  })
  UnitPrice?: NullableFloatFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableIntFieldUpdateOperationsInput, {
    nullable: true
  })
  UnitsInStock?: NullableIntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableIntFieldUpdateOperationsInput, {
    nullable: true
  })
  UnitsOnOrder?: NullableIntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableIntFieldUpdateOperationsInput, {
    nullable: true
  })
  ReorderLevel?: NullableIntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => BoolFieldUpdateOperationsInput, {
    nullable: true
  })
  Discontinued?: BoolFieldUpdateOperationsInput | undefined;
}
