import { clients, pizzasEaten } from "./MockData";
import { Client, PizzasVisits } from "./MockDataTypes";

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
export const addClient=async (client:Client)=>{
    return new Promise((resolve, reject) => {
      if (!client.firstName || !client.lastName) {
        reject(new Error('Not all information provided'));
      }
  
      const newId = clients.length
      const newClient:Client = {...client,id: newId,};
  
      clients.push({ ...clients,...newClient });
  
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

export const addPizzaVisit=async(pizzaVisit:PizzasVisits)=>{
    return new Promise((resolve, reject) => {
     if (!pizzaVisit.pizzasIds || !pizzaVisit.clientId || !pizzaVisit.dateEaten) {
            reject(new Error('Not all information provided'));
          }
        
        const newId = pizzasEaten.length
        const newPizzaVisit:PizzasVisits = {...pizzaVisit,visitId: newId,};
      
        pizzasEaten.push({ ...pizzasEaten,...newPizzaVisit });
      
        setTimeout(() => resolve(true), 250);
        
      });
}