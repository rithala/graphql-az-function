import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Order_DetailsCreateNestedManyWithoutProductsInput } from "../inputs/Order_DetailsCreateNestedManyWithoutProductsInput";
import { SuppliersCreateNestedOneWithoutProductsInput } from "../inputs/SuppliersCreateNestedOneWithoutProductsInput";

@TypeGraphQL.InputType("ProductsCreateWithoutCategoriesInput", {
  isAbstract: true
})
export class ProductsCreateWithoutCategoriesInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  ProductName!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  QuantityPerUnit?: string | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: true
  })
  UnitPrice?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  UnitsInStock?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  UnitsOnOrder?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  ReorderLevel?: number | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  Discontinued?: boolean | undefined;

  @TypeGraphQL.Field(_type => SuppliersCreateNestedOneWithoutProductsInput, {
    nullable: true
  })
  Suppliers?: SuppliersCreateNestedOneWithoutProductsInput | undefined;

  @TypeGraphQL.Field(_type => Order_DetailsCreateNestedManyWithoutProductsInput, {
    nullable: true
  })
  Order_Details?: Order_DetailsCreateNestedManyWithoutProductsInput | undefined;
}
