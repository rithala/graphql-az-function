import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { FindFirstCustomerDemographicsArgs } from "./args/FindFirstCustomerDemographicsArgs";
import { CustomerDemographics } from "../../../models/CustomerDemographics";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CustomerDemographics)
export class FindFirstCustomerDemographicsResolver {
  @TypeGraphQL.Query(_returns => CustomerDemographics, {
    nullable: true
  })
  async findFirstCustomerDemographics(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstCustomerDemographicsArgs): Promise<CustomerDemographics | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).customerDemographics.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
