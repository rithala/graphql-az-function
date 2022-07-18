import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { CreateOneSuppliersArgs } from "./args/CreateOneSuppliersArgs";
import { Suppliers } from "../../../models/Suppliers";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Suppliers)
export class CreateOneSuppliersResolver {
  @TypeGraphQL.Mutation(_returns => Suppliers, {
    nullable: false
  })
  async createOneSuppliers(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateOneSuppliersArgs): Promise<Suppliers> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).suppliers.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
