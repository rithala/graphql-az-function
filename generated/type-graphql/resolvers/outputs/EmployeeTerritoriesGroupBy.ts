import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EmployeeTerritoriesAvgAggregate } from "../outputs/EmployeeTerritoriesAvgAggregate";
import { EmployeeTerritoriesCountAggregate } from "../outputs/EmployeeTerritoriesCountAggregate";
import { EmployeeTerritoriesMaxAggregate } from "../outputs/EmployeeTerritoriesMaxAggregate";
import { EmployeeTerritoriesMinAggregate } from "../outputs/EmployeeTerritoriesMinAggregate";
import { EmployeeTerritoriesSumAggregate } from "../outputs/EmployeeTerritoriesSumAggregate";

@TypeGraphQL.ObjectType("EmployeeTerritoriesGroupBy", {
  isAbstract: true
})
export class EmployeeTerritoriesGroupBy {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  EmployeeID!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  TerritoryID!: string;

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
