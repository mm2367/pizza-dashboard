
import React, { useEffect, useState } from "react"
import Select from "react-select"
import {addPizzaVisit, getAllClients } from "../api/api"
import { RawDateString } from "../api/MockDataTypes";

export const AddPizza=()=>{
    const [clientUserIds,setClientUserIds]=useState<{value:number,label:string}[]|[]>();
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

    useEffect(()=>{
        getAllClients().then((result)=> { return result}).then((data)=>{
        const result=data.map((client)=> {return {value:client.id, label:client.firstName +" " + client.lastName}})
        setClientUserIds(result)
      })
    },[])
    const handleSubmit=async (e)=>{
        e.preventDefault();
        if(selectedClientId!==undefined && selectedToppings && selectedDate ){
        //@ts-ignore
        await addPizzaVisit({clientID:selectedClientId,pizzaIds:selectedToppings, dateEaten:selectedDate})
        }
    }
        return(
        <div className='my-4'>
            <form>
            Add a Pizza Visit
            <Select options={clientUserIds} onChange={(selection)=>setSelectedClientId(selection?.value) } placeholder='Add Client'/>
            
            <Select isMulti options={pizzaOptions} onChange={(selections)=>handleToppingSelection(selections)} placeholder='Add a pizza type'/>
            <input type='date' placeholder="Select a date" onChange={(event)=>setSelectedDate(event.target.value)}/>
            <button type="submit">Submit</button>
            </form>
        </div>
    )
}