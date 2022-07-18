import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CustomerCustomerDemoWhereInput } from "../../../inputs/CustomerCustomerDemoWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyCustomerCustomerDemoArgs {
  @TypeGraphQL.Field(_type => CustomerCustomerDemoWhereInput, {
    nullable: true
  })
  where?: CustomerCustomerDemoWhereInput | undefined;
}
