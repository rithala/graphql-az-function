import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Orders } from "../models/Orders";
import { ShippersCount } from "../resolvers/outputs/ShippersCount";

@TypeGraphQL.ObjectType("Shippers", {
  isAbstract: true
})
export class Shippers {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  ShipperID!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  CompanyName!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  Phone?: string | null;

  Orders?: Orders[];

  @TypeGraphQL.Field(_type => ShippersCount, {
    nullable: true
  })
  _count?: ShippersCount | null;
}
