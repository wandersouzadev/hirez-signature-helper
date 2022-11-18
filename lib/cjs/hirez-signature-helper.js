"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HirezSignatureHelper = void 0;
const crypto_1 = require("crypto");
class HirezSignatureHelper {
    static createTimestamp() {
        const now = new Date();
        const year = now.getUTCFullYear().toString().padStart(2, '0');
        const month = (now.getUTCMonth() + 1).toString().padStart(2, '0');
        const date = now.getUTCDate().toString().padStart(2, '0');
        const hour = now.getUTCHours().toString().padStart(2, '0');
        const minutes = now.getUTCMinutes().toString().padStart(2, '0');
        const seconds = now.getUTCSeconds().toString().padStart(2, '0');
        return year + month + date + hour + minutes + seconds;
    }
    static createSignature({ devId, authKey, method }) {
        if (!Methods.includes(method)) {
            throw new Error('Unknown method');
        }
        if ((devId === null || devId === void 0 ? void 0 : devId.length) === 0 || (authKey === null || authKey === void 0 ? void 0 : authKey.length) === 0) {
            throw new Error('Missing credentials');
        }
        const timestamp = this.createTimestamp();
        const md5 = (0, crypto_1.createHash)('md5')
            .update(devId + method + authKey + timestamp)
            .digest('hex');
        return {
            md5,
            timestamp
        };
    }
}
exports.HirezSignatureHelper = HirezSignatureHelper;
const Methods = [
    // Connectivity, Development, & System Status //
    'ping',
    'createsession',
    'testsession',
    'getdataused',
    'gethirezserverstatus',
    'getpatchinfo',
    // Gods/Champions & Items //
    'getgods',
    'getchampions',
    'getchampioncards',
    'getgodleaderboard',
    'getchampionleaderboard',
    'getgodaltabilities',
    'getgodskins',
    'getchampionskins',
    'getgodrecommendeditems',
    'getchampionecommendeditems',
    'getitems',
    'getbountyitems',
    // Players & PlayerIds //
    'getplayer',
    'getplayerbatch',
    'getplayeridbyname',
    'getplayeridbyportaluserid',
    'getplayeridsbygamertag',
    'getplayeridinfoforxboxandswitch',
    // PlayerId Info //
    'getfriends',
    'getgodranks',
    'getchampionranks',
    'getplayerloadouts',
    'getplayerachievements',
    'getplayerstatus',
    'getmatchhistory',
    'getqueuestats',
    'searchplayers',
    // Match Info //
    'getdemodetails',
    'getmatchdetails',
    'getmatchdetailsbatch',
    'getmatchidsbyqueue',
    'getmatchplayerdetails',
    'gettopmatches',
    // Leagues, Seasons & Rounds //
    'getleagueleaderboard',
    'getleagueseasons',
    // Team Info //
    'getteamdetails',
    'getteammatchhistory',
    'getteamplayers',
    'searchteams',
    // Other //
    'getesportsproleaguedetails',
    'getmotd'
];
//# sourceMappingURL=hirez-signature-helper.js.map