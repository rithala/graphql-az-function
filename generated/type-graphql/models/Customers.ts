import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { CustomerCustomerDemo } from "../models/CustomerCustomerDemo";
import { Orders } from "../models/Orders";
import { CustomersCount } from "../resolvers/outputs/CustomersCount";

@TypeGraphQL.ObjectType("Customers", {
  isAbstract: true
})
export class Customers {
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
  ContactName?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  ContactTitle?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  Address?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  City?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  Region?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  PostalCode?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  Country?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  Phone?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  Fax?: string | null;

  CustomerCustomerDemo?: CustomerCustomerDemo[];

  Orders?: Orders[];

  @TypeGraphQL.Field(_type => CustomersCount, {
    nullable: true
  })
  _count?: CustomersCount | null;
}
