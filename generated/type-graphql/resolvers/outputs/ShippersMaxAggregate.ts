import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.ObjectType("ShippersMaxAggregate", {
  isAbstract: true
})
export class ShippersMaxAggregate {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  ShipperID!: number | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  CompanyName!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  Phone!: string | null;
}
