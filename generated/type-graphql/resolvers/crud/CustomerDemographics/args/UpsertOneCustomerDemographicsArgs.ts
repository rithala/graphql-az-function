import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CustomerDemographicsCreateInput } from "../../../inputs/CustomerDemographicsCreateInput";
import { CustomerDemographicsUpdateInput } from "../../../inputs/CustomerDemographicsUpdateInput";
import { CustomerDemographicsWhereUniqueInput } from "../../../inputs/CustomerDemographicsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneCustomerDemographicsArgs {
  @TypeGraphQL.Field(_type => CustomerDemographicsWhereUniqueInput, {
    nullable: false
  })
  where!: CustomerDemographicsWhereUniqueInput;

  @TypeGraphQL.Field(_type => CustomerDemographicsCreateInput, {
    nullable: false
  })
  create!: CustomerDemographicsCreateInput;

  @TypeGraphQL.Field(_type => CustomerDemographicsUpdateInput, {
    nullable: false
  })
  update!: CustomerDemographicsUpdateInput;
}
