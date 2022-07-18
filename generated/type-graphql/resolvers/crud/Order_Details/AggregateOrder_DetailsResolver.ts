import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateOrder_DetailsArgs } from "./args/AggregateOrder_DetailsArgs";
import { Order_Details } from "../../../models/Order_Details";
import { AggregateOrder_Details } from "../../outputs/AggregateOrder_Details";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Order_Details)
export class AggregateOrder_DetailsResolver {
  @TypeGraphQL.Query(_returns => AggregateOrder_Details, {
    nullable: false
  })
  async aggregateOrder_Details(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateOrder_DetailsArgs): Promise<AggregateOrder_Details> {
    return getPrismaFromContext(ctx).order_Details.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
