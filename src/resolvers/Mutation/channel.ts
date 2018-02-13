import { getUserId, Context } from "../../utils";

export const channel = {
  async createChannel(parent, args, ctx: Context, info) {
    console.log(args);
    const userId = getUserId(ctx);
    // console.log(data);
    console.log("creating channel");
    return ctx.db.mutation.createChannel(
      {
        data: {
          ...args,
          owner: {
            connect: { id: userId }
          }
        }
      },
      info
    );
  }
};