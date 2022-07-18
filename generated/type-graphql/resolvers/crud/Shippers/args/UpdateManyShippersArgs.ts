import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ShippersUpdateManyMutationInput } from "../../../inputs/ShippersUpdateManyMutationInput";
import { ShippersWhereInput } from "../../../inputs/ShippersWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyShippersArgs {
  @TypeGraphQL.Field(_type => ShippersUpdateManyMutationInput, {
    nullable: false
  })
  data!: ShippersUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => ShippersWhereInput, {
    nullable: true
  })
  where?: ShippersWhereInput | undefined;
}
