import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NullableBytesFieldUpdateOperationsInput } from "../inputs/NullableBytesFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { ProductsUpdateManyWithoutCategoriesNestedInput } from "../inputs/ProductsUpdateManyWithoutCategoriesNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("CategoriesUpdateInput", {
  isAbstract: true
})
export class CategoriesUpdateInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  CategoryName?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  Description?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableBytesFieldUpdateOperationsInput, {
    nullable: true
  })
  Picture?: NullableBytesFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => ProductsUpdateManyWithoutCategoriesNestedInput, {
    nullable: true
  })
  Products?: ProductsUpdateManyWithoutCategoriesNestedInput | undefined;
}
