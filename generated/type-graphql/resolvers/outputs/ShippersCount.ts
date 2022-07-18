import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.ObjectType("ShippersCount", {
  isAbstract: true
})
export class ShippersCount {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  Orders!: number;
}
