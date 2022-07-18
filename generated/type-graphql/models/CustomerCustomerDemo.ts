import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { CustomerDemographics } from "../models/CustomerDemographics";
import { Customers } from "../models/Customers";

@TypeGraphQL.ObjectType("CustomerCustomerDemo", {
  isAbstract: true
})
export class CustomerCustomerDemo {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  CustomerID!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  CustomerTypeID!: string;

  Customers?: Customers;

  CustomerDemographics?: CustomerDemographics;
}
