import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SuppliersUpdateInput } from "../../../inputs/SuppliersUpdateInput";
import { SuppliersWhereUniqueInput } from "../../../inputs/SuppliersWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneSuppliersArgs {
  @TypeGraphQL.Field(_type => SuppliersUpdateInput, {
    nullable: false
  })
  data!: SuppliersUpdateInput;

  @TypeGraphQL.Field(_type => SuppliersWhereUniqueInput, {
    nullable: false
  })
  where!: SuppliersWhereUniqueInput;
}
