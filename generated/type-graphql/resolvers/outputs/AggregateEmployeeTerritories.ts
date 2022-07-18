import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EmployeeTerritoriesAvgAggregate } from "../outputs/EmployeeTerritoriesAvgAggregate";
import { EmployeeTerritoriesCountAggregate } from "../outputs/EmployeeTerritoriesCountAggregate";
import { EmployeeTerritoriesMaxAggregate } from "../outputs/EmployeeTerritoriesMaxAggregate";
import { EmployeeTerritoriesMinAggregate } from "../outputs/EmployeeTerritoriesMinAggregate";
import { EmployeeTerritoriesSumAggregate } from "../outputs/EmployeeTerritoriesSumAggregate";

@TypeGraphQL.ObjectType("AggregateEmployeeTerritories", {
  isAbstract: true
})
export class AggregateEmployeeTerritories {
  @TypeGraphQL.Field(_type => EmployeeTerritoriesCountAggregate, {
    nullable: true
  })
  _count!: EmployeeTerritoriesCountAggregate | null;

  @TypeGraphQL.Field(_type => EmployeeTerritoriesAvgAggregate, {
    nullable: true
  })
  _avg!: EmployeeTerritoriesAvgAggregate | null;

  @TypeGraphQL.Field(_type => EmployeeTerritoriesSumAggregate, {
    nullable: true
  })
  _sum!: EmployeeTerritoriesSumAggregate | null;

  @TypeGraphQL.Field(_type => EmployeeTerritoriesMinAggregate, {
    nullable: true
  })
  _min!: EmployeeTerritoriesMinAggregate | null;

  @TypeGraphQL.Field(_type => EmployeeTerritoriesMaxAggregate, {
    nullable: true
  })
  _max!: EmployeeTerritoriesMaxAggregate | null;
}
