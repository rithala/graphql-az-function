import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Order_DetailsCreateInput } from "../../../inputs/Order_DetailsCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneOrder_DetailsArgs {
  @TypeGraphQL.Field(_type => Order_DetailsCreateInput, {
    nullable: false
  })
  data!: Order_DetailsCreateInput;
}
