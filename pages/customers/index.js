import Link from "next/link";
import Image from "next/image";
import { Fragment, useEffect, useState } from "react";
import { Button, Navbar } from "@material-tailwind/react";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";

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
      <main className="space-y-4">
        <NavBar />

        <section className="flex justify-center pt-4">
          <div className="w-8/12 space-y-4">
            {customers.length > 0 ? (
              <Fragment>
                <section className="flex items-center justify-between">
                  <p> All Customers({customers.length})</p>
                  <Link href="/customers/new/details">
                    <a>
                      <Button className="" variant="outlined">
                        Add customer
                      </Button>
                    </a>
                  </Link>
                </section>

                <section>
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
                          <td>{customer.details.firstName}</td>
                          <td>{customer.details.lastName}</td>
                          <td>{customer.details.cellPhone} </td>
                          <td>
                            <Link href={`/customers/${customer.id}/`}>
                              <p className="text-blue-600">Read more...</p>
                            </Link>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </section>
              </Fragment>
            ) : (
              <section className="flex flex-col items-center justify-center">
                <p>We have no customers to display.</p>
                <Link href="/customers/new/details">
                  <a>
                    <Button className="" variant="outlined">
                      Add customer
                    </Button>
                  </a>
                </Link>
              </section>
            )}
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
}
