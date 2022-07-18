import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductsAvgAggregate } from "../outputs/ProductsAvgAggregate";
import { ProductsCountAggregate } from "../outputs/ProductsCountAggregate";
import { ProductsMaxAggregate } from "../outputs/ProductsMaxAggregate";
import { ProductsMinAggregate } from "../outputs/ProductsMinAggregate";
import { ProductsSumAggregate } from "../outputs/ProductsSumAggregate";

@TypeGraphQL.ObjectType("ProductsGroupBy", {
  isAbstract: true
})
export class ProductsGroupBy {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  ProductID!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  ProductName!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  SupplierID!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  CategoryID!: number | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  QuantityPerUnit!: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: true
  })
  UnitPrice!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  UnitsInStock!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  UnitsOnOrder!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  ReorderLevel!: number | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  Discontinued!: boolean;

  @TypeGraphQL.Field(_type => ProductsCountAggregate, {
    nullable: true
  })
  _count!: ProductsCountAggregate | null;

  @TypeGraphQL.Field(_type => ProductsAvgAggregate, {
    nullable: true
  })
  _avg!: ProductsAvgAggregate | null;

  @TypeGraphQL.Field(_type => ProductsSumAggregate, {
    nullable: true
  })
  _sum!: ProductsSumAggregate | null;

  @TypeGraphQL.Field(_type => ProductsMinAggregate, {
    nullable: true
  })
  _min!: ProductsMinAggregate | null;

  @TypeGraphQL.Field(_type => ProductsMaxAggregate, {
    nullable: true
  })
  _max!: ProductsMaxAggregate | null;
}
