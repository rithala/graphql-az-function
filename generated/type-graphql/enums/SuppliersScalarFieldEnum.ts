import * as TypeGraphQL from "type-graphql";

export enum SuppliersScalarFieldEnum {
  SupplierID = "SupplierID",
  CompanyName = "CompanyName",
  ContactName = "ContactName",
  ContactTitle = "ContactTitle",
  Address = "Address",
  City = "City",
  Region = "Region",
  PostalCode = "PostalCode",
  Country = "Country",
  Phone = "Phone",
  Fax = "Fax",
  HomePage = "HomePage"
}
TypeGraphQL.registerEnumType(SuppliersScalarFieldEnum, {
  name: "SuppliersScalarFieldEnum",
  description: undefined,
});
