import React, { useState } from 'react';
import './styles.css';

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
        <div className="container">
            <div className="inputGroup">
                <label className="label">Name</label>
                <input
                    type="text"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    className="input"
                />
            </div>
            <div className="inputGroup">
                <label className="label">Age</label>
                <input
                    type="number"
                    value={age}
                    onChange={e => {
                        if (parseInt(e.target.value, 10) < 0) return;
                        setAge(e.target.value);
                    }}
                    className="input"
                />
            </div>
            <button className="button" onClick={handleAddPerson}>Add Person</button>

            <div>
                <h3 className="listHeader">People List:</h3>
                <ul className="list">
                    {persons.map((person, index) => (
                        <li className="listItem" key={index}>
                            {person.name} - {person.age ? person.age : 'No Age Provided'}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default InputPerson;