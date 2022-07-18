import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CustomerDemographicsCountOrderByAggregateInput } from "../inputs/CustomerDemographicsCountOrderByAggregateInput";
import { CustomerDemographicsMaxOrderByAggregateInput } from "../inputs/CustomerDemographicsMaxOrderByAggregateInput";
import { CustomerDemographicsMinOrderByAggregateInput } from "../inputs/CustomerDemographicsMinOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("CustomerDemographicsOrderByWithAggregationInput", {
  isAbstract: true
})
export class CustomerDemographicsOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  CustomerTypeID?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  CustomerDesc?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => CustomerDemographicsCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: CustomerDemographicsCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => CustomerDemographicsMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: CustomerDemographicsMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => CustomerDemographicsMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: CustomerDemographicsMinOrderByAggregateInput | undefined;
}
