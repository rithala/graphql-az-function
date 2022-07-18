import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductsUpdateWithoutCategoriesInput } from "../inputs/ProductsUpdateWithoutCategoriesInput";
import { ProductsWhereUniqueInput } from "../inputs/ProductsWhereUniqueInput";

@TypeGraphQL.InputType("ProductsUpdateWithWhereUniqueWithoutCategoriesInput", {
  isAbstract: true
})
export class ProductsUpdateWithWhereUniqueWithoutCategoriesInput {
  @TypeGraphQL.Field(_type => ProductsWhereUniqueInput, {
    nullable: false
  })
  where!: ProductsWhereUniqueInput;

  @TypeGraphQL.Field(_type => ProductsUpdateWithoutCategoriesInput, {
    nullable: false
  })
  data!: ProductsUpdateWithoutCategoriesInput;
}
