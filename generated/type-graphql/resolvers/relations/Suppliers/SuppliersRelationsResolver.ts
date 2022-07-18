import * as TypeGraphQL from "type-graphql";
import { Products } from "../../../models/Products";
import { Suppliers } from "../../../models/Suppliers";
import { SuppliersProductsArgs } from "./args/SuppliersProductsArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Suppliers)
export class SuppliersRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [Products], {
    nullable: false
  })
  async Products(@TypeGraphQL.Root() suppliers: Suppliers, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: SuppliersProductsArgs): Promise<Products[]> {
    return getPrismaFromContext(ctx).suppliers.findUnique({
      where: {
        SupplierID: suppliers.SupplierID,
      },
    }).Products(args);
  }
}
