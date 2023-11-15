import { Client, Pizza, PizzasVisits } from "./MockDataTypes";

export const clients: Client[] = [{id: 0,firstName: 'John',lastName: 'Doe'},
    {id: 1, firstName: 'Joanne',lastName: 'Doe'},
    {id: 2,firstName: 'Milam',lastName: 'Milhouse'},
    {id: 3,firstName: 'Kelly', lastName: 'Clarkson'},
    {id: 4,firstName: 'Beyonce',lastName: 'Knowles'},
    {id: 5,firstName: 'Taylor',lastName: 'Swift'},
    {id: 6,firstName: 'Nicki',lastName: 'Minaj'},
    {id: 7,firstName: 'John',lastName: 'Elton'},
    {id: 8,firstName: 'Madonna', lastName: 'Smith'},
    {id: 9, firstName: 'Sam', lastName: 'Smith'},]


export let pizzasEaten:PizzasVisits[]=
[
    {visitId:0,clientId:1, pizzasIds:[0], dateEaten:'07/11/2023'},
    {visitId:1,clientId:0, pizzasIds:[1,2], dateEaten:'07/12/2023'},
    {visitId:2,clientId:2, pizzasIds:[0,1], dateEaten:'06/11/2023'},
    {visitId:3,clientId:10, pizzasIds:[1], dateEaten:'11/11/2023'},
    {visitId:4,clientId:5, pizzasIds:[4], dateEaten:'05/11/2022'},
    {visitId:5,clientId:5, pizzasIds:[3], dateEaten:'07/13/2023'},
    {visitId:6,clientId:3, pizzasIds:[2,1], dateEaten:'08/11/2023'},
    {visitId:7,clientId:7, pizzasIds:[0,0], dateEaten:'09/11/2023'},
    {visitId:8,clientId:8, pizzasIds:[1,2], dateEaten:'11/11/2023'},
    {visitId:9,clientId:9, pizzasIds:[1,1], dateEaten:'07/10/2023'},
    {visitId:10,clientId:10, pizzasIds:[2,3], dateEaten:'07/11/2023'},
    {visitId:11,clientId:2, pizzasIds:[3,3], dateEaten:'03/11/2023'},
    {visitId:12,clientId:6, pizzasIds:[0,3], dateEaten:'09/11/2023'},
    {visitId:13,clientId:8, pizzasIds:[1], dateEaten:'01/11/2023'},
    {visitId:14,clientId:10, pizzasIds:[3], dateEaten:'02/11/2023'},
    {visitId:15,clientId:4, pizzasIds:[2], dateEaten:'03/11/2023'},
    {visitId:16,clientId:7, pizzasIds:[4], dateEaten:'04/11/2023'},
    {visitId:17,clientId:7, pizzasIds:[4], dateEaten:'04/11/2023'},
    {visitId:18,clientId:4, pizzasIds:[3,4,1], dateEaten:'05/11/2023'},

]

export const Pizzas:Pizza[]=[{id:0,type:'cheese'},{id:0,type:'pepperoni'},{id:0,type:'pineapple'},{id:0,type:'anchovie'},{id:0,type:'chicken'}]