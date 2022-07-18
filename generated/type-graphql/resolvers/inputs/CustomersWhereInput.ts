import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CustomerCustomerDemoListRelationFilter } from "../inputs/CustomerCustomerDemoListRelationFilter";
import { OrdersListRelationFilter } from "../inputs/OrdersListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType("CustomersWhereInput", {
  isAbstract: true
})
export class CustomersWhereInput {
  @TypeGraphQL.Field(_type => [CustomersWhereInput], {
    nullable: true
  })
  AND?: CustomersWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [CustomersWhereInput], {
    nullable: true
  })
  OR?: CustomersWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [CustomersWhereInput], {
    nullable: true
  })
  NOT?: CustomersWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  CustomerID?: StringFilter | undefined;

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

  @TypeGraphQL.Field(_type => CustomerCustomerDemoListRelationFilter, {
    nullable: true
  })
  CustomerCustomerDemo?: CustomerCustomerDemoListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => OrdersListRelationFilter, {
    nullable: true
  })
  Orders?: OrdersListRelationFilter | undefined;
}
