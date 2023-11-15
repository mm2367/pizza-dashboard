import { clients, pizzasEaten } from "./MockData";
import { Client, PizzasVisits, RawDateString } from "./MockDataTypes";

export const getAllClients = async ():Promise<Client[]> =>{
   return new Promise((resolve, reject) => {
        if (!clients) {
          return setTimeout(
            () => reject(new Error('No Clients Found')),
            250
          );
        }
    
        setTimeout(() => resolve(clients), 250);
      });
}
export const getClient= async (userID:number)=>{
   return new Promise((resolve, reject) => {
        const user = clients[userID];
    
        if (!user) {
          return setTimeout(
            () => reject(new Error('User not found')),
            250
          );
        }
    
        setTimeout(() => resolve(clients[userID]), 250);
      });
}
export const addClient=async (client:{firstName:string,lastName:string})=>{
    return new Promise((resolve, reject) => {
      if (!client.firstName || !client.lastName) {
        reject(new Error('Not all information provided'));
      }
  
      const newId = clients.length
      const newClient:Client = {...client,id: newId};
      clients.push({...newClient});
      setTimeout(() => resolve(true), 250);
    });
}
export const getPizzaVisits=async (): Promise<PizzasVisits[]>=>{
    return new Promise((resolve, reject) => {
        if (!pizzasEaten) {
          reject(new Error('Users not found'));
        }
        resolve(Object.values(pizzasEaten));
      });
}

export const getPizzaVisit=async (visitID:number)=>{
   return new Promise((resolve, reject) => {
        const pizzaVisit = pizzasEaten[visitID];
    
        if (!pizzaVisit) {
          return setTimeout(
            () => reject(new Error('User not found')),
            250
          );
        }
    
        setTimeout(() => resolve(pizzaVisit[visitID]), 250);
      });
}

export const addPizzaVisit= async(clientVisit:{pizzaIds:number[],clientID:number,dateEaten:RawDateString})=>{
    return new Promise((resolve, reject) => {
     if (clientVisit.pizzaIds || !clientVisit.clientID || !clientVisit.dateEaten) {
            reject(new Error('Not all information provided'));
          }
        
        const newId = pizzasEaten.length
        const newPizzaVisit:PizzasVisits = {pizzasIds:clientVisit.pizzaIds,clientId:clientVisit.clientID,dateEaten:clientVisit.dateEaten,visitId: newId};
      
        pizzasEaten.push({ ...pizzasEaten,...newPizzaVisit });
      
        setTimeout(() => resolve(true), 250);
        
      });
}