import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { FindFirstCustomerCustomerDemoArgs } from "./args/FindFirstCustomerCustomerDemoArgs";
import { CustomerCustomerDemo } from "../../../models/CustomerCustomerDemo";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CustomerCustomerDemo)
export class FindFirstCustomerCustomerDemoResolver {
  @TypeGraphQL.Query(_returns => CustomerCustomerDemo, {
    nullable: true
  })
  async findFirstCustomerCustomerDemo(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstCustomerCustomerDemoArgs): Promise<CustomerCustomerDemo | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).customerCustomerDemo.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
