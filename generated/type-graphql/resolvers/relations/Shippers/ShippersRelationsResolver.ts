import * as TypeGraphQL from "type-graphql";
import { Orders } from "../../../models/Orders";
import { Shippers } from "../../../models/Shippers";
import { ShippersOrdersArgs } from "./args/ShippersOrdersArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Shippers)
export class ShippersRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [Orders], {
    nullable: false
  })
  async Orders(@TypeGraphQL.Root() shippers: Shippers, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: ShippersOrdersArgs): Promise<Orders[]> {
    return getPrismaFromContext(ctx).shippers.findUnique({
      where: {
        ShipperID: shippers.ShipperID,
      },
    }).Orders(args);
  }
}
