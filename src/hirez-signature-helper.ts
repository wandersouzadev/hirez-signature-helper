import { createHash } from 'crypto'

export class HirezSignatureHelper {
    private static createTimestamp(): string {
        const now = new Date()
        const year = now.getUTCFullYear().toString().padStart(2, '0')
        const month = (now.getUTCMonth() + 1).toString().padStart(2, '0')
        const date = now.getUTCDate().toString().padStart(2, '0')
        const hour = now.getUTCHours().toString().padStart(2, '0')
        const minutes = now.getUTCMinutes().toString().padStart(2, '0')
        const seconds = now.getUTCSeconds().toString().padStart(2, '0')
        return year + month + date + hour + minutes + seconds
    }

    static createSignature({
        devId,
        authKey,
        method
    }: SignatureParams): Signature {
        if (!Methods.includes(method)) {
            throw new Error('Unknown method')
        }

        if (devId?.length === 0 || authKey?.length === 0) {
            throw new Error('Missing credentials')
        }

        const timestamp = this.createTimestamp()
        const md5 = createHash('md5')
            .update(devId + method + authKey + timestamp)
            .digest('hex')

        return {
            md5,
            timestamp
        }
    }
}

interface SignatureParams {
    devId: string
    authKey: string
    method: Method
}

interface Signature {
    md5: string
    timestamp: string
}

type Method = typeof Methods[number]

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
] as const
