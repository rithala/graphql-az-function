import * as TypeGraphQL from "type-graphql";
import { Customers } from "../../../models/Customers";
import { Employees } from "../../../models/Employees";
import { Order_Details } from "../../../models/Order_Details";
import { Orders } from "../../../models/Orders";
import { Shippers } from "../../../models/Shippers";
import { OrdersOrder_DetailsArgs } from "./args/OrdersOrder_DetailsArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Orders)
export class OrdersRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Customers, {
    nullable: true
  })
  async Customers(@TypeGraphQL.Root() orders: Orders, @TypeGraphQL.Ctx() ctx: any): Promise<Customers | null> {
    return getPrismaFromContext(ctx).orders.findUnique({
      where: {
        OrderID: orders.OrderID,
      },
    }).Customers({});
  }

  @TypeGraphQL.FieldResolver(_type => Employees, {
    nullable: true
  })
  async Employees(@TypeGraphQL.Root() orders: Orders, @TypeGraphQL.Ctx() ctx: any): Promise<Employees | null> {
    return getPrismaFromContext(ctx).orders.findUnique({
      where: {
        OrderID: orders.OrderID,
      },
    }).Employees({});
  }

  @TypeGraphQL.FieldResolver(_type => Shippers, {
    nullable: true
  })
  async Shippers(@TypeGraphQL.Root() orders: Orders, @TypeGraphQL.Ctx() ctx: any): Promise<Shippers | null> {
    return getPrismaFromContext(ctx).orders.findUnique({
      where: {
        OrderID: orders.OrderID,
      },
    }).Shippers({});
  }

  @TypeGraphQL.FieldResolver(_type => [Order_Details], {
    nullable: false
  })
  async Order_Details(@TypeGraphQL.Root() orders: Orders, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: OrdersOrder_DetailsArgs): Promise<Order_Details[]> {
    return getPrismaFromContext(ctx).orders.findUnique({
      where: {
        OrderID: orders.OrderID,
      },
    }).Order_Details(args);
  }
}
