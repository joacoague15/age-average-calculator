import React, {useState} from 'react';
import AverageAge from "./AverageAge";
import InputPerson from "./InputPerson";

type Person = {
    name: string;
    age: number | null;
};
function App() {
    const [persons, setPersons] = useState<Person[]>([]);

  return (
      <>
          <InputPerson persons={persons} setPersons={setPersons} />
          <AverageAge data={persons} />
      </>
  );
}

export default App;
