import { Query } from "./Query";
import { auth } from "./Mutation/auth";
import { post } from "./Mutation/post";
import { animal } from "./Mutation/animal";
import { channel } from "./Mutation/channel";
import { AuthPayload } from "./AuthPayload";

export default {
  Query,
  Mutation: {
    ...auth,
    ...post,
    ...animal,
    ...channel
  },
  AuthPayload
};
