import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CustomerCustomerDemoWhereUniqueInput } from "../../../inputs/CustomerCustomerDemoWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueCustomerCustomerDemoArgs {
  @TypeGraphQL.Field(_type => CustomerCustomerDemoWhereUniqueInput, {
    nullable: false
  })
  where!: CustomerCustomerDemoWhereUniqueInput;
}
