import { server } from "../src/server"
import Prisma from "../src/db";
import { Entry } from "@prisma/client";

let app: any;

beforeAll(async () => {
  app = await server.ready();
});

afterAll(async () => {
  await server.close();
});

// test to see if all entries have all the necessary fields
// test to see if all the fields are of the righ type


test('Check that the database IDs are all unique', async () =>{

  try{
    const response = await app.inject({
      method: 'GET',
      url: '/get/',
    })
  
    const entries: Entry[] = JSON.parse(response.body);

    expect(Array.isArray(entries)).toBeTruthy();

    const allIds: String[] = entries.map((entry: any) => entry.id);
  
    const uniqueIds = new Set(allIds);
  
    expect(uniqueIds.size).toBe(allIds.length);
  }catch(err){
    expect(err).toBeUndefined();
  }

})


test('Check that all fields are of the right type', async () => {

  try{
    const response = await app.inject({
      method: 'GET',
      url: '/get/',
    })
  
    const entries: Entry[] = JSON.parse(response.body);

    expect(Array.isArray(entries)).toBeTruthy();

    entries.forEach((entry) => {

      expect(typeof entry.id).toBe('string');
      expect(typeof entry.title).toBe('string');
      expect(typeof entry.description).toBe('string');

     //Checking if the string is a valid ISO date by attempting to parse it
      if (typeof entry.scheduled_date === 'string') {
        expect(!isNaN(Date.parse(entry.scheduled_date))).toBeTruthy(); 
      }
      if (typeof entry.created_at === 'string') {
        expect(!isNaN(Date.parse(entry.created_at))).toBeTruthy(); 
      }
    })
    
  }catch(err){
    expect(err).toBeUndefined();
  }

})

