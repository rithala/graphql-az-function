import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CustomerCustomerDemoListRelationFilter } from "../inputs/CustomerCustomerDemoListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType("CustomerDemographicsWhereInput", {
  isAbstract: true
})
export class CustomerDemographicsWhereInput {
  @TypeGraphQL.Field(_type => [CustomerDemographicsWhereInput], {
    nullable: true
  })
  AND?: CustomerDemographicsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [CustomerDemographicsWhereInput], {
    nullable: true
  })
  OR?: CustomerDemographicsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [CustomerDemographicsWhereInput], {
    nullable: true
  })
  NOT?: CustomerDemographicsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  CustomerTypeID?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  CustomerDesc?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => CustomerCustomerDemoListRelationFilter, {
    nullable: true
  })
  CustomerCustomerDemo?: CustomerCustomerDemoListRelationFilter | undefined;
}
