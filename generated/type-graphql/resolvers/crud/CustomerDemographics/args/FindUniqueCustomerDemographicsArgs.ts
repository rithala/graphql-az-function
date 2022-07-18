import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CustomerDemographicsWhereUniqueInput } from "../../../inputs/CustomerDemographicsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueCustomerDemographicsArgs {
  @TypeGraphQL.Field(_type => CustomerDemographicsWhereUniqueInput, {
    nullable: false
  })
  where!: CustomerDemographicsWhereUniqueInput;
}
