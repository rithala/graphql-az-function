import * as TypeGraphQL from "type-graphql";

export enum CategoriesScalarFieldEnum {
  CategoryID = "CategoryID",
  CategoryName = "CategoryName",
  Description = "Description",
  Picture = "Picture"
}
TypeGraphQL.registerEnumType(CategoriesScalarFieldEnum, {
  name: "CategoriesScalarFieldEnum",
  description: undefined,
});
