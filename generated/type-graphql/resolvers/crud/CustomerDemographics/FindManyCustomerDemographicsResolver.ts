import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { FindManyCustomerDemographicsArgs } from "./args/FindManyCustomerDemographicsArgs";
import { CustomerDemographics } from "../../../models/CustomerDemographics";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CustomerDemographics)
export class FindManyCustomerDemographicsResolver {
  @TypeGraphQL.Query(_returns => [CustomerDemographics], {
    nullable: false
  })
  async findManyCustomerDemographics(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyCustomerDemographicsArgs): Promise<CustomerDemographics[]> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).customerDemographics.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
