import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { UpdateManySuppliersArgs } from "./args/UpdateManySuppliersArgs";
import { Suppliers } from "../../../models/Suppliers";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Suppliers)
export class UpdateManySuppliersResolver {
  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManySuppliers(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateManySuppliersArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).suppliers.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
