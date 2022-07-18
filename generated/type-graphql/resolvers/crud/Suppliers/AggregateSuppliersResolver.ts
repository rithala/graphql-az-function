import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateSuppliersArgs } from "./args/AggregateSuppliersArgs";
import { Suppliers } from "../../../models/Suppliers";
import { AggregateSuppliers } from "../../outputs/AggregateSuppliers";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Suppliers)
export class AggregateSuppliersResolver {
  @TypeGraphQL.Query(_returns => AggregateSuppliers, {
    nullable: false
  })
  async aggregateSuppliers(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateSuppliersArgs): Promise<AggregateSuppliers> {
    return getPrismaFromContext(ctx).suppliers.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
