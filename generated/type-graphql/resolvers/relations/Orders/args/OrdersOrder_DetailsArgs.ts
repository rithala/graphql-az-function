import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Order_DetailsOrderByWithRelationInput } from "../../../inputs/Order_DetailsOrderByWithRelationInput";
import { Order_DetailsWhereInput } from "../../../inputs/Order_DetailsWhereInput";
import { Order_DetailsWhereUniqueInput } from "../../../inputs/Order_DetailsWhereUniqueInput";
import { Order_DetailsScalarFieldEnum } from "../../../../enums/Order_DetailsScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class OrdersOrder_DetailsArgs {
  @TypeGraphQL.Field(_type => Order_DetailsWhereInput, {
    nullable: true
  })
  where?: Order_DetailsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Order_DetailsOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: Order_DetailsOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => Order_DetailsWhereUniqueInput, {
    nullable: true
  })
  cursor?: Order_DetailsWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [Order_DetailsScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"OrderID" | "ProductID" | "UnitPrice" | "Quantity" | "Discount"> | undefined;
}
