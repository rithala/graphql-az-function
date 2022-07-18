import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EmployeeTerritoriesOrderByWithRelationInput } from "../../../inputs/EmployeeTerritoriesOrderByWithRelationInput";
import { EmployeeTerritoriesWhereInput } from "../../../inputs/EmployeeTerritoriesWhereInput";
import { EmployeeTerritoriesWhereUniqueInput } from "../../../inputs/EmployeeTerritoriesWhereUniqueInput";
import { EmployeeTerritoriesScalarFieldEnum } from "../../../../enums/EmployeeTerritoriesScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindManyEmployeeTerritoriesArgs {
  @TypeGraphQL.Field(_type => EmployeeTerritoriesWhereInput, {
    nullable: true
  })
  where?: EmployeeTerritoriesWhereInput | undefined;

  @TypeGraphQL.Field(_type => [EmployeeTerritoriesOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: EmployeeTerritoriesOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => EmployeeTerritoriesWhereUniqueInput, {
    nullable: true
  })
  cursor?: EmployeeTerritoriesWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [EmployeeTerritoriesScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"EmployeeID" | "TerritoryID"> | undefined;
}
