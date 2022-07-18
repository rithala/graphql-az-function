import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ProductsCreateManyInput } from "../../../inputs/ProductsCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyProductsArgs {
  @TypeGraphQL.Field(_type => [ProductsCreateManyInput], {
    nullable: false
  })
  data!: ProductsCreateManyInput[];
}
