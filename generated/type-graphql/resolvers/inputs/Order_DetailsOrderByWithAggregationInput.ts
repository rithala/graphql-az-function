import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Order_DetailsAvgOrderByAggregateInput } from "../inputs/Order_DetailsAvgOrderByAggregateInput";
import { Order_DetailsCountOrderByAggregateInput } from "../inputs/Order_DetailsCountOrderByAggregateInput";
import { Order_DetailsMaxOrderByAggregateInput } from "../inputs/Order_DetailsMaxOrderByAggregateInput";
import { Order_DetailsMinOrderByAggregateInput } from "../inputs/Order_DetailsMinOrderByAggregateInput";
import { Order_DetailsSumOrderByAggregateInput } from "../inputs/Order_DetailsSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Order_DetailsOrderByWithAggregationInput", {
  isAbstract: true
})
export class Order_DetailsOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  OrderID?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  ProductID?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  UnitPrice?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  Quantity?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  Discount?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => Order_DetailsCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: Order_DetailsCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Order_DetailsAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: Order_DetailsAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Order_DetailsMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: Order_DetailsMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Order_DetailsMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: Order_DetailsMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Order_DetailsSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: Order_DetailsSumOrderByAggregateInput | undefined;
}
