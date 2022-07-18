import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CustomerCustomerDemoCreateManyCustomersInputEnvelope } from "../inputs/CustomerCustomerDemoCreateManyCustomersInputEnvelope";
import { CustomerCustomerDemoCreateOrConnectWithoutCustomersInput } from "../inputs/CustomerCustomerDemoCreateOrConnectWithoutCustomersInput";
import { CustomerCustomerDemoCreateWithoutCustomersInput } from "../inputs/CustomerCustomerDemoCreateWithoutCustomersInput";
import { CustomerCustomerDemoWhereUniqueInput } from "../inputs/CustomerCustomerDemoWhereUniqueInput";

@TypeGraphQL.InputType("CustomerCustomerDemoCreateNestedManyWithoutCustomersInput", {
  isAbstract: true
})
export class CustomerCustomerDemoCreateNestedManyWithoutCustomersInput {
  @TypeGraphQL.Field(_type => [CustomerCustomerDemoCreateWithoutCustomersInput], {
    nullable: true
  })
  create?: CustomerCustomerDemoCreateWithoutCustomersInput[] | undefined;

  @TypeGraphQL.Field(_type => [CustomerCustomerDemoCreateOrConnectWithoutCustomersInput], {
    nullable: true
  })
  connectOrCreate?: CustomerCustomerDemoCreateOrConnectWithoutCustomersInput[] | undefined;

  @TypeGraphQL.Field(_type => CustomerCustomerDemoCreateManyCustomersInputEnvelope, {
    nullable: true
  })
  createMany?: CustomerCustomerDemoCreateManyCustomersInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [CustomerCustomerDemoWhereUniqueInput], {
    nullable: true
  })
  connect?: CustomerCustomerDemoWhereUniqueInput[] | undefined;
}
