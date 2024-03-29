import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ProductsWhereUniqueInput } from "../../../inputs/ProductsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOneProductsArgs {
  @TypeGraphQL.Field(_type => ProductsWhereUniqueInput, {
    nullable: false
  })
  where!: ProductsWhereUniqueInput;
}
