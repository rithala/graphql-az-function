import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductsCreateNestedManyWithoutCategoriesInput } from "../inputs/ProductsCreateNestedManyWithoutCategoriesInput";

@TypeGraphQL.InputType("CategoriesCreateInput", {
  isAbstract: true
})
export class CategoriesCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  CategoryName!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  Description?: string | undefined;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: true
  })
  Picture?: Buffer | undefined;

  @TypeGraphQL.Field(_type => ProductsCreateNestedManyWithoutCategoriesInput, {
    nullable: true
  })
  Products?: ProductsCreateNestedManyWithoutCategoriesInput | undefined;
}
