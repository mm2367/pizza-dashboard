
import React, {useState } from "react"
import Select from "react-select"
import {addPizzaVisit, getAllClients } from "../api/api";
import {convertToDateString} from "../util"

import { RawDateString } from "../api/MockDataTypes";
export interface AddPizzaProps{
    clientIds:{value:number,label:string}[];
    handleAddPersonSubmit:(pizzaVisit:{clientId:number,pizzasIds:number[], dateEaten:RawDateString})=> void;
}
export const AddPizza=(props:AddPizzaProps)=>{
    const [selectedClientId,setSelectedClientId]=useState<number|undefined>();
    const [selectedToppings,setSelectedToppings]=useState<number[]>();
    const [selectedDate,setSelectedDate]=useState<string>("");
    const pizzaOptions=[{value:'cheese',label:'Cheese'}, {value:'pepperoni', label:'Pepperoni'},{value:'pineapple', label:'Pineapple'},{ value:'anchovie', label:'Anchovie'},{value:'chicken',label:'Chicken'}]
    const handleToppingSelection=(toppings)=>{
        let selections= toppings.map((topping)=>{
            //@ts-ignore
            return topping.value
        })
        setSelectedToppings(selections);
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        if(selectedClientId!==undefined && selectedToppings && selectedDate ){
            props.handleAddPersonSubmit({clientId:selectedClientId,pizzasIds:selectedToppings, dateEaten:convertToDateString(selectedDate)});
        }
    }
        return(
        <div className='my-4'>
            <form onSubmit={handleSubmit}>
            Add a Pizza Visit
            <Select options={props.clientIds} onChange={(selection)=>setSelectedClientId(selection?.value) } placeholder='Add Client'/>
            
            <Select isMulti options={pizzaOptions} onChange={(selections)=>handleToppingSelection(selections)} placeholder='Add a pizza type'/>
            <input type='date' placeholder="Select a date" onChange={(event)=>setSelectedDate(event.target.value)}/>
            <button type="submit">Add Pizza Visit</button>
            </form>
        </div>
    )
}