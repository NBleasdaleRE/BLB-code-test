import { GuildMember } from "discord.js";

export interface boostObject {
    tankQueue: GuildMember[];
    healerQueue: GuildMember[];
    dpsQueue: GuildMember[];
    keyholderQueue?: GuildMember[];
    tank: GuildMember;
    healer: GuildMember;
    dps1: GuildMember;
    dps2: GuildMember;
    keyholder?: GuildMember;
  }