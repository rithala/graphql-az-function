import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { FindManyShippersArgs } from "./args/FindManyShippersArgs";
import { Shippers } from "../../../models/Shippers";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Shippers)
export class FindManyShippersResolver {
  @TypeGraphQL.Query(_returns => [Shippers], {
    nullable: false
  })
  async findManyShippers(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyShippersArgs): Promise<Shippers[]> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).shippers.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
