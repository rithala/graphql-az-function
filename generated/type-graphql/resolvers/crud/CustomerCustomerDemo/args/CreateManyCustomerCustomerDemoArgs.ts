import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CustomerCustomerDemoCreateManyInput } from "../../../inputs/CustomerCustomerDemoCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyCustomerCustomerDemoArgs {
  @TypeGraphQL.Field(_type => [CustomerCustomerDemoCreateManyInput], {
    nullable: false
  })
  data!: CustomerCustomerDemoCreateManyInput[];
}
