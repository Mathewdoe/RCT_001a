import Link from "next/link";
import React from "react";

function comments() {
  return (
    <div className="comments">
      <label for="floatingTextarea2">Additional Comments</label>
      <div class="form-floating">
        <textarea
          className="comments-area"
          class="form-control"
          placeholder="Leave a comment here"
          id="floatingTextarea2"
        ></textarea>
      </div>
      <div className="btn-comments">
        <span className="btn-back">
          <Link href="/customers/new/address">
            <button type="button" class="btn btn-primary btn-lg ">
              Back
            </button>
          </Link>
        </span>

        <span className="btn-submit">
          <Link href="/customers/new/comments">
            <button type="button" class="btn btn-primary btn-lg ">
              Submit
            </button>
          </Link>
        </span>
      </div>
    </div>
  );
}

export default comments;
