import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.ObjectType("ShippersCountAggregate", {
  isAbstract: true
})
export class ShippersCountAggregate {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  ShipperID!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  CompanyName!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  Phone!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  _all!: number;
}
