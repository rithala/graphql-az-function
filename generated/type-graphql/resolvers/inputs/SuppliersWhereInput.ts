import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";
import { ProductsListRelationFilter } from "../inputs/ProductsListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType("SuppliersWhereInput", {
  isAbstract: true
})
export class SuppliersWhereInput {
  @TypeGraphQL.Field(_type => [SuppliersWhereInput], {
    nullable: true
  })
  AND?: SuppliersWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [SuppliersWhereInput], {
    nullable: true
  })
  OR?: SuppliersWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [SuppliersWhereInput], {
    nullable: true
  })
  NOT?: SuppliersWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  SupplierID?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  CompanyName?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  ContactName?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  ContactTitle?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  Address?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  City?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  Region?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  PostalCode?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  Country?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  Phone?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  Fax?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  HomePage?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => ProductsListRelationFilter, {
    nullable: true
  })
  Products?: ProductsListRelationFilter | undefined;
}
