import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CustomersCountOrderByAggregateInput } from "../inputs/CustomersCountOrderByAggregateInput";
import { CustomersMaxOrderByAggregateInput } from "../inputs/CustomersMaxOrderByAggregateInput";
import { CustomersMinOrderByAggregateInput } from "../inputs/CustomersMinOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("CustomersOrderByWithAggregationInput", {
  isAbstract: true
})
export class CustomersOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  CustomerID?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  CompanyName?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  ContactName?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  ContactTitle?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  Address?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  City?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  Region?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  PostalCode?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  Country?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  Phone?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  Fax?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => CustomersCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: CustomersCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => CustomersMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: CustomersMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => CustomersMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: CustomersMinOrderByAggregateInput | undefined;
}
