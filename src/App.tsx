import { MouseEvent, ReactNode, useEffect, useRef, useState } from "react";
import "./App.css";
import { dataPeople as people } from "./people";

type IPerson = typeof people[0];

type IPet = Pick<IPerson, "pet">["pet"];

const useExpansion = () => {
  const [expand, setExpand] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const toggleExpand = (e: MouseEvent) => {
    if (containerRef.current === e.target) setExpand(!expand);
  };
  const handleClose = (e: Event) => {
    if (!containerRef.current?.contains(e.target as Node)) {
      setExpand(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClose);
    return () => document.removeEventListener("click", handleClose);
  }, []);

  return { expand, toggleExpand, containerRef };
};

function PersonRow({
  person,
  children,
}: {
  person: IPerson;
  children: ReactNode;
}) {
  const { expand, toggleExpand, containerRef } = useExpansion();

  console.log("person", person.name);
  return (
    <div className="person_row" ref={containerRef} onClick={toggleExpand}>
      {person.name} {person.lastname}
      {expand ? children : null}
    </div>
  );
}

function PetRow({ pet }: { pet: IPet }) {
  const { expand, toggleExpand, containerRef } = useExpansion();

  return (
    <div ref={containerRef} onClick={toggleExpand}>
      {pet.name}
      {expand ? <div>Edad: {pet.info.age}</div> : null}
    </div>
  );
}

function App() {
  return (
    <div>
      {people.map((person) => (
        <PersonRow key={person.id} person={person}>
          <PetRow pet={person.pet} />
        </PersonRow>
      ))}
    </div>
  );
}

export default App;
