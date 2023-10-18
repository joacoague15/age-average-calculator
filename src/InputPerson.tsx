import React, { useState } from 'react';

type Person = {
    name: string;
    age: number | null;
};

type InputPersonProps = {
    persons: Person[];
    setPersons: React.Dispatch<React.SetStateAction<Person[]>>;
};

const InputPerson: React.FC<InputPersonProps> = ({ persons, setPersons }) => {
    const [name, setName] = useState<string>('');
    const [age, setAge] = useState<string>('');

    const handleAddPerson = () => {
        if (!name.trim()) {
            alert('Person name is mandatory!');
            return;
        }

        const ageNumber = age ? parseInt(age, 10) : null;
        setPersons(prevPersons => [...prevPersons, { name, age: ageNumber }]);

        setName('');
        setAge('');
    };

    return (
        <div>
            <div>
                <label>Name: </label>
                <input
                    type="text"
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
            </div>
            <div>
                <label>Age: </label>
                <input
                    type="number"
                    value={age}
                    onChange={e => setAge(e.target.value)}
                />
            </div>
            <button onClick={handleAddPerson}>Add Person</button>

            <div>
                <h3>People List:</h3>
                <ul>
                    {persons.map((person, index) => (
                        <li key={index}>
                            {person.name} - {person.age ? person.age : 'No Age Provided'}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default InputPerson;