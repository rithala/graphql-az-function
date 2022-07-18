import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { GroupBySuppliersArgs } from "./args/GroupBySuppliersArgs";
import { Suppliers } from "../../../models/Suppliers";
import { SuppliersGroupBy } from "../../outputs/SuppliersGroupBy";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Suppliers)
export class GroupBySuppliersResolver {
  @TypeGraphQL.Query(_returns => [SuppliersGroupBy], {
    nullable: false
  })
  async groupBySuppliers(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupBySuppliersArgs): Promise<SuppliersGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).suppliers.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
