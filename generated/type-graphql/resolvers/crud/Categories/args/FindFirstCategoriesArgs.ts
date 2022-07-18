import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CategoriesOrderByWithRelationInput } from "../../../inputs/CategoriesOrderByWithRelationInput";
import { CategoriesWhereInput } from "../../../inputs/CategoriesWhereInput";
import { CategoriesWhereUniqueInput } from "../../../inputs/CategoriesWhereUniqueInput";
import { CategoriesScalarFieldEnum } from "../../../../enums/CategoriesScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstCategoriesArgs {
  @TypeGraphQL.Field(_type => CategoriesWhereInput, {
    nullable: true
  })
  where?: CategoriesWhereInput | undefined;

  @TypeGraphQL.Field(_type => [CategoriesOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: CategoriesOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => CategoriesWhereUniqueInput, {
    nullable: true
  })
  cursor?: CategoriesWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [CategoriesScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"CategoryID" | "CategoryName" | "Description" | "Picture"> | undefined;
}
