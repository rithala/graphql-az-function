import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductsCreateWithoutSuppliersInput } from "../inputs/ProductsCreateWithoutSuppliersInput";
import { ProductsUpdateWithoutSuppliersInput } from "../inputs/ProductsUpdateWithoutSuppliersInput";
import { ProductsWhereUniqueInput } from "../inputs/ProductsWhereUniqueInput";

@TypeGraphQL.InputType("ProductsUpsertWithWhereUniqueWithoutSuppliersInput", {
  isAbstract: true
})
export class ProductsUpsertWithWhereUniqueWithoutSuppliersInput {
  @TypeGraphQL.Field(_type => ProductsWhereUniqueInput, {
    nullable: false
  })
  where!: ProductsWhereUniqueInput;

  @TypeGraphQL.Field(_type => ProductsUpdateWithoutSuppliersInput, {
    nullable: false
  })
  update!: ProductsUpdateWithoutSuppliersInput;

  @TypeGraphQL.Field(_type => ProductsCreateWithoutSuppliersInput, {
    nullable: false
  })
  create!: ProductsCreateWithoutSuppliersInput;
}
