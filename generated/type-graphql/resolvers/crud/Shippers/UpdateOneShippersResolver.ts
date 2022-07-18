import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { UpdateOneShippersArgs } from "./args/UpdateOneShippersArgs";
import { Shippers } from "../../../models/Shippers";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Shippers)
export class UpdateOneShippersResolver {
  @TypeGraphQL.Mutation(_returns => Shippers, {
    nullable: true
  })
  async updateOneShippers(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateOneShippersArgs): Promise<Shippers | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).shippers.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
