import {research,apiError} from '../../../lib/tracker';
export async function POST(req:Request){try{return Response.json(await research(await req.json()))}catch(e){return apiError(e)}}
