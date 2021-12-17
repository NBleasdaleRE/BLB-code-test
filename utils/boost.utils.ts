import { Client, GuildMember } from "discord.js"
import { boostObject } from "../models/boostObject"

export class BoostUtils {
        
    public IsSignedElsewhere(client: Client, member: GuildMember, activeBoosts: Map<string, boostObject>) : boolean
    {
        let userId = member.id;

        activeBoosts.forEach(boost => {
            //break after each case if necessary for efficiency
            if(boost.tankQueue.find(member=>member.id == userId)) return true;
            if(boost.healerQueue.find(member=>member.id == userId)) return true;
            if(boost.dpsQueue.find(member=>member.id == userId)) return true;
            
            //... I could do the same for the tank/healer/dps1 etc properties but I don't know if that falls under this use-case
        });

        return false;
    }

    
}

/* NOTES
I don't know what queueing is in this context. I am guessing that's it a m+ object that has people signing (and put in the queue)
before being selected and set as the appropriate property. With this assumption I would guess that I'm searching for a GuildMember
Id in the active boosts map in one of the queue properties. I could be wrong.

This could be optimised by only searching the boost object array that the member is part of. E.g. if they have the m+ tank role,
then only search the active boosts tankQueue. But I would need more insight in how the server is set up.

Alternatively I could change the map to a KVP array and use .find on that to prevent using a foreach, but my times run out.
*/