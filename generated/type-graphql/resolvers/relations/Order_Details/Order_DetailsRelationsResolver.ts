import * as TypeGraphQL from "type-graphql";
import { Order_Details } from "../../../models/Order_Details";
import { Orders } from "../../../models/Orders";
import { Products } from "../../../models/Products";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Order_Details)
export class Order_DetailsRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Orders, {
    nullable: false
  })
  async Orders(@TypeGraphQL.Root() order_Details: Order_Details, @TypeGraphQL.Ctx() ctx: any): Promise<Orders> {
    return getPrismaFromContext(ctx).order_Details.findUnique({
      where: {
        OrderID_ProductID: {
          OrderID: order_Details.OrderID,
          ProductID: order_Details.ProductID,
        },
      },
    }).Orders({});
  }

  @TypeGraphQL.FieldResolver(_type => Products, {
    nullable: false
  })
  async Products(@TypeGraphQL.Root() order_Details: Order_Details, @TypeGraphQL.Ctx() ctx: any): Promise<Products> {
    return getPrismaFromContext(ctx).order_Details.findUnique({
      where: {
        OrderID_ProductID: {
          OrderID: order_Details.OrderID,
          ProductID: order_Details.ProductID,
        },
      },
    }).Products({});
  }
}
