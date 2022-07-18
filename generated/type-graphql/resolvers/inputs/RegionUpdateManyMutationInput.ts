import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("RegionUpdateManyMutationInput", {
  isAbstract: true
})
export class RegionUpdateManyMutationInput {
  @TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput, {
    nullable: true
  })
  RegionID?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  RegionDescription?: StringFieldUpdateOperationsInput | undefined;
}
