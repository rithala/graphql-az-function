import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ShippersCreateInput } from "../../../inputs/ShippersCreateInput";
import { ShippersUpdateInput } from "../../../inputs/ShippersUpdateInput";
import { ShippersWhereUniqueInput } from "../../../inputs/ShippersWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneShippersArgs {
  @TypeGraphQL.Field(_type => ShippersWhereUniqueInput, {
    nullable: false
  })
  where!: ShippersWhereUniqueInput;

  @TypeGraphQL.Field(_type => ShippersCreateInput, {
    nullable: false
  })
  create!: ShippersCreateInput;

  @TypeGraphQL.Field(_type => ShippersUpdateInput, {
    nullable: false
  })
  update!: ShippersUpdateInput;
}
