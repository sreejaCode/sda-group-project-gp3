import React from "react";

export default function Dropdown() {
  return (
    <div>
      <button
        type="button"
        className="btn btn-info dropdown-toggle"
        data-toggle="dropdown"
      >
        {" "}
        Theme for the day{" "}
      </button>
    </div>
  );
}