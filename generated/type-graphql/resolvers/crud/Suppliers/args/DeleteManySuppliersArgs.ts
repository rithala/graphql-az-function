import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SuppliersWhereInput } from "../../../inputs/SuppliersWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManySuppliersArgs {
  @TypeGraphQL.Field(_type => SuppliersWhereInput, {
    nullable: true
  })
  where?: SuppliersWhereInput | undefined;
}
