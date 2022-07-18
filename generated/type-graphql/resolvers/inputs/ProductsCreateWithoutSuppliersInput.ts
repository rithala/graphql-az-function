import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CategoriesCreateNestedOneWithoutProductsInput } from "../inputs/CategoriesCreateNestedOneWithoutProductsInput";
import { Order_DetailsCreateNestedManyWithoutProductsInput } from "../inputs/Order_DetailsCreateNestedManyWithoutProductsInput";

@TypeGraphQL.InputType("ProductsCreateWithoutSuppliersInput", {
  isAbstract: true
})
export class ProductsCreateWithoutSuppliersInput {
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

  @TypeGraphQL.Field(_type => CategoriesCreateNestedOneWithoutProductsInput, {
    nullable: true
  })
  Categories?: CategoriesCreateNestedOneWithoutProductsInput | undefined;

  @TypeGraphQL.Field(_type => Order_DetailsCreateNestedManyWithoutProductsInput, {
    nullable: true
  })
  Order_Details?: Order_DetailsCreateNestedManyWithoutProductsInput | undefined;
}
