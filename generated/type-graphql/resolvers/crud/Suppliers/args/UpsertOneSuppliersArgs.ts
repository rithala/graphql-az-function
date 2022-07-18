import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SuppliersCreateInput } from "../../../inputs/SuppliersCreateInput";
import { SuppliersUpdateInput } from "../../../inputs/SuppliersUpdateInput";
import { SuppliersWhereUniqueInput } from "../../../inputs/SuppliersWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneSuppliersArgs {
  @TypeGraphQL.Field(_type => SuppliersWhereUniqueInput, {
    nullable: false
  })
  where!: SuppliersWhereUniqueInput;

  @TypeGraphQL.Field(_type => SuppliersCreateInput, {
    nullable: false
  })
  create!: SuppliersCreateInput;

  @TypeGraphQL.Field(_type => SuppliersUpdateInput, {
    nullable: false
  })
  update!: SuppliersUpdateInput;
}
