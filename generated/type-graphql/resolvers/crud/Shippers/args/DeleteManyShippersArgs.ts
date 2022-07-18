import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ShippersWhereInput } from "../../../inputs/ShippersWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyShippersArgs {
  @TypeGraphQL.Field(_type => ShippersWhereInput, {
    nullable: true
  })
  where?: ShippersWhereInput | undefined;
}
