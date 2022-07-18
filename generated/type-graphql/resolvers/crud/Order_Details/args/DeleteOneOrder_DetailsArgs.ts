import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Order_DetailsWhereUniqueInput } from "../../../inputs/Order_DetailsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOneOrder_DetailsArgs {
  @TypeGraphQL.Field(_type => Order_DetailsWhereUniqueInput, {
    nullable: false
  })
  where!: Order_DetailsWhereUniqueInput;
}
