import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import "./App.css";

const headers = [
  { id: 1, name: "name" },
  { id: 2, name: "lastname" },
];

const people = [
  { id: 1, name: "Benjamin", lastname: "Honorio", pet: "Mina" },
  { id: 2, name: "Susy", lastname: "Rodriguez", pet: "Cieguis" },
];

type Person = typeof people[number];

function App() {
  const ref = useRef<{ close: (arg0: EventTarget | null) => void }>();
  console.log(ref.current);
  const closeOpenRow = (e: Event) => {
    if (ref.current) {
      ref.current?.close(e.target);
    }
  };

  useEffect(() => {
    document.addEventListener("mouseup", closeOpenRow);

    return () => {
      document.removeEventListener("mouseup", closeOpenRow);
    };
  }, []);

  console.log("render");
  return (
    <table>
      <thead>
        <tr>
          {headers.map((header) => {
            return <th key={header.id}>{header.name} </th>;
          })}
        </tr>
      </thead>
      <tbody>
        {people.map((person) => {
          return <PersonRow ref={ref} key={person.id} person={person} />;
        })}
      </tbody>
    </table>
  );
}

export default App;

const PersonRow = forwardRef(function ({ person }: { person: Person }, ref) {
  const [selected, setSelected] = useState(false);
  const rowRef = useRef<HTMLTableRowElement>(null);

  useImperativeHandle(ref, () => {
    return {
      close: (e: Node) => {
        if (!rowRef.current?.contains(e)) {
          setSelected(false);
        }
      },
    };
  });

  console.log(person.name);
  return (
    <>
      <tr
        ref={rowRef}
        className="table-row"
        onClick={() => {
          setSelected(!selected);
        }}
      >
        <td>{person.name}</td>
        <td>{person.lastname}</td>
      </tr>
      {selected && (
        <tr className="table-row">
          <td colSpan={2}>{person.pet}</td>
        </tr>
      )}
    </>
  );
});
