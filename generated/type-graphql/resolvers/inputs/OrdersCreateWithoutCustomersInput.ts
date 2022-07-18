import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EmployeesCreateNestedOneWithoutOrdersInput } from "../inputs/EmployeesCreateNestedOneWithoutOrdersInput";
import { Order_DetailsCreateNestedManyWithoutOrdersInput } from "../inputs/Order_DetailsCreateNestedManyWithoutOrdersInput";
import { ShippersCreateNestedOneWithoutOrdersInput } from "../inputs/ShippersCreateNestedOneWithoutOrdersInput";

@TypeGraphQL.InputType("OrdersCreateWithoutCustomersInput", {
  isAbstract: true
})
export class OrdersCreateWithoutCustomersInput {
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

  @TypeGraphQL.Field(_type => EmployeesCreateNestedOneWithoutOrdersInput, {
    nullable: true
  })
  Employees?: EmployeesCreateNestedOneWithoutOrdersInput | undefined;

  @TypeGraphQL.Field(_type => ShippersCreateNestedOneWithoutOrdersInput, {
    nullable: true
  })
  Shippers?: ShippersCreateNestedOneWithoutOrdersInput | undefined;

  @TypeGraphQL.Field(_type => Order_DetailsCreateNestedManyWithoutOrdersInput, {
    nullable: true
  })
  Order_Details?: Order_DetailsCreateNestedManyWithoutOrdersInput | undefined;
}
