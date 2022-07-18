import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ShippersUpdateInput } from "../../../inputs/ShippersUpdateInput";
import { ShippersWhereUniqueInput } from "../../../inputs/ShippersWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneShippersArgs {
  @TypeGraphQL.Field(_type => ShippersUpdateInput, {
    nullable: false
  })
  data!: ShippersUpdateInput;

  @TypeGraphQL.Field(_type => ShippersWhereUniqueInput, {
    nullable: false
  })
  where!: ShippersWhereUniqueInput;
}
