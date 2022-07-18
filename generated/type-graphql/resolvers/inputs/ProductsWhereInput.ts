import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolFilter } from "../inputs/BoolFilter";
import { CategoriesRelationFilter } from "../inputs/CategoriesRelationFilter";
import { FloatNullableFilter } from "../inputs/FloatNullableFilter";
import { IntFilter } from "../inputs/IntFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { Order_DetailsListRelationFilter } from "../inputs/Order_DetailsListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { SuppliersRelationFilter } from "../inputs/SuppliersRelationFilter";

@TypeGraphQL.InputType("ProductsWhereInput", {
  isAbstract: true
})
export class ProductsWhereInput {
  @TypeGraphQL.Field(_type => [ProductsWhereInput], {
    nullable: true
  })
  AND?: ProductsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProductsWhereInput], {
    nullable: true
  })
  OR?: ProductsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProductsWhereInput], {
    nullable: true
  })
  NOT?: ProductsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  ProductID?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  ProductName?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  SupplierID?: IntNullableFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  CategoryID?: IntNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  QuantityPerUnit?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => FloatNullableFilter, {
    nullable: true
  })
  UnitPrice?: FloatNullableFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  UnitsInStock?: IntNullableFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  UnitsOnOrder?: IntNullableFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  ReorderLevel?: IntNullableFilter | undefined;

  @TypeGraphQL.Field(_type => BoolFilter, {
    nullable: true
  })
  Discontinued?: BoolFilter | undefined;

  @TypeGraphQL.Field(_type => CategoriesRelationFilter, {
    nullable: true
  })
  Categories?: CategoriesRelationFilter | undefined;

  @TypeGraphQL.Field(_type => SuppliersRelationFilter, {
    nullable: true
  })
  Suppliers?: SuppliersRelationFilter | undefined;

  @TypeGraphQL.Field(_type => Order_DetailsListRelationFilter, {
    nullable: true
  })
  Order_Details?: Order_DetailsListRelationFilter | undefined;
}
