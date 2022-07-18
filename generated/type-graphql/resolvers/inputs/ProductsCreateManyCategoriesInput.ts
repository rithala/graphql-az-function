import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("ProductsCreateManyCategoriesInput", {
  isAbstract: true
})
export class ProductsCreateManyCategoriesInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  ProductName!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  SupplierID?: number | undefined;

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
}
