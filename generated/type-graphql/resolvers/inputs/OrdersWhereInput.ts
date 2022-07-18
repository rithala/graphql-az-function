import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CustomersRelationFilter } from "../inputs/CustomersRelationFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { EmployeesRelationFilter } from "../inputs/EmployeesRelationFilter";
import { FloatNullableFilter } from "../inputs/FloatNullableFilter";
import { IntFilter } from "../inputs/IntFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { Order_DetailsListRelationFilter } from "../inputs/Order_DetailsListRelationFilter";
import { ShippersRelationFilter } from "../inputs/ShippersRelationFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType("OrdersWhereInput", {
  isAbstract: true
})
export class OrdersWhereInput {
  @TypeGraphQL.Field(_type => [OrdersWhereInput], {
    nullable: true
  })
  AND?: OrdersWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [OrdersWhereInput], {
    nullable: true
  })
  OR?: OrdersWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [OrdersWhereInput], {
    nullable: true
  })
  NOT?: OrdersWhereInput[] | undefined;

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

  @TypeGraphQL.Field(_type => CustomersRelationFilter, {
    nullable: true
  })
  Customers?: CustomersRelationFilter | undefined;

  @TypeGraphQL.Field(_type => EmployeesRelationFilter, {
    nullable: true
  })
  Employees?: EmployeesRelationFilter | undefined;

  @TypeGraphQL.Field(_type => ShippersRelationFilter, {
    nullable: true
  })
  Shippers?: ShippersRelationFilter | undefined;

  @TypeGraphQL.Field(_type => Order_DetailsListRelationFilter, {
    nullable: true
  })
  Order_Details?: Order_DetailsListRelationFilter | undefined;
}
