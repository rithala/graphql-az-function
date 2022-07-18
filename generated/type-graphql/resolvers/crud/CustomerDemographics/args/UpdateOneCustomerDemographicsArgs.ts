import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CustomerDemographicsUpdateInput } from "../../../inputs/CustomerDemographicsUpdateInput";
import { CustomerDemographicsWhereUniqueInput } from "../../../inputs/CustomerDemographicsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneCustomerDemographicsArgs {
  @TypeGraphQL.Field(_type => CustomerDemographicsUpdateInput, {
    nullable: false
  })
  data!: CustomerDemographicsUpdateInput;

  @TypeGraphQL.Field(_type => CustomerDemographicsWhereUniqueInput, {
    nullable: false
  })
  where!: CustomerDemographicsWhereUniqueInput;
}
