import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { FloatNullableFilter } from "../inputs/FloatNullableFilter";
import { IntFilter } from "../inputs/IntFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType("OrdersScalarWhereInput", {
  isAbstract: true
})
export class OrdersScalarWhereInput {
  @TypeGraphQL.Field(_type => [OrdersScalarWhereInput], {
    nullable: true
  })
  AND?: OrdersScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [OrdersScalarWhereInput], {
    nullable: true
  })
  OR?: OrdersScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [OrdersScalarWhereInput], {
    nullable: true
  })
  NOT?: OrdersScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  OrderID?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  CustomerID?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  EmployeeID?: IntNullableFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableFilter, {
    nullable: true
  })
  OrderDate?: DateTimeNullableFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableFilter, {
    nullable: true
  })
  RequiredDate?: DateTimeNullableFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableFilter, {
    nullable: true
  })
  ShippedDate?: DateTimeNullableFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  ShipVia?: IntNullableFilter | undefined;

  @TypeGraphQL.Field(_type => FloatNullableFilter, {
    nullable: true
  })
  Freight?: FloatNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  ShipName?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  ShipAddress?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  ShipCity?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  ShipRegion?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  ShipPostalCode?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  ShipCountry?: StringNullableFilter | undefined;
}
