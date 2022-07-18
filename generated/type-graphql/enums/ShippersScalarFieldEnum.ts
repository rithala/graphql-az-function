import * as TypeGraphQL from "type-graphql";

export enum ShippersScalarFieldEnum {
  ShipperID = "ShipperID",
  CompanyName = "CompanyName",
  Phone = "Phone"
}
TypeGraphQL.registerEnumType(ShippersScalarFieldEnum, {
  name: "ShippersScalarFieldEnum",
  description: undefined,
});
