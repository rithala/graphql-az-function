import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CustomersCreateWithoutCustomerCustomerDemoInput } from "../inputs/CustomersCreateWithoutCustomerCustomerDemoInput";
import { CustomersUpdateWithoutCustomerCustomerDemoInput } from "../inputs/CustomersUpdateWithoutCustomerCustomerDemoInput";

@TypeGraphQL.InputType("CustomersUpsertWithoutCustomerCustomerDemoInput", {
  isAbstract: true
})
export class CustomersUpsertWithoutCustomerCustomerDemoInput {
  @TypeGraphQL.Field(_type => CustomersUpdateWithoutCustomerCustomerDemoInput, {
    nullable: false
  })
  update!: CustomersUpdateWithoutCustomerCustomerDemoInput;

  @TypeGraphQL.Field(_type => CustomersCreateWithoutCustomerCustomerDemoInput, {
    nullable: false
  })
  create!: CustomersCreateWithoutCustomerCustomerDemoInput;
}
