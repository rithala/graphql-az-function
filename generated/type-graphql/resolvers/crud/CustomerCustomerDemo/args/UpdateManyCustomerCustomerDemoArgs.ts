import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CustomerCustomerDemoUpdateManyMutationInput } from "../../../inputs/CustomerCustomerDemoUpdateManyMutationInput";
import { CustomerCustomerDemoWhereInput } from "../../../inputs/CustomerCustomerDemoWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyCustomerCustomerDemoArgs {
  @TypeGraphQL.Field(_type => CustomerCustomerDemoUpdateManyMutationInput, {
    nullable: false
  })
  data!: CustomerCustomerDemoUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => CustomerCustomerDemoWhereInput, {
    nullable: true
  })
  where?: CustomerCustomerDemoWhereInput | undefined;
}
