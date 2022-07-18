import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Order_DetailsCreateManyOrdersInput } from "../inputs/Order_DetailsCreateManyOrdersInput";

@TypeGraphQL.InputType("Order_DetailsCreateManyOrdersInputEnvelope", {
  isAbstract: true
})
export class Order_DetailsCreateManyOrdersInputEnvelope {
  @TypeGraphQL.Field(_type => [Order_DetailsCreateManyOrdersInput], {
    nullable: false
  })
  data!: Order_DetailsCreateManyOrdersInput[];
}
