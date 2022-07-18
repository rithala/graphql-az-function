import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CustomerCustomerDemoOrderByRelationAggregateInput } from "../inputs/CustomerCustomerDemoOrderByRelationAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("CustomerDemographicsOrderByWithRelationInput", {
  isAbstract: true
})
export class CustomerDemographicsOrderByWithRelationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  CustomerTypeID?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  CustomerDesc?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => CustomerCustomerDemoOrderByRelationAggregateInput, {
    nullable: true
  })
  CustomerCustomerDemo?: CustomerCustomerDemoOrderByRelationAggregateInput | undefined;
}
