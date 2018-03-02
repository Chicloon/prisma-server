import { getUserId, Context } from "../utils";

export const Query = {
  channels(parent, { id }, ctx: Context, info) {
    const id = getUserId(ctx);

    return ctx.db.query.channels({}, info);
  },
  user(parent, { id }, ctx: Context, info) {
    return ctx.db.query.user({ where: { id } }, info);
  },
  feed(parent, args, ctx: Context, info) {
    return ctx.db.query.posts({ where: { isPublished: true } }, info);
  },

  drafts(parent, args, ctx: Context, info) {
    const id = getUserId(ctx);

    const where = {
      isPublished: false,
      author: {
        id
      }
    };

    return ctx.db.query.posts({ where }, info);
  },

  post(parent, { id }, ctx: Context, info) {
    return ctx.db.query.post({ where: { id: id } }, info);
  },

  me(parent, args, ctx: Context, info) {
    const id = getUserId(ctx);
    console.log("============ id", id);
    return ctx.db.query.user({ where: { id } }, info);
  },

  animals(parent, args, ctx: Context, info) {
    return ctx.db.query.animals({}, info);
  }
};
