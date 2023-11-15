import { Pizzas } from "../../api/MockData";

export const pizzasEatenColumns =  [
    {

      Header: "Pizzas Eaten",

      columns: [
        {
          Header: "Visit ID",
          id:'visitId',
          accessor: "visitId",

        },
        {
            Header: "Client ID",
            id:"clientId",
            accessor: "clientId",
            filter:'equals'

          },
          {
            Header: "Pizza Types",
            id:"pizzasIds",
            accessor: "pizzasIds",
            Cell: cellInfo => cellInfo.row.original.pizzasIds.map((id,index)=> { if(index<cellInfo.row.original.pizzasIds.length-1) {return Pizzas[id] +', '} else {return Pizzas[id] }})

          },
        {
          Header: "Visit Date",
          accessor: "dateEaten",
        }
      ],
    },
];