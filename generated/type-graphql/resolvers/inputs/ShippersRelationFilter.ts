import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ShippersWhereInput } from "../inputs/ShippersWhereInput";

@TypeGraphQL.InputType("ShippersRelationFilter", {
  isAbstract: true
})
export class ShippersRelationFilter {
  @TypeGraphQL.Field(_type => ShippersWhereInput, {
    nullable: true
  })
  is?: ShippersWhereInput | undefined;

  @TypeGraphQL.Field(_type => ShippersWhereInput, {
    nullable: true
  })
  isNot?: ShippersWhereInput | undefined;
}
