import type { PartialTypes } from 'discord.js';
import { Intents } from 'discord.js';
import { config } from 'dotenv';
import { join as pathJoin } from 'path';

config({ path: pathJoin(__dirname, '../../.env') });

export const expressPort: number = +(process.env.EXPRESS_PORT as string) || 3000;

export const token: string = process.env.TOKEN || 'abcd';
export const guildId: string = process.env.GUILDID || 'abcd';
export const clientId: string = process.env.CLIENTID || 'abcd';
export const intents: number[] = [
  Intents.FLAGS.GUILDS,
  Intents.FLAGS.GUILD_MEMBERS,
  Intents.FLAGS.GUILD_MESSAGES,
  Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
  Intents.FLAGS.GUILD_PRESENCES,
  Intents.FLAGS.GUILD_EMOJIS_AND_STICKERS,
  Intents.FLAGS.GUILD_VOICE_STATES,
  Intents.FLAGS.DIRECT_MESSAGES,
  Intents.FLAGS.DIRECT_MESSAGE_REACTIONS,
  Intents.FLAGS.DIRECT_MESSAGE_TYPING,
];
export const partials: PartialTypes[] = ['MESSAGE', 'CHANNEL', 'REACTION'];
export const prefix = '.';
export const activities: readonly string[] = ['poggers'].map((s) => `${s} | ${prefix}help`);

export const author = {
  name: 'BasedBot',
  url: 'https://github.com/segfault0x61/based-bot',
} as const;

export const footer = {
  text: 'BasedBot',
} as const;

export const admins: Readonly<Set<string>> = new Set(['121102334804623360']);

export type Config = {
  token: string;
  guildId: string;
  clientId: string;
  intents: number[];
  prefix: string;
};
