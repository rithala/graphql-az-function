import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CustomerDemographicsOrderByWithAggregationInput } from "../../../inputs/CustomerDemographicsOrderByWithAggregationInput";
import { CustomerDemographicsScalarWhereWithAggregatesInput } from "../../../inputs/CustomerDemographicsScalarWhereWithAggregatesInput";
import { CustomerDemographicsWhereInput } from "../../../inputs/CustomerDemographicsWhereInput";
import { CustomerDemographicsScalarFieldEnum } from "../../../../enums/CustomerDemographicsScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByCustomerDemographicsArgs {
  @TypeGraphQL.Field(_type => CustomerDemographicsWhereInput, {
    nullable: true
  })
  where?: CustomerDemographicsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [CustomerDemographicsOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: CustomerDemographicsOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [CustomerDemographicsScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"CustomerTypeID" | "CustomerDesc">;

  @TypeGraphQL.Field(_type => CustomerDemographicsScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: CustomerDemographicsScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
