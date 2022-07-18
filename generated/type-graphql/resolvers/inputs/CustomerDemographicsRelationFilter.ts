import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CustomerDemographicsWhereInput } from "../inputs/CustomerDemographicsWhereInput";

@TypeGraphQL.InputType("CustomerDemographicsRelationFilter", {
  isAbstract: true
})
export class CustomerDemographicsRelationFilter {
  @TypeGraphQL.Field(_type => CustomerDemographicsWhereInput, {
    nullable: true
  })
  is?: CustomerDemographicsWhereInput | undefined;

  @TypeGraphQL.Field(_type => CustomerDemographicsWhereInput, {
    nullable: true
  })
  isNot?: CustomerDemographicsWhereInput | undefined;
}
