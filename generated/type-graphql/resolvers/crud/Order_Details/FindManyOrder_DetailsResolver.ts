import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { FindManyOrder_DetailsArgs } from "./args/FindManyOrder_DetailsArgs";
import { Order_Details } from "../../../models/Order_Details";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Order_Details)
export class FindManyOrder_DetailsResolver {
  @TypeGraphQL.Query(_returns => [Order_Details], {
    nullable: false
  })
  async findManyOrder_Details(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyOrder_DetailsArgs): Promise<Order_Details[]> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).order_Details.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
