import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CustomerDemographicsCreateOrConnectWithoutCustomerCustomerDemoInput } from "../inputs/CustomerDemographicsCreateOrConnectWithoutCustomerCustomerDemoInput";
import { CustomerDemographicsCreateWithoutCustomerCustomerDemoInput } from "../inputs/CustomerDemographicsCreateWithoutCustomerCustomerDemoInput";
import { CustomerDemographicsUpdateWithoutCustomerCustomerDemoInput } from "../inputs/CustomerDemographicsUpdateWithoutCustomerCustomerDemoInput";
import { CustomerDemographicsUpsertWithoutCustomerCustomerDemoInput } from "../inputs/CustomerDemographicsUpsertWithoutCustomerCustomerDemoInput";
import { CustomerDemographicsWhereUniqueInput } from "../inputs/CustomerDemographicsWhereUniqueInput";

@TypeGraphQL.InputType("CustomerDemographicsUpdateOneRequiredWithoutCustomerCustomerDemoNestedInput", {
  isAbstract: true
})
export class CustomerDemographicsUpdateOneRequiredWithoutCustomerCustomerDemoNestedInput {
  @TypeGraphQL.Field(_type => CustomerDemographicsCreateWithoutCustomerCustomerDemoInput, {
    nullable: true
  })
  create?: CustomerDemographicsCreateWithoutCustomerCustomerDemoInput | undefined;

  @TypeGraphQL.Field(_type => CustomerDemographicsCreateOrConnectWithoutCustomerCustomerDemoInput, {
    nullable: true
  })
  connectOrCreate?: CustomerDemographicsCreateOrConnectWithoutCustomerCustomerDemoInput | undefined;

  @TypeGraphQL.Field(_type => CustomerDemographicsUpsertWithoutCustomerCustomerDemoInput, {
    nullable: true
  })
  upsert?: CustomerDemographicsUpsertWithoutCustomerCustomerDemoInput | undefined;

  @TypeGraphQL.Field(_type => CustomerDemographicsWhereUniqueInput, {
    nullable: true
  })
  connect?: CustomerDemographicsWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => CustomerDemographicsUpdateWithoutCustomerCustomerDemoInput, {
    nullable: true
  })
  update?: CustomerDemographicsUpdateWithoutCustomerCustomerDemoInput | undefined;
}
