import * as TypeGraphQL from "type-graphql";
import { Categories } from "../../../models/Categories";
import { Products } from "../../../models/Products";
import { CategoriesProductsArgs } from "./args/CategoriesProductsArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Categories)
export class CategoriesRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [Products], {
    nullable: false
  })
  async Products(@TypeGraphQL.Root() categories: Categories, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CategoriesProductsArgs): Promise<Products[]> {
    return getPrismaFromContext(ctx).categories.findUnique({
      where: {
        CategoryID: categories.CategoryID,
      },
    }).Products(args);
  }
}
