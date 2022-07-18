import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { FindUniqueSuppliersArgs } from "./args/FindUniqueSuppliersArgs";
import { Suppliers } from "../../../models/Suppliers";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Suppliers)
export class FindUniqueSuppliersResolver {
  @TypeGraphQL.Query(_returns => Suppliers, {
    nullable: true
  })
  async findUniqueSuppliers(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueSuppliersArgs): Promise<Suppliers | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).suppliers.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
