import React, { useCallback, useEffect, useState } from "react"
import { PizzasVisits } from "../../api/MockDataTypes";
import { useFilters, useTable } from "react-table";
import { pizzasEatenColumns } from "./columns";
import { getAllClients, getPizzaVisits } from "../../api/api";
import Select from "react-select"
export const  PizzasEatenTable=()=>{
    const [pizzaVisitsData,setClientData]=useState<PizzasVisits[]>([]);
    const [clientUserIdsOptions,setclientUserIdsOptions]=useState<{value:number,label:string}[]|[]>([]);

    const [filterValue,setFilterValue]=useState<"">("");

    useEffect(()=>{
        getPizzaVisits().then((result)=> { return result}).then((data)=>{
          setClientData(data);
      });
      getAllClients().then((result)=> { return result}).then((clientUserIds)=>{
        const clientIds=clientUserIds.map((client)=> {return {value:client.id, label:client.firstName +" " + client.lastName}})
        setclientUserIdsOptions(clientIds)
      });
    },[]);

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
    const [filterInput, setFilterInput] = useState("");

// Update the state when input changes
const handleFilterChange = e => {
  const value = e.value as number;
  setFilter("clientId",value);
};


    return (
      <div className='my-4'>
        <Select
        options={clientUserIdsOptions}
        onChange={handleFilterChange}
        placeholder={"Select Client"}/>

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