import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CustomerDemographicsCreateManyInput } from "../../../inputs/CustomerDemographicsCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyCustomerDemographicsArgs {
  @TypeGraphQL.Field(_type => [CustomerDemographicsCreateManyInput], {
    nullable: false
  })
  data!: CustomerDemographicsCreateManyInput[];
}
