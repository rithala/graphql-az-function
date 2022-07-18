import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { UpsertOneCustomerDemographicsArgs } from "./args/UpsertOneCustomerDemographicsArgs";
import { CustomerDemographics } from "../../../models/CustomerDemographics";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CustomerDemographics)
export class UpsertOneCustomerDemographicsResolver {
  @TypeGraphQL.Mutation(_returns => CustomerDemographics, {
    nullable: false
  })
  async upsertOneCustomerDemographics(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOneCustomerDemographicsArgs): Promise<CustomerDemographics> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).customerDemographics.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
