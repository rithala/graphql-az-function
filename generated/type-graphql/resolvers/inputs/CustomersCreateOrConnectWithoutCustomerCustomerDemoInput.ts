import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CustomersCreateWithoutCustomerCustomerDemoInput } from "../inputs/CustomersCreateWithoutCustomerCustomerDemoInput";
import { CustomersWhereUniqueInput } from "../inputs/CustomersWhereUniqueInput";

@TypeGraphQL.InputType("CustomersCreateOrConnectWithoutCustomerCustomerDemoInput", {
  isAbstract: true
})
export class CustomersCreateOrConnectWithoutCustomerCustomerDemoInput {
  @TypeGraphQL.Field(_type => CustomersWhereUniqueInput, {
    nullable: false
  })
  where!: CustomersWhereUniqueInput;

  @TypeGraphQL.Field(_type => CustomersCreateWithoutCustomerCustomerDemoInput, {
    nullable: false
  })
  create!: CustomersCreateWithoutCustomerCustomerDemoInput;
}
