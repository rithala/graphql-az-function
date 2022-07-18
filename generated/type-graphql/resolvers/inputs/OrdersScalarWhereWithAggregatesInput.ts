import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeNullableWithAggregatesFilter } from "../inputs/DateTimeNullableWithAggregatesFilter";
import { FloatNullableWithAggregatesFilter } from "../inputs/FloatNullableWithAggregatesFilter";
import { IntNullableWithAggregatesFilter } from "../inputs/IntNullableWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";

@TypeGraphQL.InputType("OrdersScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class OrdersScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [OrdersScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: OrdersScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [OrdersScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: OrdersScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [OrdersScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: OrdersScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  OrderID?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  CustomerID?: StringNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableWithAggregatesFilter, {
    nullable: true
  })
  EmployeeID?: IntNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableWithAggregatesFilter, {
    nullable: true
  })
  OrderDate?: DateTimeNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableWithAggregatesFilter, {
    nullable: true
  })
  RequiredDate?: DateTimeNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableWithAggregatesFilter, {
    nullable: true
  })
  ShippedDate?: DateTimeNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableWithAggregatesFilter, {
    nullable: true
  })
  ShipVia?: IntNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => FloatNullableWithAggregatesFilter, {
    nullable: true
  })
  Freight?: FloatNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  ShipName?: StringNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  ShipAddress?: StringNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  ShipCity?: StringNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  ShipRegion?: StringNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  ShipPostalCode?: StringNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  ShipCountry?: StringNullableWithAggregatesFilter | undefined;
}
