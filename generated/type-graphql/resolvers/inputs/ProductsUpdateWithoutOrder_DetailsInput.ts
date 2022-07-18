import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolFieldUpdateOperationsInput } from "../inputs/BoolFieldUpdateOperationsInput";
import { CategoriesUpdateOneWithoutProductsNestedInput } from "../inputs/CategoriesUpdateOneWithoutProductsNestedInput";
import { NullableFloatFieldUpdateOperationsInput } from "../inputs/NullableFloatFieldUpdateOperationsInput";
import { NullableIntFieldUpdateOperationsInput } from "../inputs/NullableIntFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { SuppliersUpdateOneWithoutProductsNestedInput } from "../inputs/SuppliersUpdateOneWithoutProductsNestedInput";

@TypeGraphQL.InputType("ProductsUpdateWithoutOrder_DetailsInput", {
  isAbstract: true
})
export class ProductsUpdateWithoutOrder_DetailsInput {
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

  @TypeGraphQL.Field(_type => CategoriesUpdateOneWithoutProductsNestedInput, {
    nullable: true
  })
  Categories?: CategoriesUpdateOneWithoutProductsNestedInput | undefined;

  @TypeGraphQL.Field(_type => SuppliersUpdateOneWithoutProductsNestedInput, {
    nullable: true
  })
  Suppliers?: SuppliersUpdateOneWithoutProductsNestedInput | undefined;
}
