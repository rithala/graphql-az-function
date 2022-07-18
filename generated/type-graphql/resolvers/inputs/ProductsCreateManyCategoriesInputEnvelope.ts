import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductsCreateManyCategoriesInput } from "../inputs/ProductsCreateManyCategoriesInput";

@TypeGraphQL.InputType("ProductsCreateManyCategoriesInputEnvelope", {
  isAbstract: true
})
export class ProductsCreateManyCategoriesInputEnvelope {
  @TypeGraphQL.Field(_type => [ProductsCreateManyCategoriesInput], {
    nullable: false
  })
  data!: ProductsCreateManyCategoriesInput[];
}
