import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CategoriesOrderByWithRelationInput } from "../inputs/CategoriesOrderByWithRelationInput";
import { Order_DetailsOrderByRelationAggregateInput } from "../inputs/Order_DetailsOrderByRelationAggregateInput";
import { SuppliersOrderByWithRelationInput } from "../inputs/SuppliersOrderByWithRelationInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("ProductsOrderByWithRelationInput", {
  isAbstract: true
})
export class ProductsOrderByWithRelationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  ProductID?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  ProductName?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  SupplierID?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  CategoryID?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  QuantityPerUnit?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  UnitPrice?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  UnitsInStock?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  UnitsOnOrder?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  ReorderLevel?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  Discontinued?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => CategoriesOrderByWithRelationInput, {
    nullable: true
  })
  Categories?: CategoriesOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => SuppliersOrderByWithRelationInput, {
    nullable: true
  })
  Suppliers?: SuppliersOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => Order_DetailsOrderByRelationAggregateInput, {
    nullable: true
  })
  Order_Details?: Order_DetailsOrderByRelationAggregateInput | undefined;
}
