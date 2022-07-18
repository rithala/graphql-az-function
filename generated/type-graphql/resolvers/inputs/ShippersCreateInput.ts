import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OrdersCreateNestedManyWithoutShippersInput } from "../inputs/OrdersCreateNestedManyWithoutShippersInput";

@TypeGraphQL.InputType("ShippersCreateInput", {
  isAbstract: true
})
export class ShippersCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  CompanyName!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  Phone?: string | undefined;

  @TypeGraphQL.Field(_type => OrdersCreateNestedManyWithoutShippersInput, {
    nullable: true
  })
  Orders?: OrdersCreateNestedManyWithoutShippersInput | undefined;
}
