import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CustomerDemographicsUpdateManyMutationInput } from "../../../inputs/CustomerDemographicsUpdateManyMutationInput";
import { CustomerDemographicsWhereInput } from "../../../inputs/CustomerDemographicsWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyCustomerDemographicsArgs {
  @TypeGraphQL.Field(_type => CustomerDemographicsUpdateManyMutationInput, {
    nullable: false
  })
  data!: CustomerDemographicsUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => CustomerDemographicsWhereInput, {
    nullable: true
  })
  where?: CustomerDemographicsWhereInput | undefined;
}
