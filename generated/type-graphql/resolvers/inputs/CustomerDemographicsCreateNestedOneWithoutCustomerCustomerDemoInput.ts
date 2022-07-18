import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CustomerDemographicsCreateOrConnectWithoutCustomerCustomerDemoInput } from "../inputs/CustomerDemographicsCreateOrConnectWithoutCustomerCustomerDemoInput";
import { CustomerDemographicsCreateWithoutCustomerCustomerDemoInput } from "../inputs/CustomerDemographicsCreateWithoutCustomerCustomerDemoInput";
import { CustomerDemographicsWhereUniqueInput } from "../inputs/CustomerDemographicsWhereUniqueInput";

@TypeGraphQL.InputType("CustomerDemographicsCreateNestedOneWithoutCustomerCustomerDemoInput", {
  isAbstract: true
})
export class CustomerDemographicsCreateNestedOneWithoutCustomerCustomerDemoInput {
  @TypeGraphQL.Field(_type => CustomerDemographicsCreateWithoutCustomerCustomerDemoInput, {
    nullable: true
  })
  create?: CustomerDemographicsCreateWithoutCustomerCustomerDemoInput | undefined;

  @TypeGraphQL.Field(_type => CustomerDemographicsCreateOrConnectWithoutCustomerCustomerDemoInput, {
    nullable: true
  })
  connectOrCreate?: CustomerDemographicsCreateOrConnectWithoutCustomerCustomerDemoInput | undefined;

  @TypeGraphQL.Field(_type => CustomerDemographicsWhereUniqueInput, {
    nullable: true
  })
  connect?: CustomerDemographicsWhereUniqueInput | undefined;
}
