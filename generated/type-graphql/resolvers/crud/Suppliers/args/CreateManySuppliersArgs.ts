import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SuppliersCreateManyInput } from "../../../inputs/SuppliersCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManySuppliersArgs {
  @TypeGraphQL.Field(_type => [SuppliersCreateManyInput], {
    nullable: false
  })
  data!: SuppliersCreateManyInput[];
}
