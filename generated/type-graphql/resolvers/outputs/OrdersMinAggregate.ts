import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.ObjectType("OrdersMinAggregate", {
  isAbstract: true
})
export class OrdersMinAggregate {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  OrderID!: number | null;

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
}
