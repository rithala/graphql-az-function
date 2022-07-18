import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ShippersCreateManyInput } from "../../../inputs/ShippersCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyShippersArgs {
  @TypeGraphQL.Field(_type => [ShippersCreateManyInput], {
    nullable: false
  })
  data!: ShippersCreateManyInput[];
}
