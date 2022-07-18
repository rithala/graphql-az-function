import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CategoriesAvgOrderByAggregateInput } from "../inputs/CategoriesAvgOrderByAggregateInput";
import { CategoriesCountOrderByAggregateInput } from "../inputs/CategoriesCountOrderByAggregateInput";
import { CategoriesMaxOrderByAggregateInput } from "../inputs/CategoriesMaxOrderByAggregateInput";
import { CategoriesMinOrderByAggregateInput } from "../inputs/CategoriesMinOrderByAggregateInput";
import { CategoriesSumOrderByAggregateInput } from "../inputs/CategoriesSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("CategoriesOrderByWithAggregationInput", {
  isAbstract: true
})
export class CategoriesOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  CategoryID?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  CategoryName?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  Description?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  Picture?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => CategoriesCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: CategoriesCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => CategoriesAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: CategoriesAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => CategoriesMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: CategoriesMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => CategoriesMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: CategoriesMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => CategoriesSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: CategoriesSumOrderByAggregateInput | undefined;
}
