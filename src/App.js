import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Job from "./Job";
import { FaAngleDoubleRight } from "react-icons/fa";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-tabs-project";
function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [person, setPerson] = useState([]);

  const fetchPerson = async () => {
    try {
      const res = await fetch(url);
      const person = await res.json();
      setIsLoading(false);
      setPerson(person);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchPerson();
  }, []);
  if (isLoading) {
    return <Loading />;
  }
  return <Job person={person} />;
}

export default App;
