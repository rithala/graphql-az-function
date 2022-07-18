import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Categories } from "../models/Categories";
import { Order_Details } from "../models/Order_Details";
import { Suppliers } from "../models/Suppliers";
import { ProductsCount } from "../resolvers/outputs/ProductsCount";

@TypeGraphQL.ObjectType("Products", {
  isAbstract: true
})
export class Products {
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
  SupplierID?: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  CategoryID?: number | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  QuantityPerUnit?: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: true
  })
  UnitPrice?: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  UnitsInStock?: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  UnitsOnOrder?: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  ReorderLevel?: number | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  Discontinued!: boolean;

  Categories?: Categories | null;

  Suppliers?: Suppliers | null;

  Order_Details?: Order_Details[];

  @TypeGraphQL.Field(_type => ProductsCount, {
    nullable: true
  })
  _count?: ProductsCount | null;
}
