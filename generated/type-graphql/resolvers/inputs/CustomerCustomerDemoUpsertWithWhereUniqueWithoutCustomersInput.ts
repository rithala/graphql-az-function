import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CustomerCustomerDemoCreateWithoutCustomersInput } from "../inputs/CustomerCustomerDemoCreateWithoutCustomersInput";
import { CustomerCustomerDemoUpdateWithoutCustomersInput } from "../inputs/CustomerCustomerDemoUpdateWithoutCustomersInput";
import { CustomerCustomerDemoWhereUniqueInput } from "../inputs/CustomerCustomerDemoWhereUniqueInput";

@TypeGraphQL.InputType("CustomerCustomerDemoUpsertWithWhereUniqueWithoutCustomersInput", {
  isAbstract: true
})
export class CustomerCustomerDemoUpsertWithWhereUniqueWithoutCustomersInput {
  @TypeGraphQL.Field(_type => CustomerCustomerDemoWhereUniqueInput, {
    nullable: false
  })
  where!: CustomerCustomerDemoWhereUniqueInput;

  @TypeGraphQL.Field(_type => CustomerCustomerDemoUpdateWithoutCustomersInput, {
    nullable: false
  })
  update!: CustomerCustomerDemoUpdateWithoutCustomersInput;

  @TypeGraphQL.Field(_type => CustomerCustomerDemoCreateWithoutCustomersInput, {
    nullable: false
  })
  create!: CustomerCustomerDemoCreateWithoutCustomersInput;
}
