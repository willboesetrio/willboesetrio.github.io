const customer_database = [
    {
      customer_id: 001,
      last_name: "Smith",
      first_name: "Jacob",
      last_purchase_quantity: 5,
      last_purchase_amount_in_dollars: 50,
    },
    {
      customer_id: 002,
      last_name: "Johnson",
      first_name: "Iris",
      last_purchase_quantity: 10,
      last_purchase_amount_in_dollars: 100,
    },
    {
      customer_id: 003,
      last_name: "Perez",
      first_name: "Javier",
      last_purchase_quantity: 5,
      last_purchase_amount_in_dollars: 50,
    },
    {
      customer_id: 004,
      last_name: "Thomas",
      first_name: "Henry",
      last_purchase_quantity: 20,
      last_purchase_amount_in_dollars: 200,
    },
    {
      customer_id: 005,
      last_name: "Smith",
      first_name: "Janice",
      last_purchase_quantity: 10,
      last_purchase_amount_in_dollars: 100,
    },
  ];
  const customerButton = document.getElementById('customer-button');
  customerButton.addEventListener('click', function() {
    const userInput = document.getElementById('customer-input').value;
      let foundCustomer = false;
        for (const customer of customer_database) {
            if (customer.customer_id == userInput) {
                document.getElementById('customer-output').innerHTML =
                    `<table>
                        <tr>
                            <td>ID:</td>
                            <td>${customer.customer_id}</td>
                        </tr>
                        <tr>
                            <td>First Name:</td>
                            <td>${customer.first_name}</td>
                        </tr>
                        <tr>
                            <td>Last Name:</td>
                            <td>${customer.last_name}</td>
                        </tr>
                        <tr>
                            <td>Last Purchase Amount in Dollars:</td>
                            <td>${customer.last_purchase_amount_in_dollars}</td>
                        </tr>
                        <tr>
                            <td>Last Purchase Quantity:</td>
                            <td>${customer.last_purchase_quantity}</td>
                        </tr>
                    </table>`
                    foundCustomer = true;
            }
        } if (!foundCustomer) {
          document.getElementById('customer-output').innerHTML = 'ID not found'
        }
  })