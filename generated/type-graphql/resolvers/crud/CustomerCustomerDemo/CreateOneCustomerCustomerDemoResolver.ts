import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { CreateOneCustomerCustomerDemoArgs } from "./args/CreateOneCustomerCustomerDemoArgs";
import { CustomerCustomerDemo } from "../../../models/CustomerCustomerDemo";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CustomerCustomerDemo)
export class CreateOneCustomerCustomerDemoResolver {
  @TypeGraphQL.Mutation(_returns => CustomerCustomerDemo, {
    nullable: false
  })
  async createOneCustomerCustomerDemo(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateOneCustomerCustomerDemoArgs): Promise<CustomerCustomerDemo> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).customerCustomerDemo.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
