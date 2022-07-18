import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TerritoriesAvgAggregate } from "../outputs/TerritoriesAvgAggregate";
import { TerritoriesCountAggregate } from "../outputs/TerritoriesCountAggregate";
import { TerritoriesMaxAggregate } from "../outputs/TerritoriesMaxAggregate";
import { TerritoriesMinAggregate } from "../outputs/TerritoriesMinAggregate";
import { TerritoriesSumAggregate } from "../outputs/TerritoriesSumAggregate";

@TypeGraphQL.ObjectType("AggregateTerritories", {
  isAbstract: true
})
export class AggregateTerritories {
  @TypeGraphQL.Field(_type => TerritoriesCountAggregate, {
    nullable: true
  })
  _count!: TerritoriesCountAggregate | null;

  @TypeGraphQL.Field(_type => TerritoriesAvgAggregate, {
    nullable: true
  })
  _avg!: TerritoriesAvgAggregate | null;

  @TypeGraphQL.Field(_type => TerritoriesSumAggregate, {
    nullable: true
  })
  _sum!: TerritoriesSumAggregate | null;

  @TypeGraphQL.Field(_type => TerritoriesMinAggregate, {
    nullable: true
  })
  _min!: TerritoriesMinAggregate | null;

  @TypeGraphQL.Field(_type => TerritoriesMaxAggregate, {
    nullable: true
  })
  _max!: TerritoriesMaxAggregate | null;
}
