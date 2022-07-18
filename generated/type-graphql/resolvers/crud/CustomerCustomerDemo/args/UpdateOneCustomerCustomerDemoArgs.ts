import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CustomerCustomerDemoUpdateInput } from "../../../inputs/CustomerCustomerDemoUpdateInput";
import { CustomerCustomerDemoWhereUniqueInput } from "../../../inputs/CustomerCustomerDemoWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneCustomerCustomerDemoArgs {
  @TypeGraphQL.Field(_type => CustomerCustomerDemoUpdateInput, {
    nullable: false
  })
  data!: CustomerCustomerDemoUpdateInput;

  @TypeGraphQL.Field(_type => CustomerCustomerDemoWhereUniqueInput, {
    nullable: false
  })
  where!: CustomerCustomerDemoWhereUniqueInput;
}
