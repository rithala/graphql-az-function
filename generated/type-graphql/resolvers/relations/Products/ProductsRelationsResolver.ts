import * as TypeGraphQL from "type-graphql";
import { Categories } from "../../../models/Categories";
import { Order_Details } from "../../../models/Order_Details";
import { Products } from "../../../models/Products";
import { Suppliers } from "../../../models/Suppliers";
import { ProductsOrder_DetailsArgs } from "./args/ProductsOrder_DetailsArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Products)
export class ProductsRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Categories, {
    nullable: true
  })
  async Categories(@TypeGraphQL.Root() products: Products, @TypeGraphQL.Ctx() ctx: any): Promise<Categories | null> {
    return getPrismaFromContext(ctx).products.findUnique({
      where: {
        ProductID: products.ProductID,
      },
    }).Categories({});
  }

  @TypeGraphQL.FieldResolver(_type => Suppliers, {
    nullable: true
  })
  async Suppliers(@TypeGraphQL.Root() products: Products, @TypeGraphQL.Ctx() ctx: any): Promise<Suppliers | null> {
    return getPrismaFromContext(ctx).products.findUnique({
      where: {
        ProductID: products.ProductID,
      },
    }).Suppliers({});
  }

  @TypeGraphQL.FieldResolver(_type => [Order_Details], {
    nullable: false
  })
  async Order_Details(@TypeGraphQL.Root() products: Products, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: ProductsOrder_DetailsArgs): Promise<Order_Details[]> {
    return getPrismaFromContext(ctx).products.findUnique({
      where: {
        ProductID: products.ProductID,
      },
    }).Order_Details(args);
  }
}
