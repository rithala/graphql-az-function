import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { GroupByOrder_DetailsArgs } from "./args/GroupByOrder_DetailsArgs";
import { Order_Details } from "../../../models/Order_Details";
import { Order_DetailsGroupBy } from "../../outputs/Order_DetailsGroupBy";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Order_Details)
export class GroupByOrder_DetailsResolver {
  @TypeGraphQL.Query(_returns => [Order_DetailsGroupBy], {
    nullable: false
  })
  async groupByOrder_Details(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByOrder_DetailsArgs): Promise<Order_DetailsGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).order_Details.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
