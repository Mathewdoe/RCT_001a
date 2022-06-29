import { customers } from "../../../data/customers_data";

export default function handler(req, res) {
  if (req.method === "GET") {
    // get customers

    // console.log("get:", customers)
    res.status(200).json(customers);
  } else if (req.method === "POST") {
    // update new customers global state
    const name = req.body.name;
    const surname = req.body.surname;
    const cellNumber = req.body.cellNumber;

    const newCustomer = {
      id: Date.now(),
      name,
      surname,
      cellNumber,
    };

    customers.push(newCustomer);


    console.log("update:", customers)
    res.status(201).json(newCustomer);
  }
}
