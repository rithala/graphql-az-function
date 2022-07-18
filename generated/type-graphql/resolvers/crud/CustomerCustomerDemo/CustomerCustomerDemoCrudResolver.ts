import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateCustomerCustomerDemoArgs } from "./args/AggregateCustomerCustomerDemoArgs";
import { CreateManyCustomerCustomerDemoArgs } from "./args/CreateManyCustomerCustomerDemoArgs";
import { CreateOneCustomerCustomerDemoArgs } from "./args/CreateOneCustomerCustomerDemoArgs";
import { DeleteManyCustomerCustomerDemoArgs } from "./args/DeleteManyCustomerCustomerDemoArgs";
import { DeleteOneCustomerCustomerDemoArgs } from "./args/DeleteOneCustomerCustomerDemoArgs";
import { FindFirstCustomerCustomerDemoArgs } from "./args/FindFirstCustomerCustomerDemoArgs";
import { FindManyCustomerCustomerDemoArgs } from "./args/FindManyCustomerCustomerDemoArgs";
import { FindUniqueCustomerCustomerDemoArgs } from "./args/FindUniqueCustomerCustomerDemoArgs";
import { GroupByCustomerCustomerDemoArgs } from "./args/GroupByCustomerCustomerDemoArgs";
import { UpdateManyCustomerCustomerDemoArgs } from "./args/UpdateManyCustomerCustomerDemoArgs";
import { UpdateOneCustomerCustomerDemoArgs } from "./args/UpdateOneCustomerCustomerDemoArgs";
import { UpsertOneCustomerCustomerDemoArgs } from "./args/UpsertOneCustomerCustomerDemoArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { CustomerCustomerDemo } from "../../../models/CustomerCustomerDemo";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateCustomerCustomerDemo } from "../../outputs/AggregateCustomerCustomerDemo";
import { CustomerCustomerDemoGroupBy } from "../../outputs/CustomerCustomerDemoGroupBy";

@TypeGraphQL.Resolver(_of => CustomerCustomerDemo)
export class CustomerCustomerDemoCrudResolver {
  @TypeGraphQL.Query(_returns => AggregateCustomerCustomerDemo, {
    nullable: false
  })
  async aggregateCustomerCustomerDemo(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateCustomerCustomerDemoArgs): Promise<AggregateCustomerCustomerDemo> {
    return getPrismaFromContext(ctx).customerCustomerDemo.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async createManyCustomerCustomerDemo(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyCustomerCustomerDemoArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).customerCustomerDemo.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => CustomerCustomerDemo, {
    nullable: false
  })
  async createOneCustomerCustomerDemo(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateOneCustomerCustomerDemoArgs): Promise<CustomerCustomerDemo> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).customerCustomerDemo.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyCustomerCustomerDemo(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteManyCustomerCustomerDemoArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).customerCustomerDemo.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => CustomerCustomerDemo, {
    nullable: true
  })
  async deleteOneCustomerCustomerDemo(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteOneCustomerCustomerDemoArgs): Promise<CustomerCustomerDemo | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).customerCustomerDemo.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => CustomerCustomerDemo, {
    nullable: true
  })
  async findFirstCustomerCustomerDemo(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstCustomerCustomerDemoArgs): Promise<CustomerCustomerDemo | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).customerCustomerDemo.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [CustomerCustomerDemo], {
    nullable: false
  })
  async customerCustomerDemos(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyCustomerCustomerDemoArgs): Promise<CustomerCustomerDemo[]> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).customerCustomerDemo.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => CustomerCustomerDemo, {
    nullable: true
  })
  async customerCustomerDemo(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueCustomerCustomerDemoArgs): Promise<CustomerCustomerDemo | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).customerCustomerDemo.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [CustomerCustomerDemoGroupBy], {
    nullable: false
  })
  async groupByCustomerCustomerDemo(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByCustomerCustomerDemoArgs): Promise<CustomerCustomerDemoGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).customerCustomerDemo.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyCustomerCustomerDemo(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateManyCustomerCustomerDemoArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).customerCustomerDemo.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => CustomerCustomerDemo, {
    nullable: true
  })
  async updateOneCustomerCustomerDemo(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateOneCustomerCustomerDemoArgs): Promise<CustomerCustomerDemo | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).customerCustomerDemo.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => CustomerCustomerDemo, {
    nullable: false
  })
  async upsertOneCustomerCustomerDemo(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOneCustomerCustomerDemoArgs): Promise<CustomerCustomerDemo> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).customerCustomerDemo.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
