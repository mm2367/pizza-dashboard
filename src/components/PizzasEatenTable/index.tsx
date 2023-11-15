import React, { useCallback, useEffect, useState } from "react"
import { PizzasVisits, RawDateString } from "../../api/MockDataTypes";
import { useFilters, useTable } from "react-table";
import { pizzasEatenColumns } from "./columns";
import Select from "react-select"
import { AddPizza } from "../AddPizza";
import { pizzasEaten } from "../../api/MockData";
export const  PizzasEatenTable=()=>{
    const [pizzaVisitsData,setPizzaVisitData]=useState<PizzasVisits[]>([]);
    const [clientUserIdsOptions,setclientUserIdsOptions]=useState<{value:number,label:string}[]|[]>([]);

    useEffect(()=>{
      if(localStorage.getItem('allClients')){
        let allClients=JSON.parse(localStorage.getItem('allClients')??'');
        const clientIds=allClients.map((client)=> {return {value:client.id, label:client.firstName +" " + client.lastName}})
        setclientUserIdsOptions(clientIds)

      }   
      if(!localStorage.getItem('allPizzaVisits')){
        localStorage.setItem('allPizzaVisits',JSON.stringify(pizzasEaten));
      }
     setPizzaVisitData(JSON.parse(localStorage.getItem('allPizzaVisits')??''))  
    },[]);

    useEffect(() => {
      const handleStorage = () => {
        if(!localStorage.getItem('allPizzaVisits')){
          localStorage.setItem('allPizzaVisits',JSON.stringify(pizzasEaten));
        }
        setPizzaVisitData(JSON.parse(localStorage.getItem('allPizzaVisits')??''))
        if(localStorage.getItem('allClients')){
          let allClients=JSON.parse(localStorage.getItem('allClients')??'');
          const clientIds=allClients.map((client)=> {return {value:client.id, label:client.firstName +" " + client.lastName}})
          setclientUserIdsOptions(clientIds)
  
        }
      }
    
      window.addEventListener('storage', handleStorage)
      return () => window.removeEventListener('storage', handleStorage)
    }, [])
    const handleAddPizzaSubmit=(pizzaVisit:{clientId:number,pizzasIds:number[], dateEaten:RawDateString})=>{
      if(localStorage.getItem('allPizzaVisits')){
        const newId = JSON.parse(localStorage.getItem('allPizzaVisits')??'').length;
        const newVisit:PizzasVisits = {...pizzaVisit,visitId: newId};
        localStorage.setItem('allPizzaVisits',JSON.stringify([...pizzaVisitsData,newVisit]))
        window.dispatchEvent(new Event('storage'))
      }
    }
    // Use the useTable Hook to send the columns and data to build the table
    const {
      getTableProps, // table props from react-table
      getTableBodyProps, // table body props from react-table
      headerGroups, // headerGroups, if your table has groupings
      rows,
      //@ts-ignore
      setFilter, // rows for the table based on the data passed
      prepareRow // Prepare the row (this function needs to be called for each row before getting the row props)
    } = useTable({
      columns:pizzasEatenColumns,
      data:pizzaVisitsData
    },useFilters)
    
    const headerGroup=useCallback(()=>{
        return headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
              ))}
            </tr>
            ))
    },[pizzaVisitsData])


// Update the state when input changes
const handleFilterChange = e => {
  const value = e.value as number;
  setFilter("clientId",value);
};


    return (
      <div className='my-4'>
        <AddPizza handleAddPersonSubmit={handleAddPizzaSubmit} clientIds={clientUserIdsOptions}/>
        <Select
        options={clientUserIdsOptions}
        onChange={handleFilterChange}
        placeholder={"Filter By Client"}/>

        <table {...getTableProps()}>
          <thead>
            {headerGroup()}
             </thead>
             <tbody {...getTableBodyProps()}>
                {rows.map((row, i) => {
                    prepareRow(row);
            return (
            <tr {...row.getRowProps()}>
              {row.cells.map(cell => {
                return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
    </div>
  );
};