import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { CreateOneCustomerDemographicsArgs } from "./args/CreateOneCustomerDemographicsArgs";
import { CustomerDemographics } from "../../../models/CustomerDemographics";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CustomerDemographics)
export class CreateOneCustomerDemographicsResolver {
  @TypeGraphQL.Mutation(_returns => CustomerDemographics, {
    nullable: false
  })
  async createOneCustomerDemographics(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateOneCustomerDemographicsArgs): Promise<CustomerDemographics> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).customerDemographics.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
