import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ShippersOrderByWithRelationInput } from "../../../inputs/ShippersOrderByWithRelationInput";
import { ShippersWhereInput } from "../../../inputs/ShippersWhereInput";
import { ShippersWhereUniqueInput } from "../../../inputs/ShippersWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateShippersArgs {
  @TypeGraphQL.Field(_type => ShippersWhereInput, {
    nullable: true
  })
  where?: ShippersWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ShippersOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: ShippersOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => ShippersWhereUniqueInput, {
    nullable: true
  })
  cursor?: ShippersWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
