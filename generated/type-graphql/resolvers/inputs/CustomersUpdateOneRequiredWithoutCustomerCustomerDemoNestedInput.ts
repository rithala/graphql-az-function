import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CustomersCreateOrConnectWithoutCustomerCustomerDemoInput } from "../inputs/CustomersCreateOrConnectWithoutCustomerCustomerDemoInput";
import { CustomersCreateWithoutCustomerCustomerDemoInput } from "../inputs/CustomersCreateWithoutCustomerCustomerDemoInput";
import { CustomersUpdateWithoutCustomerCustomerDemoInput } from "../inputs/CustomersUpdateWithoutCustomerCustomerDemoInput";
import { CustomersUpsertWithoutCustomerCustomerDemoInput } from "../inputs/CustomersUpsertWithoutCustomerCustomerDemoInput";
import { CustomersWhereUniqueInput } from "../inputs/CustomersWhereUniqueInput";

@TypeGraphQL.InputType("CustomersUpdateOneRequiredWithoutCustomerCustomerDemoNestedInput", {
  isAbstract: true
})
export class CustomersUpdateOneRequiredWithoutCustomerCustomerDemoNestedInput {
  @TypeGraphQL.Field(_type => CustomersCreateWithoutCustomerCustomerDemoInput, {
    nullable: true
  })
  create?: CustomersCreateWithoutCustomerCustomerDemoInput | undefined;

  @TypeGraphQL.Field(_type => CustomersCreateOrConnectWithoutCustomerCustomerDemoInput, {
    nullable: true
  })
  connectOrCreate?: CustomersCreateOrConnectWithoutCustomerCustomerDemoInput | undefined;

  @TypeGraphQL.Field(_type => CustomersUpsertWithoutCustomerCustomerDemoInput, {
    nullable: true
  })
  upsert?: CustomersUpsertWithoutCustomerCustomerDemoInput | undefined;

  @TypeGraphQL.Field(_type => CustomersWhereUniqueInput, {
    nullable: true
  })
  connect?: CustomersWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => CustomersUpdateWithoutCustomerCustomerDemoInput, {
    nullable: true
  })
  update?: CustomersUpdateWithoutCustomerCustomerDemoInput | undefined;
}
