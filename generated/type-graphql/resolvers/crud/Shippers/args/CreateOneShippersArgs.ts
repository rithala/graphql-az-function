import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ShippersCreateInput } from "../../../inputs/ShippersCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneShippersArgs {
  @TypeGraphQL.Field(_type => ShippersCreateInput, {
    nullable: false
  })
  data!: ShippersCreateInput;
}
