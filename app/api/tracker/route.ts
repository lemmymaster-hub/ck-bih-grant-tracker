import {listing,userSave,userPatch,apiError} from '../../../lib/tracker';
export async function GET(){try{return Response.json(await listing(),{headers:{'Cache-Control':'no-store'}});}catch(e){return apiError(e)}}
export async function POST(req:Request){try{return Response.json(await userSave(await req.json()))}catch(e){return apiError(e)}}
export async function PATCH(req:Request){try{const b:any=await req.json();return Response.json(await userPatch(b.id,b))}catch(e){return apiError(e)}}
