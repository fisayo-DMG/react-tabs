import React, { useState } from "react";

const Job = ({ person }) => {
  console.log(person[0]);
  const [value, setValue] = useState(0);
  const { title, dates, duties } = person[value];
  return (
    <>
      <p>{title}</p>
      <p>{dates}</p>
      <p>{duties}</p>
    </>
  );
};

export default Job;
