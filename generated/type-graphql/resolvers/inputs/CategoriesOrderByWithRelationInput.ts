import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductsOrderByRelationAggregateInput } from "../inputs/ProductsOrderByRelationAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("CategoriesOrderByWithRelationInput", {
  isAbstract: true
})
export class CategoriesOrderByWithRelationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  CategoryID?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  CategoryName?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  Description?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  Picture?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => ProductsOrderByRelationAggregateInput, {
    nullable: true
  })
  Products?: ProductsOrderByRelationAggregateInput | undefined;
}
