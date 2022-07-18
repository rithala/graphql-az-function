import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CustomersOrderByWithRelationInput } from "../inputs/CustomersOrderByWithRelationInput";
import { EmployeesOrderByWithRelationInput } from "../inputs/EmployeesOrderByWithRelationInput";
import { Order_DetailsOrderByRelationAggregateInput } from "../inputs/Order_DetailsOrderByRelationAggregateInput";
import { ShippersOrderByWithRelationInput } from "../inputs/ShippersOrderByWithRelationInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("OrdersOrderByWithRelationInput", {
  isAbstract: true
})
export class OrdersOrderByWithRelationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  OrderID?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  CustomerID?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  EmployeeID?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  OrderDate?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  RequiredDate?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  ShippedDate?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  ShipVia?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  Freight?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  ShipName?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  ShipAddress?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  ShipCity?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  ShipRegion?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  ShipPostalCode?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  ShipCountry?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => CustomersOrderByWithRelationInput, {
    nullable: true
  })
  Customers?: CustomersOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => EmployeesOrderByWithRelationInput, {
    nullable: true
  })
  Employees?: EmployeesOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => ShippersOrderByWithRelationInput, {
    nullable: true
  })
  Shippers?: ShippersOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => Order_DetailsOrderByRelationAggregateInput, {
    nullable: true
  })
  Order_Details?: Order_DetailsOrderByRelationAggregateInput | undefined;
}
