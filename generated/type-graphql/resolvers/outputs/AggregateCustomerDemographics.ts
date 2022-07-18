import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CustomerDemographicsCountAggregate } from "../outputs/CustomerDemographicsCountAggregate";
import { CustomerDemographicsMaxAggregate } from "../outputs/CustomerDemographicsMaxAggregate";
import { CustomerDemographicsMinAggregate } from "../outputs/CustomerDemographicsMinAggregate";

@TypeGraphQL.ObjectType("AggregateCustomerDemographics", {
  isAbstract: true
})
export class AggregateCustomerDemographics {
  @TypeGraphQL.Field(_type => CustomerDemographicsCountAggregate, {
    nullable: true
  })
  _count!: CustomerDemographicsCountAggregate | null;

  @TypeGraphQL.Field(_type => CustomerDemographicsMinAggregate, {
    nullable: true
  })
  _min!: CustomerDemographicsMinAggregate | null;

  @TypeGraphQL.Field(_type => CustomerDemographicsMaxAggregate, {
    nullable: true
  })
  _max!: CustomerDemographicsMaxAggregate | null;
}
