import { Button } from "@material-tailwind/react";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { useState } from "react";

import NavBar from "../../../components/NavBar";

export default function Details() {
  const [name, setFirstName] = useState([]);
  const [surname, setLastName] = useState([]);
  const [cellNumber, setCellNumber] = useState([]);

  let router = useRouter();

  const submitCustomer = async () => {
    const response = await fetch("/api/customers", {
      method: "POST",
      body: JSON.stringify({
        name,
        surname,
        cellNumber,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log(data);
    router.push("/customers/new/address");
  };

  return (
    <section>
      <NavBar />

      <div className="flex justify-center pt-10">
        <div className="details w-8/12">
          <p class="text-sm-start">First Name</p>
          <div class="input-group flex-nowrap">
            <input
              type="text"
              class="form-control input-group-sm mb-3"
              aria-label="Username"
              aria-describedby="addon-wrapping"
              value={name}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <p class="text-sm-start">Last Name</p>
          <div class="input-group flex-nowrap">
            <input
              type="text"
              class="form-control input-group-sm mb-3"
              aria-label="Username"
              aria-describedby="addon-wrapping"
              value={surname}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <p class="text-sm-start">Cell phone</p>
          <div class="input-group flex-nowrap">
            <input
              type="text"
              class="form-control input-group-sm mb-3"
              aria-label="Username"
              aria-describedby="addon-wrapping"
              value={cellNumber}
              onChange={(e) => setCellNumber(e.target.value)}
            />
          </div>
          <div className="btn-next">
            <Link href="/customers/new/address">
              {/* <button
                type="button"
                class="btn btn-primary btn-lg "
                onClick={submitCustomer}
              >
                Next
              </button> */}
              <Button className="bg-red-400 rounded-none text-lg">Next</Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}





// <Link href="/customers">
//   <a>
//     <Button className="bg-purple-600 rounded-none">All customers</Button>
//   </a>
// </Link>;









