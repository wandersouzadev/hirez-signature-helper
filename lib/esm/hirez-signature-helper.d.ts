export declare class HirezSignatureHelper {
    private static createTimestamp;
    static createSignature({ devId, authKey, method }: SignatureParams): Signature;
}
interface SignatureParams {
    devId: string;
    authKey: string;
    method: Method;
}
interface Signature {
    md5: string;
    timestamp: string;
}
declare type Method = typeof Methods[number];
declare const Methods: readonly ["ping", "createsession", "testsession", "getdataused", "gethirezserverstatus", "getpatchinfo", "getgods", "getchampions", "getchampioncards", "getgodleaderboard", "getchampionleaderboard", "getgodaltabilities", "getgodskins", "getchampionskins", "getgodrecommendeditems", "getchampionecommendeditems", "getitems", "getbountyitems", "getplayer", "getplayerbatch", "getplayeridbyname", "getplayeridbyportaluserid", "getplayeridsbygamertag", "getplayeridinfoforxboxandswitch", "getfriends", "getgodranks", "getchampionranks", "getplayerloadouts", "getplayerachievements", "getplayerstatus", "getmatchhistory", "getqueuestats", "searchplayers", "getdemodetails", "getmatchdetails", "getmatchdetailsbatch", "getmatchidsbyqueue", "getmatchplayerdetails", "gettopmatches", "getleagueleaderboard", "getleagueseasons", "getteamdetails", "getteammatchhistory", "getteamplayers", "searchteams", "getesportsproleaguedetails", "getmotd"];
export {};
