import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SuppliersCreateInput } from "../../../inputs/SuppliersCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneSuppliersArgs {
  @TypeGraphQL.Field(_type => SuppliersCreateInput, {
    nullable: false
  })
  data!: SuppliersCreateInput;
}
