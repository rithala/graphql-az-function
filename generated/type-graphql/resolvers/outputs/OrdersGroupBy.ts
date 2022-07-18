import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OrdersAvgAggregate } from "../outputs/OrdersAvgAggregate";
import { OrdersCountAggregate } from "../outputs/OrdersCountAggregate";
import { OrdersMaxAggregate } from "../outputs/OrdersMaxAggregate";
import { OrdersMinAggregate } from "../outputs/OrdersMinAggregate";
import { OrdersSumAggregate } from "../outputs/OrdersSumAggregate";

@TypeGraphQL.ObjectType("OrdersGroupBy", {
  isAbstract: true
})
export class OrdersGroupBy {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  OrderID!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  CustomerID!: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  EmployeeID!: number | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  OrderDate!: Date | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  RequiredDate!: Date | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  ShippedDate!: Date | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  ShipVia!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: true
  })
  Freight!: number | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  ShipName!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  ShipAddress!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  ShipCity!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  ShipRegion!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  ShipPostalCode!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  ShipCountry!: string | null;

  @TypeGraphQL.Field(_type => OrdersCountAggregate, {
    nullable: true
  })
  _count!: OrdersCountAggregate | null;

  @TypeGraphQL.Field(_type => OrdersAvgAggregate, {
    nullable: true
  })
  _avg!: OrdersAvgAggregate | null;

  @TypeGraphQL.Field(_type => OrdersSumAggregate, {
    nullable: true
  })
  _sum!: OrdersSumAggregate | null;

  @TypeGraphQL.Field(_type => OrdersMinAggregate, {
    nullable: true
  })
  _min!: OrdersMinAggregate | null;

  @TypeGraphQL.Field(_type => OrdersMaxAggregate, {
    nullable: true
  })
  _max!: OrdersMaxAggregate | null;
}
