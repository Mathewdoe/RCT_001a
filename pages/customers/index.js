import Link from "next/link";
import { useEffect, useState } from "react";

export default function Customers() {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    const fetchCustomers = async () => {
      const response = await fetch("/api/customers");
      const data = await response.json();
      setCustomers(data);
    };
    fetchCustomers();
  }, []);

  return (
    <>
      <div className="container">
        <div className="headings">
          <div className="row">
            <span className="text1 col">
              All Cunstomers({customers.length})
            </span>
            <span className="col">
              <div className="header-txt">
                <Link href="/customers">
                  <a>All Cunstomers</a>
                </Link>

                <Link href="/customers/new/details">
                  <a>Add customer</a>
                </Link>
              </div>
            </span>
          </div>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Surname</th>
              <th scope="col">Cell Number</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((customer) => (
              <tr key={customer.id}>
                <td>{customer.name}</td>
                <td>{customer.surname}</td>
                <td>{customer.cellNumber} </td>
                <td>
                  <Link href={`/customers/${customer.id}/`}>Read more...</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
