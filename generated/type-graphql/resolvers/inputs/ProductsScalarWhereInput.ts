import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolFilter } from "../inputs/BoolFilter";
import { FloatNullableFilter } from "../inputs/FloatNullableFilter";
import { IntFilter } from "../inputs/IntFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType("ProductsScalarWhereInput", {
  isAbstract: true
})
export class ProductsScalarWhereInput {
  @TypeGraphQL.Field(_type => [ProductsScalarWhereInput], {
    nullable: true
  })
  AND?: ProductsScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProductsScalarWhereInput], {
    nullable: true
  })
  OR?: ProductsScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProductsScalarWhereInput], {
    nullable: true
  })
  NOT?: ProductsScalarWhereInput[] | undefined;

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
}
