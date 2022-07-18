import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FloatFilter } from "../inputs/FloatFilter";
import { IntFilter } from "../inputs/IntFilter";

@TypeGraphQL.InputType("Order_DetailsScalarWhereInput", {
  isAbstract: true
})
export class Order_DetailsScalarWhereInput {
  @TypeGraphQL.Field(_type => [Order_DetailsScalarWhereInput], {
    nullable: true
  })
  AND?: Order_DetailsScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Order_DetailsScalarWhereInput], {
    nullable: true
  })
  OR?: Order_DetailsScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Order_DetailsScalarWhereInput], {
    nullable: true
  })
  NOT?: Order_DetailsScalarWhereInput[] | undefined;

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
}
