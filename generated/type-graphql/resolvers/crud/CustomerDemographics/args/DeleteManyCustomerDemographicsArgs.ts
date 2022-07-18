import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CustomerDemographicsWhereInput } from "../../../inputs/CustomerDemographicsWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyCustomerDemographicsArgs {
  @TypeGraphQL.Field(_type => CustomerDemographicsWhereInput, {
    nullable: true
  })
  where?: CustomerDemographicsWhereInput | undefined;
}
