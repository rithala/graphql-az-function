import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CustomersCreateOrConnectWithoutCustomerCustomerDemoInput } from "../inputs/CustomersCreateOrConnectWithoutCustomerCustomerDemoInput";
import { CustomersCreateWithoutCustomerCustomerDemoInput } from "../inputs/CustomersCreateWithoutCustomerCustomerDemoInput";
import { CustomersWhereUniqueInput } from "../inputs/CustomersWhereUniqueInput";

@TypeGraphQL.InputType("CustomersCreateNestedOneWithoutCustomerCustomerDemoInput", {
  isAbstract: true
})
export class CustomersCreateNestedOneWithoutCustomerCustomerDemoInput {
  @TypeGraphQL.Field(_type => CustomersCreateWithoutCustomerCustomerDemoInput, {
    nullable: true
  })
  create?: CustomersCreateWithoutCustomerCustomerDemoInput | undefined;

  @TypeGraphQL.Field(_type => CustomersCreateOrConnectWithoutCustomerCustomerDemoInput, {
    nullable: true
  })
  connectOrCreate?: CustomersCreateOrConnectWithoutCustomerCustomerDemoInput | undefined;

  @TypeGraphQL.Field(_type => CustomersWhereUniqueInput, {
    nullable: true
  })
  connect?: CustomersWhereUniqueInput | undefined;
}
