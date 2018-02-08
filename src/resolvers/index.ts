import { Query } from "./Query";
import { auth } from "./Mutation/auth";
import { post } from "./Mutation/post";
import { animal } from "./Mutation/animal";
import { AuthPayload } from "./AuthPayload";

export default {
  Query,
  Mutation: {
    ...auth,
    ...post,
    ...animal
  },
  AuthPayload
};
