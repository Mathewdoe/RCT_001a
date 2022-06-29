import React from "react";
import Link from "next/link";

function address() {
  return (
    <div className="address">
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
  );
}

export default address;
