import { useCallback, useState } from "react";

export default function PracUseCallback() {
  const edit = () => {};
  return (
    <>
      <ul>
        <li>
          Item 1 <button onClick={edit}>Edit</button>
          <button>Delete</button>
        </li>
      </ul>
    </>
  );
}
