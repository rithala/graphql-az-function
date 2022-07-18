import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateCustomerDemographicsArgs } from "./args/AggregateCustomerDemographicsArgs";
import { CreateManyCustomerDemographicsArgs } from "./args/CreateManyCustomerDemographicsArgs";
import { CreateOneCustomerDemographicsArgs } from "./args/CreateOneCustomerDemographicsArgs";
import { DeleteManyCustomerDemographicsArgs } from "./args/DeleteManyCustomerDemographicsArgs";
import { DeleteOneCustomerDemographicsArgs } from "./args/DeleteOneCustomerDemographicsArgs";
import { FindFirstCustomerDemographicsArgs } from "./args/FindFirstCustomerDemographicsArgs";
import { FindManyCustomerDemographicsArgs } from "./args/FindManyCustomerDemographicsArgs";
import { FindUniqueCustomerDemographicsArgs } from "./args/FindUniqueCustomerDemographicsArgs";
import { GroupByCustomerDemographicsArgs } from "./args/GroupByCustomerDemographicsArgs";
import { UpdateManyCustomerDemographicsArgs } from "./args/UpdateManyCustomerDemographicsArgs";
import { UpdateOneCustomerDemographicsArgs } from "./args/UpdateOneCustomerDemographicsArgs";
import { UpsertOneCustomerDemographicsArgs } from "./args/UpsertOneCustomerDemographicsArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { CustomerDemographics } from "../../../models/CustomerDemographics";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateCustomerDemographics } from "../../outputs/AggregateCustomerDemographics";
import { CustomerDemographicsGroupBy } from "../../outputs/CustomerDemographicsGroupBy";

@TypeGraphQL.Resolver(_of => CustomerDemographics)
export class CustomerDemographicsCrudResolver {
  @TypeGraphQL.Query(_returns => AggregateCustomerDemographics, {
    nullable: false
  })
  async aggregateCustomerDemographics(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateCustomerDemographicsArgs): Promise<AggregateCustomerDemographics> {
    return getPrismaFromContext(ctx).customerDemographics.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async createManyCustomerDemographics(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyCustomerDemographicsArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).customerDemographics.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => CustomerDemographics, {
    nullable: false
  })
  async createOneCustomerDemographics(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateOneCustomerDemographicsArgs): Promise<CustomerDemographics> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).customerDemographics.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyCustomerDemographics(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteManyCustomerDemographicsArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).customerDemographics.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => CustomerDemographics, {
    nullable: true
  })
  async deleteOneCustomerDemographics(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteOneCustomerDemographicsArgs): Promise<CustomerDemographics | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).customerDemographics.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => CustomerDemographics, {
    nullable: true
  })
  async findFirstCustomerDemographics(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstCustomerDemographicsArgs): Promise<CustomerDemographics | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).customerDemographics.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [CustomerDemographics], {
    nullable: false
  })
  async findManyCustomerDemographics(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyCustomerDemographicsArgs): Promise<CustomerDemographics[]> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).customerDemographics.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => CustomerDemographics, {
    nullable: true
  })
  async findUniqueCustomerDemographics(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueCustomerDemographicsArgs): Promise<CustomerDemographics | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).customerDemographics.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [CustomerDemographicsGroupBy], {
    nullable: false
  })
  async groupByCustomerDemographics(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByCustomerDemographicsArgs): Promise<CustomerDemographicsGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).customerDemographics.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyCustomerDemographics(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateManyCustomerDemographicsArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).customerDemographics.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => CustomerDemographics, {
    nullable: true
  })
  async updateOneCustomerDemographics(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateOneCustomerDemographicsArgs): Promise<CustomerDemographics | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).customerDemographics.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => CustomerDemographics, {
    nullable: false
  })
  async upsertOneCustomerDemographics(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOneCustomerDemographicsArgs): Promise<CustomerDemographics> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).customerDemographics.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
