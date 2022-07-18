import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Customers } from "../models/Customers";
import { Employees } from "../models/Employees";
import { Order_Details } from "../models/Order_Details";
import { Shippers } from "../models/Shippers";
import { OrdersCount } from "../resolvers/outputs/OrdersCount";

@TypeGraphQL.ObjectType("Orders", {
  isAbstract: true
})
export class Orders {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  OrderID!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  CustomerID?: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  EmployeeID?: number | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  OrderDate?: Date | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  RequiredDate?: Date | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  ShippedDate?: Date | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  ShipVia?: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: true
  })
  Freight?: number | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  ShipName?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  ShipAddress?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  ShipCity?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  ShipRegion?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  ShipPostalCode?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  ShipCountry?: string | null;

  Customers?: Customers | null;

  Employees?: Employees | null;

  Shippers?: Shippers | null;

  Order_Details?: Order_Details[];

  @TypeGraphQL.Field(_type => OrdersCount, {
    nullable: true
  })
  _count?: OrdersCount | null;
}
