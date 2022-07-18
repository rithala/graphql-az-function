import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SuppliersWhereUniqueInput } from "../../../inputs/SuppliersWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueSuppliersArgs {
  @TypeGraphQL.Field(_type => SuppliersWhereUniqueInput, {
    nullable: false
  })
  where!: SuppliersWhereUniqueInput;
}
