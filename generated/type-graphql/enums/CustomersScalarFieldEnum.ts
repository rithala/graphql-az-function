import * as TypeGraphQL from "type-graphql";

export enum CustomersScalarFieldEnum {
  CustomerID = "CustomerID",
  CompanyName = "CompanyName",
  ContactName = "ContactName",
  ContactTitle = "ContactTitle",
  Address = "Address",
  City = "City",
  Region = "Region",
  PostalCode = "PostalCode",
  Country = "Country",
  Phone = "Phone",
  Fax = "Fax"
}
TypeGraphQL.registerEnumType(CustomersScalarFieldEnum, {
  name: "CustomersScalarFieldEnum",
  description: undefined,
});
