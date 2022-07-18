import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { UpdateOneCustomerDemographicsArgs } from "./args/UpdateOneCustomerDemographicsArgs";
import { CustomerDemographics } from "../../../models/CustomerDemographics";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CustomerDemographics)
export class UpdateOneCustomerDemographicsResolver {
  @TypeGraphQL.Mutation(_returns => CustomerDemographics, {
    nullable: true
  })
  async updateOneCustomerDemographics(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateOneCustomerDemographicsArgs): Promise<CustomerDemographics | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).customerDemographics.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
