import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CustomerCustomerDemoCreateWithoutCustomersInput } from "../inputs/CustomerCustomerDemoCreateWithoutCustomersInput";
import { CustomerCustomerDemoWhereUniqueInput } from "../inputs/CustomerCustomerDemoWhereUniqueInput";

@TypeGraphQL.InputType("CustomerCustomerDemoCreateOrConnectWithoutCustomersInput", {
  isAbstract: true
})
export class CustomerCustomerDemoCreateOrConnectWithoutCustomersInput {
  @TypeGraphQL.Field(_type => CustomerCustomerDemoWhereUniqueInput, {
    nullable: false
  })
  where!: CustomerCustomerDemoWhereUniqueInput;

  @TypeGraphQL.Field(_type => CustomerCustomerDemoCreateWithoutCustomersInput, {
    nullable: false
  })
  create!: CustomerCustomerDemoCreateWithoutCustomersInput;
}
