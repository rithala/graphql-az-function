import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ShippersAvgOrderByAggregateInput } from "../inputs/ShippersAvgOrderByAggregateInput";
import { ShippersCountOrderByAggregateInput } from "../inputs/ShippersCountOrderByAggregateInput";
import { ShippersMaxOrderByAggregateInput } from "../inputs/ShippersMaxOrderByAggregateInput";
import { ShippersMinOrderByAggregateInput } from "../inputs/ShippersMinOrderByAggregateInput";
import { ShippersSumOrderByAggregateInput } from "../inputs/ShippersSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("ShippersOrderByWithAggregationInput", {
  isAbstract: true
})
export class ShippersOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  ShipperID?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  CompanyName?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  Phone?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => ShippersCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: ShippersCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ShippersAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: ShippersAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ShippersMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: ShippersMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ShippersMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: ShippersMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ShippersSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: ShippersSumOrderByAggregateInput | undefined;
}
