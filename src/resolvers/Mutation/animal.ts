import { getUserId, Context } from "../../utils";

export const animal = {
  async createAnimal(parent, args, ctx: Context, info) {
    return ctx.db.mutation.createAnimal({ data: args }, info);
  }
};
