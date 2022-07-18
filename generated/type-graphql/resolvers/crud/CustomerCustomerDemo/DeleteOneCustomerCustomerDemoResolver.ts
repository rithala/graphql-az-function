import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { DeleteOneCustomerCustomerDemoArgs } from "./args/DeleteOneCustomerCustomerDemoArgs";
import { CustomerCustomerDemo } from "../../../models/CustomerCustomerDemo";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CustomerCustomerDemo)
export class DeleteOneCustomerCustomerDemoResolver {
  @TypeGraphQL.Mutation(_returns => CustomerCustomerDemo, {
    nullable: true
  })
  async deleteOneCustomerCustomerDemo(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteOneCustomerCustomerDemoArgs): Promise<CustomerCustomerDemo | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).customerCustomerDemo.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
