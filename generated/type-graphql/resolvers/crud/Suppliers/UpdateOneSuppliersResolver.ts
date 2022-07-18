import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { UpdateOneSuppliersArgs } from "./args/UpdateOneSuppliersArgs";
import { Suppliers } from "../../../models/Suppliers";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Suppliers)
export class UpdateOneSuppliersResolver {
  @TypeGraphQL.Mutation(_returns => Suppliers, {
    nullable: true
  })
  async updateOneSuppliers(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateOneSuppliersArgs): Promise<Suppliers | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).suppliers.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
