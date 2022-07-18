import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateOrder_DetailsArgs } from "./args/AggregateOrder_DetailsArgs";
import { CreateManyOrder_DetailsArgs } from "./args/CreateManyOrder_DetailsArgs";
import { CreateOneOrder_DetailsArgs } from "./args/CreateOneOrder_DetailsArgs";
import { DeleteManyOrder_DetailsArgs } from "./args/DeleteManyOrder_DetailsArgs";
import { DeleteOneOrder_DetailsArgs } from "./args/DeleteOneOrder_DetailsArgs";
import { FindFirstOrder_DetailsArgs } from "./args/FindFirstOrder_DetailsArgs";
import { FindManyOrder_DetailsArgs } from "./args/FindManyOrder_DetailsArgs";
import { FindUniqueOrder_DetailsArgs } from "./args/FindUniqueOrder_DetailsArgs";
import { GroupByOrder_DetailsArgs } from "./args/GroupByOrder_DetailsArgs";
import { UpdateManyOrder_DetailsArgs } from "./args/UpdateManyOrder_DetailsArgs";
import { UpdateOneOrder_DetailsArgs } from "./args/UpdateOneOrder_DetailsArgs";
import { UpsertOneOrder_DetailsArgs } from "./args/UpsertOneOrder_DetailsArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { Order_Details } from "../../../models/Order_Details";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateOrder_Details } from "../../outputs/AggregateOrder_Details";
import { Order_DetailsGroupBy } from "../../outputs/Order_DetailsGroupBy";

@TypeGraphQL.Resolver(_of => Order_Details)
export class Order_DetailsCrudResolver {
  @TypeGraphQL.Query(_returns => AggregateOrder_Details, {
    nullable: false
  })
  async aggregateOrder_Details(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateOrder_DetailsArgs): Promise<AggregateOrder_Details> {
    return getPrismaFromContext(ctx).order_Details.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async createManyOrder_Details(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyOrder_DetailsArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).order_Details.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => Order_Details, {
    nullable: false
  })
  async createOneOrder_Details(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateOneOrder_DetailsArgs): Promise<Order_Details> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).order_Details.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyOrder_Details(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteManyOrder_DetailsArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).order_Details.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => Order_Details, {
    nullable: true
  })
  async deleteOneOrder_Details(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteOneOrder_DetailsArgs): Promise<Order_Details | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).order_Details.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => Order_Details, {
    nullable: true
  })
  async findFirstOrder_Details(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstOrder_DetailsArgs): Promise<Order_Details | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).order_Details.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [Order_Details], {
    nullable: false
  })
  async findManyOrder_Details(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyOrder_DetailsArgs): Promise<Order_Details[]> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).order_Details.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => Order_Details, {
    nullable: true
  })
  async findUniqueOrder_Details(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueOrder_DetailsArgs): Promise<Order_Details | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).order_Details.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [Order_DetailsGroupBy], {
    nullable: false
  })
  async groupByOrder_Details(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByOrder_DetailsArgs): Promise<Order_DetailsGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).order_Details.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyOrder_Details(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateManyOrder_DetailsArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).order_Details.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => Order_Details, {
    nullable: true
  })
  async updateOneOrder_Details(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateOneOrder_DetailsArgs): Promise<Order_Details | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).order_Details.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => Order_Details, {
    nullable: false
  })
  async upsertOneOrder_Details(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOneOrder_DetailsArgs): Promise<Order_Details> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).order_Details.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
