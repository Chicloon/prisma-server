import { getUserId, Context } from "../../utils";

export const channel = {
  async createChannel(parent, args, ctx: Context, info) {
    console.log(args);
    const userId = getUserId(ctx);

    // console.log(data);
    console.log("creating channel");
    const channel = await ctx.db.mutation.createChannel(
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
    console.log(channel);
    await ctx.db.mutation.createChannelMember({
      data: {
        name: {
          connect: { id: userId }
        },
        channel: {
          connect: { id: channel.id }
        },
        role: "admin"
      }
    });
    return channel;
  }
};
