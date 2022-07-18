import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("OrdersCreateManyCustomersInput", {
  isAbstract: true
})
export class OrdersCreateManyCustomersInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  EmployeeID?: number | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  OrderDate?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  RequiredDate?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  ShippedDate?: Date | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  ShipVia?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: true
  })
  Freight?: number | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  ShipName?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  ShipAddress?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  ShipCity?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  ShipRegion?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  ShipPostalCode?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  ShipCountry?: string | undefined;
}
