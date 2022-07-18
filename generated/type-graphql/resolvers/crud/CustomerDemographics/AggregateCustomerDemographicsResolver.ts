import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateCustomerDemographicsArgs } from "./args/AggregateCustomerDemographicsArgs";
import { CustomerDemographics } from "../../../models/CustomerDemographics";
import { AggregateCustomerDemographics } from "../../outputs/AggregateCustomerDemographics";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CustomerDemographics)
export class AggregateCustomerDemographicsResolver {
  @TypeGraphQL.Query(_returns => AggregateCustomerDemographics, {
    nullable: false
  })
  async aggregateCustomerDemographics(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateCustomerDemographicsArgs): Promise<AggregateCustomerDemographics> {
    return getPrismaFromContext(ctx).customerDemographics.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
