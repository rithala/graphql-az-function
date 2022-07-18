import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CustomerCustomerDemoCreateNestedManyWithoutCustomersInput } from "../inputs/CustomerCustomerDemoCreateNestedManyWithoutCustomersInput";

@TypeGraphQL.InputType("CustomersCreateWithoutOrdersInput", {
  isAbstract: true
})
export class CustomersCreateWithoutOrdersInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  CustomerID!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  CompanyName!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  ContactName?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  ContactTitle?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  Address?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  City?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  Region?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  PostalCode?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  Country?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  Phone?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  Fax?: string | undefined;

  @TypeGraphQL.Field(_type => CustomerCustomerDemoCreateNestedManyWithoutCustomersInput, {
    nullable: true
  })
  CustomerCustomerDemo?: CustomerCustomerDemoCreateNestedManyWithoutCustomersInput | undefined;
}
