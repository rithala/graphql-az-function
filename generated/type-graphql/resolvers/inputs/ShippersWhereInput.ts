import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";
import { OrdersListRelationFilter } from "../inputs/OrdersListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType("ShippersWhereInput", {
  isAbstract: true
})
export class ShippersWhereInput {
  @TypeGraphQL.Field(_type => [ShippersWhereInput], {
    nullable: true
  })
  AND?: ShippersWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ShippersWhereInput], {
    nullable: true
  })
  OR?: ShippersWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ShippersWhereInput], {
    nullable: true
  })
  NOT?: ShippersWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  ShipperID?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  CompanyName?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  Phone?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => OrdersListRelationFilter, {
    nullable: true
  })
  Orders?: OrdersListRelationFilter | undefined;
}
