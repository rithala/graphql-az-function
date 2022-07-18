import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SuppliersAvgOrderByAggregateInput } from "../inputs/SuppliersAvgOrderByAggregateInput";
import { SuppliersCountOrderByAggregateInput } from "../inputs/SuppliersCountOrderByAggregateInput";
import { SuppliersMaxOrderByAggregateInput } from "../inputs/SuppliersMaxOrderByAggregateInput";
import { SuppliersMinOrderByAggregateInput } from "../inputs/SuppliersMinOrderByAggregateInput";
import { SuppliersSumOrderByAggregateInput } from "../inputs/SuppliersSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("SuppliersOrderByWithAggregationInput", {
  isAbstract: true
})
export class SuppliersOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  SupplierID?: "asc" | "desc" | undefined;

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

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  HomePage?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SuppliersCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: SuppliersCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => SuppliersAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: SuppliersAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => SuppliersMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: SuppliersMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => SuppliersMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: SuppliersMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => SuppliersSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: SuppliersSumOrderByAggregateInput | undefined;
}
