import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("SuppliersScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class SuppliersScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [SuppliersScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: SuppliersScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [SuppliersScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: SuppliersScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [SuppliersScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: SuppliersScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  SupplierID?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  CompanyName?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  ContactName?: StringNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  ContactTitle?: StringNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  Address?: StringNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  City?: StringNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  Region?: StringNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  PostalCode?: StringNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  Country?: StringNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  Phone?: StringNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  Fax?: StringNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  HomePage?: StringNullableWithAggregatesFilter | undefined;
}
