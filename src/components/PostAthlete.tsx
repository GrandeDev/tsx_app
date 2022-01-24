import { useState } from "react";
import Athlete from "./Athlete";
import { Service } from "./Service";
import { Athlete } from "./usePostAthleteService";

export type PostAthlete = Omit<
  Athlete,
  "id" |
  "url" 
>;

const usePostAthleteService = () => {
  const [service, setService] = useState<Service<PostAthlete>> ({
    status: "init"
    
  })

  const publishAthlete = (Athlete: PostAthlete) => {
    setService({ status: "loading" });
  }

  const headers = new Headers();
  
}