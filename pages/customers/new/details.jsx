import { Button } from "@material-tailwind/react";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useState } from "react";

import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

import NavBar from "../../../components/NavBar";

export default function Details() {
  let router = useRouter();

  const [new_customer_details, set_new_customer_details] = useState({
    cellPhone: "",
    firstName: "",
    lastName: "",
  });

  // persist customer details through session
  useEffect(() => {
    const new_customer = JSON.parse(sessionStorage.getItem("new_customer"));

    if (!new_customer) return;

    const new_customer_details = new_customer.details ?? null;

    if (!new_customer_details) return;

    set_new_customer_details(new_customer_details);
  }, []);

  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  return (
    <section>
      <NavBar />

      <div className="flex justify-center pt-10">
        <div className="w-5/12 space-y-4">
          <h2 className="text-gray-700 text-[25px] font-[400] text-center pb-2 border-b-2 border-gray-100">
            Add Customer - Details
          </h2>

          <p className="pb-10" />

          <Formik
            enableReinitialize
            initialValues={{ ...new_customer_details }}
            validationSchema={Yup.object({
              firstName: Yup.string()
                .max(40, "Must be 15 characters or less")
                .required("Required"),
              lastName: Yup.string()
                .max(40, "Must be 15 characters or less")
                .required("Required"),
              cellPhone: Yup.string()
                .matches(phoneRegExp, "Phone number is not valid")
                .max(10, "Must be 10 digits")
                .min(10, "Must be 10 digits")
                .required("Required"),
            })}
            onSubmit={async (values, { setSubmitting }) => {
              // when user submit form, we set step details to storage and navigate to next page
              let new_customer;

              const session_customer = JSON.parse(
                sessionStorage.getItem("new_customer")
              );

              if (session_customer) {
                new_customer = {
                  ...session_customer,
                  details: {
                    ...values,
                  },
                };
              } else {
                new_customer = {
                  details: {
                    ...values,
                  },
                  address: null,
                  comments: null,
                };
              }

              sessionStorage.setItem(
                "new_customer",
                JSON.stringify(new_customer)
              );
              router.push("/customers/new/address");
            }}
          >
            <Form className="space-y-8">
              <section>
                <label htmlFor="firstName">First Name</label>
                <Field
                  name="firstName"
                  type="text"
                  className="w-full py-3 border-2 px-2 border-gray-50 rounded-md"
                />
                <ErrorMessage
                  name="firstName"
                  className="text-red-600 text-xs font-mono"
                />
              </section>

              <section>
                <label htmlFor="lastName">Last Name</label>
                <Field
                  name="lastName"
                  type="text"
                  className="w-full py-3 border-2 px-2 border-gray-50 rounded-md"
                />
                <ErrorMessage
                  name="lastName"
                  className="text-red-600 text-xs font-mono"
                />
              </section>

              <section>
                <label htmlFor="cellPhone">Cell Phone</label>
                <Field
                  name="cellPhone"
                  type="tel"
                  className="w-full py-3 border-2 px-2 border-gray-50 rounded-md"
                />
                <ErrorMessage
                  name="cellPhone"
                  className="text-red-600 text-xs font-mono"
                />
              </section>

              <section className="flex justify-end w-full">
                <Button variant="outlined" type="submit">
                  Next
                </Button>
              </section>
            </Form>
          </Formik>
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
