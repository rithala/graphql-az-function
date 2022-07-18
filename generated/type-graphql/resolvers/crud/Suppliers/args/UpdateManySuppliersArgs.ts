import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SuppliersUpdateManyMutationInput } from "../../../inputs/SuppliersUpdateManyMutationInput";
import { SuppliersWhereInput } from "../../../inputs/SuppliersWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManySuppliersArgs {
  @TypeGraphQL.Field(_type => SuppliersUpdateManyMutationInput, {
    nullable: false
  })
  data!: SuppliersUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => SuppliersWhereInput, {
    nullable: true
  })
  where?: SuppliersWhereInput | undefined;
}
