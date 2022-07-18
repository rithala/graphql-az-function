import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CustomerCustomerDemoCountOrderByAggregateInput } from "../inputs/CustomerCustomerDemoCountOrderByAggregateInput";
import { CustomerCustomerDemoMaxOrderByAggregateInput } from "../inputs/CustomerCustomerDemoMaxOrderByAggregateInput";
import { CustomerCustomerDemoMinOrderByAggregateInput } from "../inputs/CustomerCustomerDemoMinOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("CustomerCustomerDemoOrderByWithAggregationInput", {
  isAbstract: true
})
export class CustomerCustomerDemoOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  CustomerID?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  CustomerTypeID?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => CustomerCustomerDemoCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: CustomerCustomerDemoCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => CustomerCustomerDemoMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: CustomerCustomerDemoMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => CustomerCustomerDemoMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: CustomerCustomerDemoMinOrderByAggregateInput | undefined;
}
