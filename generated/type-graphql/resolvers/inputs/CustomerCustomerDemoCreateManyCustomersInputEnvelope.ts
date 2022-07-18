import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CustomerCustomerDemoCreateManyCustomersInput } from "../inputs/CustomerCustomerDemoCreateManyCustomersInput";

@TypeGraphQL.InputType("CustomerCustomerDemoCreateManyCustomersInputEnvelope", {
  isAbstract: true
})
export class CustomerCustomerDemoCreateManyCustomersInputEnvelope {
  @TypeGraphQL.Field(_type => [CustomerCustomerDemoCreateManyCustomersInput], {
    nullable: false
  })
  data!: CustomerCustomerDemoCreateManyCustomersInput[];
}
