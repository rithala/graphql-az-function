import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { CustomerCustomerDemo } from "../models/CustomerCustomerDemo";
import { CustomerDemographicsCount } from "../resolvers/outputs/CustomerDemographicsCount";

@TypeGraphQL.ObjectType("CustomerDemographics", {
  isAbstract: true
})
export class CustomerDemographics {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  CustomerTypeID!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  CustomerDesc?: string | null;

  CustomerCustomerDemo?: CustomerCustomerDemo[];

  @TypeGraphQL.Field(_type => CustomerDemographicsCount, {
    nullable: true
  })
  _count?: CustomerDemographicsCount | null;
}
