import Globals from '../constants/Globals';


export default class VegardenDAO {
 private static instance: VegardenDAO = new VegardenDAO();
 
 
 private constructor(){}

 public static getInstance(): VegardenDAO {
     return this.instance;
 }

 async loadPlants(): Promise<Response> {
     return await fetch(Globals.SETTINGS.API_URL + '/plant/all' {
         method:'GET',
     })
 }

 async searchPlantWithName(plantName: string): Promise<Response | null> {
     return await fetch(Globals.SETTINGS.API_URL + '/plant/' + plantName, {
         method: 'GET',
     })
 }


 async getPlantForCountry(countryName: string): Promise<Response | null> {
     return await fetch(Globals.SETTINGS.API_URL + '/plant/country/' + countryName, {
         method: 'GET',
     })
 }

}

