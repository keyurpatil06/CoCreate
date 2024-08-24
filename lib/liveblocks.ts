// import { Liveblocks } from "@liveblocks/node";
import {Liveblocks} from '@lex'

export const liveblocks = new Liveblocks({
  secret: process.env.LIVEBLOCKS_SECRET_KEY as string,
});