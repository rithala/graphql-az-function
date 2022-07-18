import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CustomersCreateNestedOneWithoutOrdersInput } from "../inputs/CustomersCreateNestedOneWithoutOrdersInput";
import { EmployeesCreateNestedOneWithoutOrdersInput } from "../inputs/EmployeesCreateNestedOneWithoutOrdersInput";
import { ShippersCreateNestedOneWithoutOrdersInput } from "../inputs/ShippersCreateNestedOneWithoutOrdersInput";

@TypeGraphQL.InputType("OrdersCreateWithoutOrder_DetailsInput", {
  isAbstract: true
})
export class OrdersCreateWithoutOrder_DetailsInput {
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

  @TypeGraphQL.Field(_type => CustomersCreateNestedOneWithoutOrdersInput, {
    nullable: true
  })
  Customers?: CustomersCreateNestedOneWithoutOrdersInput | undefined;

  @TypeGraphQL.Field(_type => EmployeesCreateNestedOneWithoutOrdersInput, {
    nullable: true
  })
  Employees?: EmployeesCreateNestedOneWithoutOrdersInput | undefined;

  @TypeGraphQL.Field(_type => ShippersCreateNestedOneWithoutOrdersInput, {
    nullable: true
  })
  Shippers?: ShippersCreateNestedOneWithoutOrdersInput | undefined;
}
