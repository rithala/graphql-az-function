import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { DeleteOneOrder_DetailsArgs } from "./args/DeleteOneOrder_DetailsArgs";
import { Order_Details } from "../../../models/Order_Details";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Order_Details)
export class DeleteOneOrder_DetailsResolver {
  @TypeGraphQL.Mutation(_returns => Order_Details, {
    nullable: true
  })
  async deleteOneOrder_Details(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteOneOrder_DetailsArgs): Promise<Order_Details | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).order_Details.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
