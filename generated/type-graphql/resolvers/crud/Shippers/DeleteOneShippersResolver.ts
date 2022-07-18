import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { DeleteOneShippersArgs } from "./args/DeleteOneShippersArgs";
import { Shippers } from "../../../models/Shippers";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Shippers)
export class DeleteOneShippersResolver {
  @TypeGraphQL.Mutation(_returns => Shippers, {
    nullable: true
  })
  async deleteOneShippers(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteOneShippersArgs): Promise<Shippers | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).shippers.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
