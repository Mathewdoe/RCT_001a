import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import NavBar from "../../../components/NavBar";

import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Button } from "@material-tailwind/react";

function address() {
  let router = useRouter();

  const [address, set_address] = useState({
    physical_address: {
      street_name: "",
      suburb: "",
      country: "",
      postal_code: "",
    },
    postal_address: {
      street_name: "",
      suburb: "",
      country: "",
      postal_code: "",
    },
  });

  // persist customer address through session
  useEffect(() => {
    const new_customer = JSON.parse(sessionStorage.getItem("new_customer"));

    if (!new_customer) return;

    const new_customer_address = new_customer["address"] ?? null;

    if (!new_customer_address) return;

    set_address(new_customer_address);
  }, []);

  return (
    <section className="pb-4">
      <NavBar />

      <div className="flex justify-center pt-8">
        <div className="address w-5/12">
          <h2 className="text-gray-700 text-[25px] font-[400] text-center pb-2 border-b-2 border-gray-100">
            Add Customer - Address
          </h2>

          <p className="pb-10" />

          <Formik
            enableReinitialize
            initialValues={{ ...address }}
            onSubmit={(values, { setSubmitting }) => {
              const new_customer = JSON.parse(
                sessionStorage.getItem("new_customer")
              );

              if (!new_customer) {
                // TODO: handle graciously
              }

              new_customer["address"] = values;
              sessionStorage.setItem(
                "new_customer",
                JSON.stringify(new_customer)
              );

              router.push("/customers/new/comments");
            }}
          >
            <Form className="space-y-10">
              <section className="space-y-2">
                <label htmlFor="firstName">Physical Address</label>

                <div>
                  <label
                    htmlFor="physical_address.street_name"
                    className="text-xs"
                  >
                    Street Name
                  </label>
                  <Field
                    name="physical_address.street_name"
                    type="text"
                    className="w-full py-3 border-2 px-2 border-gray-50 rounded-md"
                  />
                  <ErrorMessage name="physical_address.street_name" />
                </div>

                <div>
                  <label
                    htmlFor="physical_address.street_suburb"
                    className="text-xs"
                  >
                    Suburb
                  </label>
                  <Field
                    name="physical_address.suburb"
                    type="text"
                    className="w-full py-3 border-2 px-2 border-gray-50 rounded-md"
                  />
                  <ErrorMessage name="physical_address.street_suburb" />
                </div>

                <div>
                  <label
                    htmlFor="physical_address.street_country"
                    className="text-xs"
                  >
                    Country
                  </label>
                  <Field
                    name="physical_address.country"
                    type="text"
                    className="w-full py-3 border-2 px-2 border-gray-50 rounded-md"
                  />
                  <ErrorMessage name="physical_address.street_country" />
                </div>

                <div>
                  <label htmlFor="physical_address.code" className="text-xs">
                    Code
                  </label>
                  <Field
                    name="physical_address.postal_code"
                    type="text"
                    className="w-full py-3 border-2 px-2 border-gray-50 rounded-md"
                  />
                  <ErrorMessage name="physical_address.street_postal_code" />
                </div>
              </section>

              <section className="space-y-2">
                <label>Postal Address</label>

                <div>
                  <label
                    htmlFor="postal_address.street_name"
                    className="text-xs"
                  >
                    Street Name
                  </label>
                  <Field
                    name="postal_address.street_name"
                    type="text"
                    className="w-full py-3 border-2 px-2 border-gray-50 rounded-md"
                  />
                  <ErrorMessage name="physical_address.street_name" />
                </div>

                <div>
                  <label htmlFor="postal_address.suburb" className="text-xs">
                    Suburb
                  </label>
                  <Field
                    name="postal_address.suburb"
                    type="text"
                    className="w-full py-3 border-2 px-2 border-gray-50 rounded-md"
                  />
                  <ErrorMessage name="physical_address.street_suburb" />
                </div>

                <div>
                  <label
                    htmlFor="postal_address.street_country"
                    className="text-xs"
                  >
                    Country
                  </label>
                  <Field
                    name="postal_address.country"
                    type="text"
                    className="w-full py-3 border-2 px-2 border-gray-50 rounded-md"
                  />
                  <ErrorMessage name="physical_address.street_country" />
                </div>

                <div>
                  <label
                    htmlFor="postal_address.postal_code"
                    className="text-xs"
                  >
                    Postal Code
                  </label>
                  <Field
                    name="postal_address.postal_code"
                    type="text"
                    className="w-full py-3 border-2 px-2 border-gray-50 rounded-md"
                  />
                  <ErrorMessage name="physical_address.street_postal_code" />
                </div>
              </section>

              <section className="flex justify-between items-center">
                <Button
                  variant="outlined"
                  onClick={() => {
                    router.push("/customers/new/details");
                  }}
                >
                  Back
                </Button>
                <Button type="submit">Next</Button>
              </section>
            </Form>
          </Formik>
        </div>
      </div>
    </section>
  );
}

export default address;
