import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { CreateManyOrder_DetailsArgs } from "./args/CreateManyOrder_DetailsArgs";
import { Order_Details } from "../../../models/Order_Details";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Order_Details)
export class CreateManyOrder_DetailsResolver {
  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async createManyOrder_Details(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyOrder_DetailsArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).order_Details.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
