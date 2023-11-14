import React from "react"
import { getAllClients, getPizzaVisits } from "./api/api"

export const Dashboard=()=>{
    const allClients=getAllClients();
    const allPizzaVisits=getPizzaVisits()
    return(
        <div>

        </div>
    )
}