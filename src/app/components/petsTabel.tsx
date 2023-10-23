"use client";

import { cache, useState } from "react";

const PetsTabel = () => {
  let [name, setPetName] = useState("");
  let [owner, setOwnerName] = useState("");
  let [sellPrice, setSellPrice] = useState("");

  const handle = async (e: any) => {
    e.preventDefault();
    console.log("click");
    fetch(
      "http://localhost:3000/api/pets",

      {
        method: "POST",
        body: JSON.stringify({ name, owner }),

        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }
    );
  };

  return (
    <>
      <input
        type="text"
        value={name}
        onChange={(e) => setPetName(e.target.value)}
        className=""
      />
      <input
        type="text"
        value={owner}
        onChange={(e) => setOwnerName(e.target.value)}
        className=""
      />
      <input
        type="text"
        value={sellPrice}
        onChange={(e) => setSellPrice(e.target.value)}
        className=""
      />
      <button onClick={handle}>Submit</button>{" "}
    </>
  );
};

export default PetsTabel;
