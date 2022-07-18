import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CustomerCustomerDemoCreateInput } from "../../../inputs/CustomerCustomerDemoCreateInput";
import { CustomerCustomerDemoUpdateInput } from "../../../inputs/CustomerCustomerDemoUpdateInput";
import { CustomerCustomerDemoWhereUniqueInput } from "../../../inputs/CustomerCustomerDemoWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneCustomerCustomerDemoArgs {
  @TypeGraphQL.Field(_type => CustomerCustomerDemoWhereUniqueInput, {
    nullable: false
  })
  where!: CustomerCustomerDemoWhereUniqueInput;

  @TypeGraphQL.Field(_type => CustomerCustomerDemoCreateInput, {
    nullable: false
  })
  create!: CustomerCustomerDemoCreateInput;

  @TypeGraphQL.Field(_type => CustomerCustomerDemoUpdateInput, {
    nullable: false
  })
  update!: CustomerCustomerDemoUpdateInput;
}
