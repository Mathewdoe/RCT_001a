import { customers } from "../../../data/customers_data";

const all_customers = [];

export default function handler(req, res) {
  if (req.method === "GET") {
    // get customers

    // console.log("get:", customers)
    res.status(200).json(all_customers);
  } else if (req.method === "POST") {
    const new_customer = req.body;

    const new_customer_id = Math.random();
    new_customer["id"] = new_customer_id;

    all_customers.push(new_customer);

    res.status(201).json(all_customers);
  }
}
