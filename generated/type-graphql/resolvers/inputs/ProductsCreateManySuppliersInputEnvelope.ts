import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductsCreateManySuppliersInput } from "../inputs/ProductsCreateManySuppliersInput";

@TypeGraphQL.InputType("ProductsCreateManySuppliersInputEnvelope", {
  isAbstract: true
})
export class ProductsCreateManySuppliersInputEnvelope {
  @TypeGraphQL.Field(_type => [ProductsCreateManySuppliersInput], {
    nullable: false
  })
  data!: ProductsCreateManySuppliersInput[];
}
