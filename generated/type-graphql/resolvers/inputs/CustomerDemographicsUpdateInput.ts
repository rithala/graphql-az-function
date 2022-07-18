import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CustomerCustomerDemoUpdateManyWithoutCustomerDemographicsNestedInput } from "../inputs/CustomerCustomerDemoUpdateManyWithoutCustomerDemographicsNestedInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("CustomerDemographicsUpdateInput", {
  isAbstract: true
})
export class CustomerDemographicsUpdateInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  CustomerTypeID?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  CustomerDesc?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => CustomerCustomerDemoUpdateManyWithoutCustomerDemographicsNestedInput, {
    nullable: true
  })
  CustomerCustomerDemo?: CustomerCustomerDemoUpdateManyWithoutCustomerDemographicsNestedInput | undefined;
}
