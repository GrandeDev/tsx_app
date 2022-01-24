import { useState, useEffect } from "react";
import { Service } from "./Service";

export interface Athlete {
  id: string;
  firstName: string;
  lastName: string;
  gender: string;
  // country: string;
  // headCoach: string;
  weight: number;
  height: number;
  url: string;
}

export interface Athlete {
  results: Athlete[];
}


function usePostAthleteService() {
  const [result, setResult] = useState<Service<Athlete>>({
    status: "loading",
  });

  useEffect(() => {
    fetch("../lib/database/database.json")
      .then(response => response.json())
      .then(response => setResult({ status: "loaded", payload: response }))
      .catch(error => setResult({ status: "error", error }));
  }, []);

  return result;
}

export default usePostAthleteService;