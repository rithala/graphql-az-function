import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Order_DetailsWhereInput } from "../../../inputs/Order_DetailsWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyOrder_DetailsArgs {
  @TypeGraphQL.Field(_type => Order_DetailsWhereInput, {
    nullable: true
  })
  where?: Order_DetailsWhereInput | undefined;
}
