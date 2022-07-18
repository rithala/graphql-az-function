import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Order_DetailsOrderByWithAggregationInput } from "../../../inputs/Order_DetailsOrderByWithAggregationInput";
import { Order_DetailsScalarWhereWithAggregatesInput } from "../../../inputs/Order_DetailsScalarWhereWithAggregatesInput";
import { Order_DetailsWhereInput } from "../../../inputs/Order_DetailsWhereInput";
import { Order_DetailsScalarFieldEnum } from "../../../../enums/Order_DetailsScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByOrder_DetailsArgs {
  @TypeGraphQL.Field(_type => Order_DetailsWhereInput, {
    nullable: true
  })
  where?: Order_DetailsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Order_DetailsOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: Order_DetailsOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [Order_DetailsScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"OrderID" | "ProductID" | "UnitPrice" | "Quantity" | "Discount">;

  @TypeGraphQL.Field(_type => Order_DetailsScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: Order_DetailsScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
