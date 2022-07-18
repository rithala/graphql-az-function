import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OrdersAvgOrderByAggregateInput } from "../inputs/OrdersAvgOrderByAggregateInput";
import { OrdersCountOrderByAggregateInput } from "../inputs/OrdersCountOrderByAggregateInput";
import { OrdersMaxOrderByAggregateInput } from "../inputs/OrdersMaxOrderByAggregateInput";
import { OrdersMinOrderByAggregateInput } from "../inputs/OrdersMinOrderByAggregateInput";
import { OrdersSumOrderByAggregateInput } from "../inputs/OrdersSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("OrdersOrderByWithAggregationInput", {
  isAbstract: true
})
export class OrdersOrderByWithAggregationInput {
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

  @TypeGraphQL.Field(_type => OrdersCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: OrdersCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => OrdersAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: OrdersAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => OrdersMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: OrdersMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => OrdersMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: OrdersMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => OrdersSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: OrdersSumOrderByAggregateInput | undefined;
}
