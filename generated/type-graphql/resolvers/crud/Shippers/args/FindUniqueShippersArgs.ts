import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ShippersWhereUniqueInput } from "../../../inputs/ShippersWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueShippersArgs {
  @TypeGraphQL.Field(_type => ShippersWhereUniqueInput, {
    nullable: false
  })
  where!: ShippersWhereUniqueInput;
}
