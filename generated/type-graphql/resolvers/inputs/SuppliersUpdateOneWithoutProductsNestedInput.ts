import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SuppliersCreateOrConnectWithoutProductsInput } from "../inputs/SuppliersCreateOrConnectWithoutProductsInput";
import { SuppliersCreateWithoutProductsInput } from "../inputs/SuppliersCreateWithoutProductsInput";
import { SuppliersUpdateWithoutProductsInput } from "../inputs/SuppliersUpdateWithoutProductsInput";
import { SuppliersUpsertWithoutProductsInput } from "../inputs/SuppliersUpsertWithoutProductsInput";
import { SuppliersWhereUniqueInput } from "../inputs/SuppliersWhereUniqueInput";

@TypeGraphQL.InputType("SuppliersUpdateOneWithoutProductsNestedInput", {
  isAbstract: true
})
export class SuppliersUpdateOneWithoutProductsNestedInput {
  @TypeGraphQL.Field(_type => SuppliersCreateWithoutProductsInput, {
    nullable: true
  })
  create?: SuppliersCreateWithoutProductsInput | undefined;

  @TypeGraphQL.Field(_type => SuppliersCreateOrConnectWithoutProductsInput, {
    nullable: true
  })
  connectOrCreate?: SuppliersCreateOrConnectWithoutProductsInput | undefined;

  @TypeGraphQL.Field(_type => SuppliersUpsertWithoutProductsInput, {
    nullable: true
  })
  upsert?: SuppliersUpsertWithoutProductsInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => SuppliersWhereUniqueInput, {
    nullable: true
  })
  connect?: SuppliersWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => SuppliersUpdateWithoutProductsInput, {
    nullable: true
  })
  update?: SuppliersUpdateWithoutProductsInput | undefined;
}
