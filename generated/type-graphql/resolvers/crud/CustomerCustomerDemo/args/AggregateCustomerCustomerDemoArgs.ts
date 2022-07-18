import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CustomerCustomerDemoOrderByWithRelationInput } from "../../../inputs/CustomerCustomerDemoOrderByWithRelationInput";
import { CustomerCustomerDemoWhereInput } from "../../../inputs/CustomerCustomerDemoWhereInput";
import { CustomerCustomerDemoWhereUniqueInput } from "../../../inputs/CustomerCustomerDemoWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateCustomerCustomerDemoArgs {
  @TypeGraphQL.Field(_type => CustomerCustomerDemoWhereInput, {
    nullable: true
  })
  where?: CustomerCustomerDemoWhereInput | undefined;

  @TypeGraphQL.Field(_type => [CustomerCustomerDemoOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: CustomerCustomerDemoOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => CustomerCustomerDemoWhereUniqueInput, {
    nullable: true
  })
  cursor?: CustomerCustomerDemoWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
