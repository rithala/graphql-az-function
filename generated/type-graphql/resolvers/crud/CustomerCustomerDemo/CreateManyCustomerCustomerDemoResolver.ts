import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { CreateManyCustomerCustomerDemoArgs } from "./args/CreateManyCustomerCustomerDemoArgs";
import { CustomerCustomerDemo } from "../../../models/CustomerCustomerDemo";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CustomerCustomerDemo)
export class CreateManyCustomerCustomerDemoResolver {
  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async createManyCustomerCustomerDemo(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyCustomerCustomerDemoArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).customerCustomerDemo.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
