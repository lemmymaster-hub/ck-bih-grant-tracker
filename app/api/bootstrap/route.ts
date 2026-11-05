import {bootstrap,apiError} from '../../../lib/tracker';
export async function POST(){try{return Response.json(await bootstrap())}catch(e){return apiError(e)}}
