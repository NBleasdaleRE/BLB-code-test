import { Client } from "discord.js";

export class RoleUtils {    

    public DoesUserHaveRoleWithId(client: Client, roleId: string, userId: string): boolean {

        let guild = client.guilds.cache.first();
        if(!guild) return false;

        let user = guild.members.cache.find(user => user.id == userId);
        if(!user) return false;

        if(user.roles.cache.find(x=>x.id == roleId)) return true;

        return false;
    }

    public DoesUserHaveRoleWithName(client: Client, roleName: string, userId: string): boolean {

        let guild = client.guilds.cache.first();
        if(!guild) return false;

        let user = guild.members.cache.find(user => user.id == userId);
        if(!user) return false;
                
        if(user.roles.cache.find(x=>x.name == roleName)) return true;

        return false;
    }
}

/* NOTES
Its not specified what user this check is dealing with. I'm assuming it should be passed as a parameter to this method to keep the 
utils classes acting as statically as possible.

I'm also assuming that this bot is running on only one discord server (and therefore one guild). Otherwise I would need an additional
identifier to find out which server we're dealing with as the user could be part of both with different roles. (L7)

I'd need to understand more about the caching. If its rare then this method could return true from an outdated cache and
not reflect the most up-to-date data. If that is the case, then I would force an api fetch each time. E.g something like: 

guild.members.fetch(userId).then(user => {
            //do something with user
        });

I tend to use pascal casing for public properties/methods
*/

