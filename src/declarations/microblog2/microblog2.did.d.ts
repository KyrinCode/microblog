import type { Principal } from '@dfinity/principal';
export interface Message { 'text' : string, 'time' : Time }
export type Time = bigint;
export interface _SERVICE {
  'follow' : (arg_0: Principal) => Promise<undefined>,
  'follows' : () => Promise<Array<Principal>>,
  'post' : (arg_0: string) => Promise<undefined>,
  'posts' : (arg_0: Time) => Promise<Array<Message>>,
  'timeline' : (arg_0: Time) => Promise<Array<Message>>,
}
