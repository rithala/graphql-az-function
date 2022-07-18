import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CustomerDemographicsCreateInput } from "../../../inputs/CustomerDemographicsCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneCustomerDemographicsArgs {
  @TypeGraphQL.Field(_type => CustomerDemographicsCreateInput, {
    nullable: false
  })
  data!: CustomerDemographicsCreateInput;
}
