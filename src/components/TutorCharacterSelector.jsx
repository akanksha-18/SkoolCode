import React from 'react';
import { Card, CardContent } from '../components/ui/card';

const TUTOR_CHARACTERS = [
  {
    id: 'wizard',
    name: 'Pythagoras the Wizard',
    description: 'A magical wizard who teaches coding spells!',
    avatar: '🧙‍♂️'
  },
  {
    id: 'robot',
    name: 'Cody the Robot',
    description: 'A friendly robot who loves to help kids learn!',
    avatar: '🤖'
  }
];

function TutorCharacterSelector({ selectedTutor, setSelectedTutor }) {
  return (
    <div className="grid grid-cols-2 gap-4">
      {TUTOR_CHARACTERS.map((character) => (
        <Card 
          key={character.id}
          className={`
            cursor-pointer 
            ${selectedTutor === character.id 
              ? 'border-2 border-purple-500' 
              : 'border'
            }
          `}
          onClick={() => setSelectedTutor(character.id)}
        >
          <CardContent className="flex flex-col items-center p-4">
            <div className="text-6xl mb-2">{character.avatar}</div>
            <h3 className="font-bold">{character.name}</h3>
            <p className="text-sm text-gray-600 text-center">
              {character.description}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

export default TutorCharacterSelector;