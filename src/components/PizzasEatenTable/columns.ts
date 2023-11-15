
export const pizzasEatenColumns =  [
    {

      Header: "Pizzas Eaten",

      columns: [
        {
          Header: "Visit ID",
          id:'visitId',
          accessor: "visitId",
          filter:'equals'

        },
        {
            Header: "Client ID",
            id:"clientId",
            accessor: "clientId",
            filter:'equals'

          },
        {
          Header: "Visit Date",
          accessor: "dateEaten",
          filter:'equals'

        }
      ],
    },
];