import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("CustomerDemographicsScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class CustomerDemographicsScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [CustomerDemographicsScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: CustomerDemographicsScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [CustomerDemographicsScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: CustomerDemographicsScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [CustomerDemographicsScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: CustomerDemographicsScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  CustomerTypeID?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  CustomerDesc?: StringNullableWithAggregatesFilter | undefined;
}
