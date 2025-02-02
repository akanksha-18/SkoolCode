import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';

const LESSONS = [
  {
    id: 'basic_syntax',
    title: 'Python Basic Syntax',
    description: 'Learn the magical language of Python! Discover how to write your first lines of code.',
    challenge: 'Write a print statement that says "Hello, Python Wizard!"',
    example_code: "print('Hello, Python Wizard!')",
    difficulty: 'Beginner'
  },
  {
    id: 'variables',
    title: 'Variables Treasure Hunt',
    description: 'Learn how to store and play with different types of information using variables.',
    challenge: 'Create variables for your name and age, then print them out',
    example_code: "name = 'Luna'\nage = 10\nprint(f'My name is {name} and I am {age} years old!')",
    difficulty: 'Easy'
  },
 
];

function LessonContent({ onLessonSelect, activeLesson }) {
  return (
    <div className="grid md:grid-cols-2 gap-4">
      {LESSONS.map((lesson) => (
        <Card 
          key={lesson.id}
          className={`
            ${activeLesson?.id === lesson.id 
              ? 'border-2 border-purple-500' 
              : ''
            }
          `}
        >
          <CardHeader>
            <CardTitle>{lesson.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">{lesson.description}</p>
            <div className="bg-gray-100 p-3 rounded mb-4">
              <h4 className="font-bold">Challenge:</h4>
              <p>{lesson.challenge}</p>
            </div>
            <pre className="bg-gray-200 p-2 rounded text-sm mb-4">
              {lesson.example_code}
            </pre>
            <div className="flex justify-between items-center">
              <span className="text-sm">
                Difficulty: {lesson.difficulty}
              </span>
              <Button onClick={() => onLessonSelect(lesson)}>
                Start Lesson
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

export default LessonContent;