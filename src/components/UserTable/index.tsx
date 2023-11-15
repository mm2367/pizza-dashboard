import React, { useCallback, useEffect, useState } from "react"

import { useTable } from "react-table";
import { Client } from "../../api/MockDataTypes";
import { userTableColumns } from "./columns";
import { getAllClients } from "../../api/api";


export const UserTable=()=>{
    const [clientData,setClientData]=useState<Client[]>([]);

    useEffect(()=>{
        getAllClients().then((result)=> { return result}).then((data)=>{
          setClientData(data);
      })
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
                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
              ))}
            </tr>
            ))
    },[clientData])
    return (
      <div>
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