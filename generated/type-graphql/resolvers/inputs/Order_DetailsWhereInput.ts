import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FloatFilter } from "../inputs/FloatFilter";
import { IntFilter } from "../inputs/IntFilter";
import { OrdersRelationFilter } from "../inputs/OrdersRelationFilter";
import { ProductsRelationFilter } from "../inputs/ProductsRelationFilter";

@TypeGraphQL.InputType("Order_DetailsWhereInput", {
  isAbstract: true
})
export class Order_DetailsWhereInput {
  @TypeGraphQL.Field(_type => [Order_DetailsWhereInput], {
    nullable: true
  })
  AND?: Order_DetailsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Order_DetailsWhereInput], {
    nullable: true
  })
  OR?: Order_DetailsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Order_DetailsWhereInput], {
    nullable: true
  })
  NOT?: Order_DetailsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  OrderID?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  ProductID?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => FloatFilter, {
    nullable: true
  })
  UnitPrice?: FloatFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  Quantity?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => FloatFilter, {
    nullable: true
  })
  Discount?: FloatFilter | undefined;

  @TypeGraphQL.Field(_type => OrdersRelationFilter, {
    nullable: true
  })
  Orders?: OrdersRelationFilter | undefined;

  @TypeGraphQL.Field(_type => ProductsRelationFilter, {
    nullable: true
  })
  Products?: ProductsRelationFilter | undefined;
}
