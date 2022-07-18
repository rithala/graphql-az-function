import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Products } from "../models/Products";
import { SuppliersCount } from "../resolvers/outputs/SuppliersCount";

@TypeGraphQL.ObjectType("Suppliers", {
  isAbstract: true
})
export class Suppliers {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  SupplierID!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  CompanyName!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  ContactName?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  ContactTitle?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  Address?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  City?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  Region?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  PostalCode?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  Country?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  Phone?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  Fax?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  HomePage?: string | null;

  Products?: Products[];

  @TypeGraphQL.Field(_type => SuppliersCount, {
    nullable: true
  })
  _count?: SuppliersCount | null;
}
