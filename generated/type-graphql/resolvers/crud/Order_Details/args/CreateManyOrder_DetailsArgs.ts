import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Order_DetailsCreateManyInput } from "../../../inputs/Order_DetailsCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyOrder_DetailsArgs {
  @TypeGraphQL.Field(_type => [Order_DetailsCreateManyInput], {
    nullable: false
  })
  data!: Order_DetailsCreateManyInput[];
}
