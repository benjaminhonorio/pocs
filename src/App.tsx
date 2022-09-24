import { MouseEvent, useEffect, useRef, useState } from "react";
import "./App.css";
const people = [
  {
    id: "632f243396fc1991d11fc976",
    name: "Harrell",
    lastname: "Armstrong",
    pet: {
      id: "632f24331979e0797a935e69",
      name: "Marianne",
      info: {
        age: 29,
      },
    },
  },
  {
    id: "632f24334b72be0a54161ce4",
    name: "Gutierrez",
    lastname: "Ortiz",
    pet: {
      id: "632f2433f8bb29b311c0b1ac",
      name: "Caitlin",
      info: {
        age: 34,
      },
    },
  },
  {
    id: "632f243342cf3d964d3d328a",
    name: "Ebony",
    lastname: "Myers",
    pet: {
      id: "632f2433e57eca8b4641130e",
      name: "Thomas",
      info: {
        age: 39,
      },
    },
  },
  {
    id: "632f2433c2ce192171ece9b7",
    name: "Tucker",
    lastname: "Bell",
    pet: {
      id: "632f2433b3a4f09eebde981f",
      name: "James",
      info: {
        age: 27,
      },
    },
  },
  {
    id: "632f243346c0b2d30f5e312a",
    name: "Janell",
    lastname: "Russell",
    pet: {
      id: "632f2433614ce00b774eefef",
      name: "Lawson",
      info: {
        age: 28,
      },
    },
  },
  {
    id: "632f2433718de0e0df2a4aa0",
    name: "Lakisha",
    lastname: "Case",
    pet: {
      id: "632f243322cc7f8aff60088c",
      name: "Clarice",
      info: {
        age: 28,
      },
    },
  },
  {
    id: "632f24330988c56307cbcbd0",
    name: "Combs",
    lastname: "Fernandez",
    pet: {
      id: "632f24339d47779f053c212f",
      name: "Felicia",
      info: {
        age: 37,
      },
    },
  },
  {
    id: "632f243377e739800049c7f2",
    name: "Thompson",
    lastname: "Shepard",
    pet: {
      id: "632f2433be5fd63e16398ecb",
      name: "Deirdre",
      info: {
        age: 37,
      },
    },
  },
  {
    id: "632f24332553caf73caaf961",
    name: "Brittney",
    lastname: "Shepherd",
    pet: {
      id: "632f243376b486af22d24926",
      name: "Crosby",
      info: {
        age: 30,
      },
    },
  },
  {
    id: "632f2433a15cd7c3d2895f92",
    name: "Valarie",
    lastname: "Pope",
    pet: {
      id: "632f24338988fe94ef724210",
      name: "Jenifer",
      info: {
        age: 22,
      },
    },
  },
  {
    id: "632f2433bbf1df2bf5c5a5a3",
    name: "Kennedy",
    lastname: "Summers",
    pet: {
      id: "632f24334b7f00e893ae67f5",
      name: "Tillman",
      info: {
        age: 26,
      },
    },
  },
  {
    id: "632f243394cee32122f17b80",
    name: "Marla",
    lastname: "Bauer",
    pet: {
      id: "632f24336fb8c5784ece671b",
      name: "Day",
      info: {
        age: 22,
      },
    },
  },
  {
    id: "632f2433f1056054fa887de1",
    name: "Barrera",
    lastname: "Christensen",
    pet: {
      id: "632f24336f294467194d5744",
      name: "Mathis",
      info: {
        age: 23,
      },
    },
  },
  {
    id: "632f24335268442a95c2893f",
    name: "Mona",
    lastname: "Sanders",
    pet: {
      id: "632f24339dc08c55e3661c66",
      name: "Elsa",
      info: {
        age: 26,
      },
    },
  },
  {
    id: "632f2433e938e99d1ec9baf0",
    name: "Castaneda",
    lastname: "Sharpe",
    pet: {
      id: "632f2433f4ff19e9e22cd9e3",
      name: "Hopper",
      info: {
        age: 25,
      },
    },
  },
  {
    id: "632f2433ca202b8fcb9801e6",
    name: "Hendricks",
    lastname: "Glover",
    pet: {
      id: "632f2433918cca4b9723a28e",
      name: "Mattie",
      info: {
        age: 23,
      },
    },
  },
  {
    id: "632f2433cafae0204d617e7b",
    name: "Whitney",
    lastname: "Huffman",
    pet: {
      id: "632f2433967a0ff9c752f5de",
      name: "Ofelia",
      info: {
        age: 39,
      },
    },
  },
  {
    id: "632f247d50988f8e2d648af3",
    name: "Zamora",
    lastname: "Ortega",
    pet: {
      id: "632f247d6a81f5c0bc749be6",
      name: "Patrice",
      info: {
        age: 24,
      },
    },
  },
  {
    id: "632f247d3b846fae1787f68e",
    name: "Stewart",
    lastname: "Jenkins",
    pet: {
      id: "632f247d5843804e36182dad",
      name: "Corinne",
      info: {
        age: 36,
      },
    },
  },
  {
    id: "632f247d9cffef4fa9e1ac2f",
    name: "Joan",
    lastname: "Hurst",
    pet: {
      id: "632f247d4320b1ba83a4c63f",
      name: "Cora",
      info: {
        age: 35,
      },
    },
  },
  {
    id: "632f247ddc266cc3ad4c953a",
    name: "Roy",
    lastname: "Stanton",
    pet: {
      id: "632f247d16dc106d159bc92f",
      name: "Helene",
      info: {
        age: 38,
      },
    },
  },
  {
    id: "632f247d973f5a91ad6b289d",
    name: "Angel",
    lastname: "Bean",
    pet: {
      id: "632f247d8c4d4edfa390ba07",
      name: "Casey",
      info: {
        age: 26,
      },
    },
  },
  {
    id: "632f247dae1f17579cf3d83f",
    name: "Wise",
    lastname: "Lowe",
    pet: {
      id: "632f247d56c47c48ab970431",
      name: "Horn",
      info: {
        age: 23,
      },
    },
  },
  {
    id: "632f247ded5e784c67867b71",
    name: "Huber",
    lastname: "Tyler",
    pet: {
      id: "632f247dccae0c7caae1237d",
      name: "Holder",
      info: {
        age: 23,
      },
    },
  },
  {
    id: "632f247d9c35a2bdf4ad75d7",
    name: "Millicent",
    lastname: "Kent",
    pet: {
      id: "632f247df3d0aaaae632e7cb",
      name: "Terry",
      info: {
        age: 23,
      },
    },
  },
  {
    id: "632f247d778c51b3107fe25f",
    name: "Peggy",
    lastname: "Goodwin",
    pet: {
      id: "632f247dc594089411351c2d",
      name: "Zimmerman",
      info: {
        age: 39,
      },
    },
  },
  {
    id: "632f247d320a315efead933d",
    name: "Kristen",
    lastname: "Dudley",
    pet: {
      id: "632f247d238b88afbeb864ec",
      name: "Walsh",
      info: {
        age: 31,
      },
    },
  },
  {
    id: "632f247d0cd0409910a4a021",
    name: "Bond",
    lastname: "Valentine",
    pet: {
      id: "632f247d12779c4477e5aeb4",
      name: "Armstrong",
      info: {
        age: 20,
      },
    },
  },
  {
    id: "632f247d76f4ac36fb06e601",
    name: "Nannie",
    lastname: "Reid",
    pet: {
      id: "632f247d8649d21b5cf3c7e1",
      name: "Glover",
      info: {
        age: 36,
      },
    },
  },
  {
    id: "632f247deb58cd3876b6cdcf",
    name: "Washington",
    lastname: "Herring",
    pet: {
      id: "632f247deef70c2092e1faa5",
      name: "Bridget",
      info: {
        age: 27,
      },
    },
  },
  {
    id: "632f247d41bb6cd3394767aa",
    name: "Spencer",
    lastname: "Mckinney",
    pet: {
      id: "632f247db9b8fd7427e4a577",
      name: "Kristine",
      info: {
        age: 25,
      },
    },
  },
  {
    id: "632f247dcb78fce3a3975183",
    name: "Berry",
    lastname: "Leblanc",
    pet: {
      id: "632f247dbbda1bb8de9889e4",
      name: "Rodriguez",
      info: {
        age: 35,
      },
    },
  },
];

type IPerson = typeof people[0];

type IPet = Pick<IPerson, "pet">["pet"];

const useExpansion = () => {
  const [expand, setExpand] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const toggleExpand = (e: MouseEvent) => {
    if (containerRef?.current === e.target) setExpand(!expand);
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

function PersonRow({ person }: { person: IPerson }) {
  const { expand, toggleExpand, containerRef } = useExpansion();

  console.log("person", person.name);
  return (
    <div className="person_row" ref={containerRef} onClick={toggleExpand}>
      {person.name} {person.lastname}
      {expand ? <PetRow pet={person.pet} /> : null}
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
        <PersonRow key={person.id} person={person} />
      ))}
    </div>
  );
}

export default App;
