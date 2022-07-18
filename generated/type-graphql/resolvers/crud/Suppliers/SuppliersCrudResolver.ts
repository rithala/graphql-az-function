import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateSuppliersArgs } from "./args/AggregateSuppliersArgs";
import { CreateManySuppliersArgs } from "./args/CreateManySuppliersArgs";
import { CreateOneSuppliersArgs } from "./args/CreateOneSuppliersArgs";
import { DeleteManySuppliersArgs } from "./args/DeleteManySuppliersArgs";
import { DeleteOneSuppliersArgs } from "./args/DeleteOneSuppliersArgs";
import { FindFirstSuppliersArgs } from "./args/FindFirstSuppliersArgs";
import { FindManySuppliersArgs } from "./args/FindManySuppliersArgs";
import { FindUniqueSuppliersArgs } from "./args/FindUniqueSuppliersArgs";
import { GroupBySuppliersArgs } from "./args/GroupBySuppliersArgs";
import { UpdateManySuppliersArgs } from "./args/UpdateManySuppliersArgs";
import { UpdateOneSuppliersArgs } from "./args/UpdateOneSuppliersArgs";
import { UpsertOneSuppliersArgs } from "./args/UpsertOneSuppliersArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { Suppliers } from "../../../models/Suppliers";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateSuppliers } from "../../outputs/AggregateSuppliers";
import { SuppliersGroupBy } from "../../outputs/SuppliersGroupBy";

@TypeGraphQL.Resolver(_of => Suppliers)
export class SuppliersCrudResolver {
  @TypeGraphQL.Query(_returns => AggregateSuppliers, {
    nullable: false
  })
  async aggregateSuppliers(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateSuppliersArgs): Promise<AggregateSuppliers> {
    return getPrismaFromContext(ctx).suppliers.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async createManySuppliers(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManySuppliersArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).suppliers.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

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

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManySuppliers(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteManySuppliersArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).suppliers.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => Suppliers, {
    nullable: true
  })
  async deleteOneSuppliers(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteOneSuppliersArgs): Promise<Suppliers | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).suppliers.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => Suppliers, {
    nullable: true
  })
  async findFirstSuppliers(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstSuppliersArgs): Promise<Suppliers | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).suppliers.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [Suppliers], {
    nullable: false
  })
  async findManySuppliers(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManySuppliersArgs): Promise<Suppliers[]> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).suppliers.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

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

  @TypeGraphQL.Mutation(_returns => Suppliers, {
    nullable: false
  })
  async upsertOneSuppliers(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOneSuppliersArgs): Promise<Suppliers> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).suppliers.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
