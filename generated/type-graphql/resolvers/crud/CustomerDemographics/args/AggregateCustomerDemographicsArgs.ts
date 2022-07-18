import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CustomerDemographicsOrderByWithRelationInput } from "../../../inputs/CustomerDemographicsOrderByWithRelationInput";
import { CustomerDemographicsWhereInput } from "../../../inputs/CustomerDemographicsWhereInput";
import { CustomerDemographicsWhereUniqueInput } from "../../../inputs/CustomerDemographicsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateCustomerDemographicsArgs {
  @TypeGraphQL.Field(_type => CustomerDemographicsWhereInput, {
    nullable: true
  })
  where?: CustomerDemographicsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [CustomerDemographicsOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: CustomerDemographicsOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => CustomerDemographicsWhereUniqueInput, {
    nullable: true
  })
  cursor?: CustomerDemographicsWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
