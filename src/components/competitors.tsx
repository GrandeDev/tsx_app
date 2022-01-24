import React, { useState } from "react";
import { randomUUID } from "crypto";

interface CompetitorsType {
  id: string;
  firstName: string;
  lastName: string;
  gender: string;
  weight: number;
  height: number;
}

interface Props {
  onAddCompetitor: (competitors: CompetitorsType[]) => void;
}

function Competitors(props: Props) {
  const [competitors, setCompetitors] = useState<CompetitorsType[]>([]);
  const [id, setId] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gender, setGender] = useState("");
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);

  function handleChangeInput(event: React.MouseEvent<HTMLButtonElement>) {
    const newCompetitor = {
      id: id,
      firstName: firstName,
      lastName: lastName,
      gender: gender,
      weight: weight,
      height: height,
    }
    setCompetitors([...competitors, newCompetitor]);
  }

  function handleNewCompetitor(event: React.MouseEvent) {
    event.preventDefault();
    if (competitors) {
      props.onAddCompetitor(competitors);
      setCompetitors([]);
    }
  };

  return(
    <div>
      <h1> Componente Competidores </h1>
      <form>
        <input
          type="hidden"
          value={id}
          onSubmit={() => setId(randomUUID())}
        />
        <input
          type="text" 
          value={firstName}
          onChange={(event) => setFirstName(event.target.value)}
        />
        <input
          type="text" 
          value={lastName}
          onChange={(event) => setLastName(event.target.value)}
        />
        <input
          type="text" 
          value={gender}
          onChange={(event) => setGender(event.target.value)}
        />
        <input
          type="number" 
          value={weight}
          onChange={(event) => setWeight(Number(event.target.value))}
        />
        <input
          type="number" 
          value={height}
          onChange={(event) => setHeight(Number(event.target.value))}
        />
        <button
          type="submit"
          onClick={handleChangeInput}
          > Enviar Formulário
        </button>
          </form>
    </div>
  );
}

export default Competitors;
