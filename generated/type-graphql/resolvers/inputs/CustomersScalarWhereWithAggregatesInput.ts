import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("CustomersScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class CustomersScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [CustomersScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: CustomersScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [CustomersScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: CustomersScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [CustomersScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: CustomersScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  CustomerID?: StringWithAggregatesFilter | undefined;

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
}
