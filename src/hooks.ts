import path from 'path';
import { promises as fs } from 'fs';

/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ event, resolve }) {
  if (event.url.pathname.startsWith('/api')) {
    const jsonDirectory = path.join(process.cwd(), 'words');
    const fileContents = await fs.readFile(jsonDirectory + '/'+getCurrentDate()+'.json', 'utf8');
    const objectData = JSON.parse(fileContents);
    return new Response(JSON.stringify(objectData));
  }
  const response = await resolve(event);
  return response;
}

export function getCurrentDate(separator=''){
  var dt = new Date();
  const myTimeZone = 4; // Baku Timezone
  dt.setTime( dt.getTime() + myTimeZone * 60 * 60 * 1000 );

  var year  = dt.getFullYear();
  var month = (dt.getMonth() + 1).toString().padStart(2, "0");
  var day   = dt.getDate().toString().padStart(2, "0");    
  return year + '' + month + '' + day;
}

