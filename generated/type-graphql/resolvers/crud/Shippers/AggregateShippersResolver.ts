import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateShippersArgs } from "./args/AggregateShippersArgs";
import { Shippers } from "../../../models/Shippers";
import { AggregateShippers } from "../../outputs/AggregateShippers";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Shippers)
export class AggregateShippersResolver {
  @TypeGraphQL.Query(_returns => AggregateShippers, {
    nullable: false
  })
  async aggregateShippers(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateShippersArgs): Promise<AggregateShippers> {
    return getPrismaFromContext(ctx).shippers.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
