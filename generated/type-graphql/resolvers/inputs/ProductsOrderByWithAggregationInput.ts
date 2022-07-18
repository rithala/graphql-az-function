import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductsAvgOrderByAggregateInput } from "../inputs/ProductsAvgOrderByAggregateInput";
import { ProductsCountOrderByAggregateInput } from "../inputs/ProductsCountOrderByAggregateInput";
import { ProductsMaxOrderByAggregateInput } from "../inputs/ProductsMaxOrderByAggregateInput";
import { ProductsMinOrderByAggregateInput } from "../inputs/ProductsMinOrderByAggregateInput";
import { ProductsSumOrderByAggregateInput } from "../inputs/ProductsSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("ProductsOrderByWithAggregationInput", {
  isAbstract: true
})
export class ProductsOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  ProductID?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  ProductName?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  SupplierID?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  CategoryID?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  QuantityPerUnit?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  UnitPrice?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  UnitsInStock?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  UnitsOnOrder?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  ReorderLevel?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  Discontinued?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => ProductsCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: ProductsCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ProductsAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: ProductsAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ProductsMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: ProductsMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ProductsMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: ProductsMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ProductsSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: ProductsSumOrderByAggregateInput | undefined;
}
