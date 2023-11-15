import React, { useCallback, useEffect, useState } from "react"

import { useTable } from "react-table";
import { Client } from "../../api/MockDataTypes";
import { userTableColumns } from "./columns";
import { AddPerson } from "../AddPerson";
import { clients } from "../../api/MockData";


export const UserTable=()=>{
    const [clientData,setClientData]=useState<Client[]>([]);
  
    useEffect(()=>{
      if(!localStorage.getItem('allClients')){
        localStorage.setItem('allClients',JSON.stringify(clients));
      }
     setClientData(JSON.parse(localStorage.getItem('allClients')??''))
    },[])

    // Use the useTable Hook to send the columns and data to build the table
    const {
      getTableProps, // table props from react-table
      getTableBodyProps, // table body props from react-table
      headerGroups, // headerGroups, if your table has groupings
      rows, // rows for the table based on the data passed
      prepareRow // Prepare the row (this function needs to be called for each row before getting the row props)
    } = useTable({
      columns:userTableColumns,
      data:clientData,
    })

    const headerGroup=useCallback(()=>{
        return headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                 <th className="table-header-width" {...column.getHeaderProps()}>{column.render("Header")}</th>
              ))}
            </tr>
            ))
    },[clientData])

    useEffect(() => {
      const handleStorage = () => {
        if(!localStorage.getItem('allClients')){
          localStorage.setItem('allClients',JSON.stringify(clients));
        }
       setClientData(JSON.parse(localStorage.getItem('allClients')??''))
      }
    
      window.addEventListener('storage', handleStorage)
      return () => window.removeEventListener('storage', handleStorage)
    }, [])

    const handleAddPersonSubmit=(person:{firstName:string,lastName:string})=>{
      if(localStorage.getItem('allClients')){

      const newId = JSON.parse(localStorage.getItem('allClients')??'').length;
      const newClient:Client = {...person,id: newId};
      localStorage.setItem('allClients',JSON.stringify([...clientData,newClient]))
      window.dispatchEvent(new Event('storage'))
      }
    }
    return (
      <div>
        <AddPerson handleAddPersonSubmit={(submittedPerson)=>handleAddPersonSubmit(submittedPerson)}/>
        <table className="my-4 mx-4" {...getTableProps()}>
          <thead className="mx-4">
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
}