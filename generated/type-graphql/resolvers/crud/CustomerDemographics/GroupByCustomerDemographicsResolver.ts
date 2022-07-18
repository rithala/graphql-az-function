import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { GroupByCustomerDemographicsArgs } from "./args/GroupByCustomerDemographicsArgs";
import { CustomerDemographics } from "../../../models/CustomerDemographics";
import { CustomerDemographicsGroupBy } from "../../outputs/CustomerDemographicsGroupBy";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CustomerDemographics)
export class GroupByCustomerDemographicsResolver {
  @TypeGraphQL.Query(_returns => [CustomerDemographicsGroupBy], {
    nullable: false
  })
  async groupByCustomerDemographics(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByCustomerDemographicsArgs): Promise<CustomerDemographicsGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).customerDemographics.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
