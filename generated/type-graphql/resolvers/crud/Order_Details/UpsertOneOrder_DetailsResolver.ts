import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { UpsertOneOrder_DetailsArgs } from "./args/UpsertOneOrder_DetailsArgs";
import { Order_Details } from "../../../models/Order_Details";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Order_Details)
export class UpsertOneOrder_DetailsResolver {
  @TypeGraphQL.Mutation(_returns => Order_Details, {
    nullable: false
  })
  async upsertOneOrder_Details(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOneOrder_DetailsArgs): Promise<Order_Details> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).order_Details.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
