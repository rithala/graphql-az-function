import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CustomerCustomerDemoCreateInput } from "../../../inputs/CustomerCustomerDemoCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneCustomerCustomerDemoArgs {
  @TypeGraphQL.Field(_type => CustomerCustomerDemoCreateInput, {
    nullable: false
  })
  data!: CustomerCustomerDemoCreateInput;
}
