import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TerritoriesAvgOrderByAggregateInput } from "../inputs/TerritoriesAvgOrderByAggregateInput";
import { TerritoriesCountOrderByAggregateInput } from "../inputs/TerritoriesCountOrderByAggregateInput";
import { TerritoriesMaxOrderByAggregateInput } from "../inputs/TerritoriesMaxOrderByAggregateInput";
import { TerritoriesMinOrderByAggregateInput } from "../inputs/TerritoriesMinOrderByAggregateInput";
import { TerritoriesSumOrderByAggregateInput } from "../inputs/TerritoriesSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("TerritoriesOrderByWithAggregationInput", {
  isAbstract: true
})
export class TerritoriesOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  TerritoryID?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  TerritoryDescription?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  RegionID?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => TerritoriesCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: TerritoriesCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => TerritoriesAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: TerritoriesAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => TerritoriesMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: TerritoriesMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => TerritoriesMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: TerritoriesMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => TerritoriesSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: TerritoriesSumOrderByAggregateInput | undefined;
}
