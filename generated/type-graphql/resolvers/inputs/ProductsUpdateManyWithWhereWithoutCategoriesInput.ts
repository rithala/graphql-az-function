import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductsScalarWhereInput } from "../inputs/ProductsScalarWhereInput";
import { ProductsUpdateManyMutationInput } from "../inputs/ProductsUpdateManyMutationInput";

@TypeGraphQL.InputType("ProductsUpdateManyWithWhereWithoutCategoriesInput", {
  isAbstract: true
})
export class ProductsUpdateManyWithWhereWithoutCategoriesInput {
  @TypeGraphQL.Field(_type => ProductsScalarWhereInput, {
    nullable: false
  })
  where!: ProductsScalarWhereInput;

  @TypeGraphQL.Field(_type => ProductsUpdateManyMutationInput, {
    nullable: false
  })
  data!: ProductsUpdateManyMutationInput;
}
