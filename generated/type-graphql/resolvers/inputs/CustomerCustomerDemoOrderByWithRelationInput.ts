import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CustomerDemographicsOrderByWithRelationInput } from "../inputs/CustomerDemographicsOrderByWithRelationInput";
import { CustomersOrderByWithRelationInput } from "../inputs/CustomersOrderByWithRelationInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("CustomerCustomerDemoOrderByWithRelationInput", {
  isAbstract: true
})
export class CustomerCustomerDemoOrderByWithRelationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  CustomerID?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  CustomerTypeID?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => CustomersOrderByWithRelationInput, {
    nullable: true
  })
  Customers?: CustomersOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => CustomerDemographicsOrderByWithRelationInput, {
    nullable: true
  })
  CustomerDemographics?: CustomerDemographicsOrderByWithRelationInput | undefined;
}
