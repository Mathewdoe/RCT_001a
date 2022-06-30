import React from "react";
import Link from "next/link";
import NavBar from "../../../components/NavBar";

function address() {
  return (
    <section>
      <NavBar />

      <div className="flex justify-center pt-8">
        <div className="address w-8/12">
          <p class="text-sm-start">Physical Address</p>
          <div class="input-group flex-nowrap">
            <input
              type="text"
              class="form-control input-group-sm mb-3"
              aria-label="Username"
              aria-describedby="addon-wrapping"
            />
          </div>
          <div class="input-group flex-nowrap">
            <input
              type="text"
              class="form-control input-group-sm mb-3"
              aria-label="Username"
              aria-describedby="addon-wrapping"
            />
          </div>
          <div class="input-group flex-nowrap">
            <input
              type="text"
              class="form-control input-group-sm mb-3"
              aria-label="Username"
              aria-describedby="addon-wrapping"
            />
          </div>
          <div className="btn-address">
            <span className="btn-next">
              <Link href="/customers/new/details">
                <button type="button" class="btn btn-primary btn-lg ">
                  Back
                </button>
              </Link>
            </span>

            <span className="btn-next">
              <Link href="/customers/new/comments">
                <button type="button" class="btn btn-primary btn-lg ">
                  Next
                </button>
              </Link>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default address;
