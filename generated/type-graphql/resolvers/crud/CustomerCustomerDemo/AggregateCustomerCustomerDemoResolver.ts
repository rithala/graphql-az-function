import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateCustomerCustomerDemoArgs } from "./args/AggregateCustomerCustomerDemoArgs";
import { CustomerCustomerDemo } from "../../../models/CustomerCustomerDemo";
import { AggregateCustomerCustomerDemo } from "../../outputs/AggregateCustomerCustomerDemo";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CustomerCustomerDemo)
export class AggregateCustomerCustomerDemoResolver {
  @TypeGraphQL.Query(_returns => AggregateCustomerCustomerDemo, {
    nullable: false
  })
  async aggregateCustomerCustomerDemo(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateCustomerCustomerDemoArgs): Promise<AggregateCustomerCustomerDemo> {
    return getPrismaFromContext(ctx).customerCustomerDemo.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
