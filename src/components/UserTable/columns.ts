import { useMemo } from "react";

export const userTableColumns =  [
      {

        Header: "User Table",

        columns: [
          {
            Header: "ID",
            accessor: "id",
          },
          {
            Header: "First Name",
            accessor: "firstName",
          },
          {
            Header: "Last Name",
            accessor: "lastName",
          },
        ],
      },
  ];