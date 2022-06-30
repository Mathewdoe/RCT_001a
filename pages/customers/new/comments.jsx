import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import NavBar from "../../../components/NavBar";

import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Button } from "@material-tailwind/react";

function commentss() {
  let router = useRouter();

  const [comments, set_comments] = useState("");

  // persist customer address through session
  useEffect(() => {
    const new_customer = JSON.parse(sessionStorage.getItem("new_customer"));

    if (!new_customer) return;

    const new_customer_comments = new_customer["commentss"] ?? null;

    if (!new_customer_comments) return;

    set_comments(new_customer_comments);
  }, []);

  return (
    <section>
      <NavBar />

      <div className="flex justify-center pt-8">
        <div className="w-5/12">
          <h2 className="text-gray-700 text-[25px] font-[400] text-center pb-2 border-b-2 border-gray-100">
            Add Customer - Comments
          </h2>

          <p className="pb-10" />

          <Formik
            enableReinitialize
            initialValues={{ comments: comments }}
            validationSchema={Yup.object({
              comments: Yup.string()
                .min(50, "Must be 50 characters or more")
                .max(400, "Must be 400 characters or less")
                .required("Required"),
            })}
            onSubmit={async (values, { setSubmitting }) => {
              let new_customer = JSON.parse(
                sessionStorage.getItem("new_customer")
              );

              if (!new_customer?.details) {
                alert("Please fill required fields on the Details page ");
                return;
              }
              if (
                new_customer?.address?.physcial_address?.street_name === "" ||
                new_customer?.address?.postal_address?.street_name === ""
              ) {
                alert("Please fill required fields on the Address page ");
                return;
              }

              new_customer["comments"] = values.comments;
              sessionStorage.setItem(
                "new_customer",
                JSON.stringify(new_customer)
              );

              const resp = await fetch("/api/customers", {
                method: "POST",
                body: JSON.stringify(new_customer),
                headers: {
                  "Content-Type": "application/json",
                },
              });

              const data = await resp.json();

              if (!data[0]) {
                alert("Please return again!!");
                return;
              }

              // clear all cards/sessions and redirect to all customers page
              new_customer = {
                details: null,
                address: null,
                comments: null,
              };

              sessionStorage.setItem(
                "new_customer",
                JSON.stringify(new_customer)
              );

              router.push("/customers");
            }}
          >
            <Form className="space-y-4">
              <section>
                <label htmlFor="comments" className="text-xs">
                  comments
                </label>
                <Field
                  name="comments"
                  type="text"
                  as="textarea"
                  className="w-full py-3 border-2 px-2 border-gray-50 rounded-md"
                />
                <ErrorMessage name="comments" />
              </section>

              <section className="flex justify-between items-center">
                <Button
                  variant="outlined"
                  onClick={() => {
                    router.push("/customers/new/address");
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

export default commentss;
