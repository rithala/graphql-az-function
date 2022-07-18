import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SuppliersWhereInput } from "../inputs/SuppliersWhereInput";

@TypeGraphQL.InputType("SuppliersRelationFilter", {
  isAbstract: true
})
export class SuppliersRelationFilter {
  @TypeGraphQL.Field(_type => SuppliersWhereInput, {
    nullable: true
  })
  is?: SuppliersWhereInput | undefined;

  @TypeGraphQL.Field(_type => SuppliersWhereInput, {
    nullable: true
  })
  isNot?: SuppliersWhereInput | undefined;
}
