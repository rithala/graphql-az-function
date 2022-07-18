import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BytesNullableWithAggregatesFilter } from "../inputs/BytesNullableWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("CategoriesScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class CategoriesScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [CategoriesScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: CategoriesScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [CategoriesScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: CategoriesScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [CategoriesScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: CategoriesScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  CategoryID?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  CategoryName?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  Description?: StringNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => BytesNullableWithAggregatesFilter, {
    nullable: true
  })
  Picture?: BytesNullableWithAggregatesFilter | undefined;
}
