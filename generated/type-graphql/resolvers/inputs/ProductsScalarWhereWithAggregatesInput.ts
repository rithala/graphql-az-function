import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolWithAggregatesFilter } from "../inputs/BoolWithAggregatesFilter";
import { FloatNullableWithAggregatesFilter } from "../inputs/FloatNullableWithAggregatesFilter";
import { IntNullableWithAggregatesFilter } from "../inputs/IntNullableWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("ProductsScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class ProductsScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [ProductsScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: ProductsScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProductsScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: ProductsScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProductsScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: ProductsScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  ProductID?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  ProductName?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableWithAggregatesFilter, {
    nullable: true
  })
  SupplierID?: IntNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableWithAggregatesFilter, {
    nullable: true
  })
  CategoryID?: IntNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  QuantityPerUnit?: StringNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => FloatNullableWithAggregatesFilter, {
    nullable: true
  })
  UnitPrice?: FloatNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableWithAggregatesFilter, {
    nullable: true
  })
  UnitsInStock?: IntNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableWithAggregatesFilter, {
    nullable: true
  })
  UnitsOnOrder?: IntNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableWithAggregatesFilter, {
    nullable: true
  })
  ReorderLevel?: IntNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => BoolWithAggregatesFilter, {
    nullable: true
  })
  Discontinued?: BoolWithAggregatesFilter | undefined;
}
