import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BytesNullableFilter } from "../inputs/BytesNullableFilter";
import { IntFilter } from "../inputs/IntFilter";
import { ProductsListRelationFilter } from "../inputs/ProductsListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType("CategoriesWhereInput", {
  isAbstract: true
})
export class CategoriesWhereInput {
  @TypeGraphQL.Field(_type => [CategoriesWhereInput], {
    nullable: true
  })
  AND?: CategoriesWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [CategoriesWhereInput], {
    nullable: true
  })
  OR?: CategoriesWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [CategoriesWhereInput], {
    nullable: true
  })
  NOT?: CategoriesWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  CategoryID?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  CategoryName?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  Description?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => BytesNullableFilter, {
    nullable: true
  })
  Picture?: BytesNullableFilter | undefined;

  @TypeGraphQL.Field(_type => ProductsListRelationFilter, {
    nullable: true
  })
  Products?: ProductsListRelationFilter | undefined;
}
