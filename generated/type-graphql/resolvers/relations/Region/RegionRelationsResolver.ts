import * as TypeGraphQL from "type-graphql";
import { Region } from "../../../models/Region";
import { Territories } from "../../../models/Territories";
import { RegionTerritoriesArgs } from "./args/RegionTerritoriesArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Region)
export class RegionRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [Territories], {
    nullable: false
  })
  async Territories(@TypeGraphQL.Root() region: Region, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: RegionTerritoriesArgs): Promise<Territories[]> {
    return getPrismaFromContext(ctx).region.findUnique({
      where: {
        RegionID: region.RegionID,
      },
    }).Territories(args);
  }
}
