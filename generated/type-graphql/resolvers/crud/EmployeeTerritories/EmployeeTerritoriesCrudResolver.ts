import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateEmployeeTerritoriesArgs } from "./args/AggregateEmployeeTerritoriesArgs";
import { CreateManyEmployeeTerritoriesArgs } from "./args/CreateManyEmployeeTerritoriesArgs";
import { CreateOneEmployeeTerritoriesArgs } from "./args/CreateOneEmployeeTerritoriesArgs";
import { DeleteManyEmployeeTerritoriesArgs } from "./args/DeleteManyEmployeeTerritoriesArgs";
import { DeleteOneEmployeeTerritoriesArgs } from "./args/DeleteOneEmployeeTerritoriesArgs";
import { FindFirstEmployeeTerritoriesArgs } from "./args/FindFirstEmployeeTerritoriesArgs";
import { FindManyEmployeeTerritoriesArgs } from "./args/FindManyEmployeeTerritoriesArgs";
import { FindUniqueEmployeeTerritoriesArgs } from "./args/FindUniqueEmployeeTerritoriesArgs";
import { GroupByEmployeeTerritoriesArgs } from "./args/GroupByEmployeeTerritoriesArgs";
import { UpdateManyEmployeeTerritoriesArgs } from "./args/UpdateManyEmployeeTerritoriesArgs";
import { UpdateOneEmployeeTerritoriesArgs } from "./args/UpdateOneEmployeeTerritoriesArgs";
import { UpsertOneEmployeeTerritoriesArgs } from "./args/UpsertOneEmployeeTerritoriesArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { EmployeeTerritories } from "../../../models/EmployeeTerritories";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateEmployeeTerritories } from "../../outputs/AggregateEmployeeTerritories";
import { EmployeeTerritoriesGroupBy } from "../../outputs/EmployeeTerritoriesGroupBy";

@TypeGraphQL.Resolver(_of => EmployeeTerritories)
export class EmployeeTerritoriesCrudResolver {
  @TypeGraphQL.Query(_returns => AggregateEmployeeTerritories, {
    nullable: false
  })
  async aggregateEmployeeTerritories(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateEmployeeTerritoriesArgs): Promise<AggregateEmployeeTerritories> {
    return getPrismaFromContext(ctx).employeeTerritories.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async createManyEmployeeTerritories(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyEmployeeTerritoriesArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).employeeTerritories.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => EmployeeTerritories, {
    nullable: false
  })
  async createOneEmployeeTerritories(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateOneEmployeeTerritoriesArgs): Promise<EmployeeTerritories> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).employeeTerritories.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyEmployeeTerritories(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteManyEmployeeTerritoriesArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).employeeTerritories.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => EmployeeTerritories, {
    nullable: true
  })
  async deleteOneEmployeeTerritories(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteOneEmployeeTerritoriesArgs): Promise<EmployeeTerritories | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).employeeTerritories.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => EmployeeTerritories, {
    nullable: true
  })
  async findFirstEmployeeTerritories(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstEmployeeTerritoriesArgs): Promise<EmployeeTerritories | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).employeeTerritories.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [EmployeeTerritories], {
    nullable: false
  })
  async findManyEmployeeTerritories(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyEmployeeTerritoriesArgs): Promise<EmployeeTerritories[]> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).employeeTerritories.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => EmployeeTerritories, {
    nullable: true
  })
  async findUniqueEmployeeTerritories(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueEmployeeTerritoriesArgs): Promise<EmployeeTerritories | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).employeeTerritories.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [EmployeeTerritoriesGroupBy], {
    nullable: false
  })
  async groupByEmployeeTerritories(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByEmployeeTerritoriesArgs): Promise<EmployeeTerritoriesGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).employeeTerritories.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyEmployeeTerritories(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateManyEmployeeTerritoriesArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).employeeTerritories.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => EmployeeTerritories, {
    nullable: true
  })
  async updateOneEmployeeTerritories(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateOneEmployeeTerritoriesArgs): Promise<EmployeeTerritories | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).employeeTerritories.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => EmployeeTerritories, {
    nullable: false
  })
  async upsertOneEmployeeTerritories(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOneEmployeeTerritoriesArgs): Promise<EmployeeTerritories> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).employeeTerritories.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
