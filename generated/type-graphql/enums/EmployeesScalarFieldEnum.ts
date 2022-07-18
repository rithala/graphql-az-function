import * as TypeGraphQL from "type-graphql";

export enum EmployeesScalarFieldEnum {
  EmployeeID = "EmployeeID",
  LastName = "LastName",
  FirstName = "FirstName",
  Title = "Title",
  TitleOfCourtesy = "TitleOfCourtesy",
  BirthDate = "BirthDate",
  HireDate = "HireDate",
  Address = "Address",
  City = "City",
  Region = "Region",
  PostalCode = "PostalCode",
  Country = "Country",
  HomePhone = "HomePhone",
  Extension = "Extension",
  Photo = "Photo",
  Notes = "Notes",
  ReportsTo = "ReportsTo",
  PhotoPath = "PhotoPath"
}
TypeGraphQL.registerEnumType(EmployeesScalarFieldEnum, {
  name: "EmployeesScalarFieldEnum",
  description: undefined,
});
