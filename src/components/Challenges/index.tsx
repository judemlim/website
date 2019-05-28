import React, { useState } from 'react';
import { UnmountClosed } from 'react-collapse';
import EmbeddedGist from './EmbeddedGist';
import hackerrankList from './hackerrank_list.json';
import projecteulerList from './projecteuler_list.json';
import './Challenges.css';

const Challenges = () => {
  const [isHackerrankVisible, setIsHackerrankVisible] = useState(false);
  const [isProjectEulerVisible, setIsProjectEulerVisible] = useState(false);
  const toggleHackerrankVis = () => {
    setIsHackerrankVisible(!isHackerrankVisible);
  };
  const toggleProjectEulerVis = () => {
    setIsProjectEulerVisible(!isProjectEulerVisible);
  };
  return (
    <main>
      <div className="content-wrap">
        <h1>Coding Challenges</h1>

        <h2>Hackerrank Challenges</h2>
        <button onClick={() => toggleHackerrankVis()}>{isHackerrankVisible ? 'Hide all' : 'Show all'}</button>

        <UnmountClosed isOpened={isHackerrankVisible}>
          <div className="challenges-table header">
            <div className="ct-col1">Title</div>
            <div className="ct-col2">Programming Language</div>
            <div className="ct-col3">Difficulty</div>
            <div className="ct-col4">Date Completed</div>
          </div>
          {hackerrankList.map(item => (
            <EmbeddedGist
              title={item.title}
              language={item.language}
              gist={item.url}
              challenge={item.challengeLink}
              dateCompleted={item.dateCompleted}
              difficulty={item.difficulty}
              key={item.key}
            />
          ))}
        </UnmountClosed>

        <h2>Project Euler Challenges</h2>
        <button onClick={() => toggleProjectEulerVis()}>{isProjectEulerVisible ? 'Hide all' : 'Show all'}</button>
        <UnmountClosed isOpened={isProjectEulerVisible}>
          <div className="challenges-table header">
            <div className="ct-col1">Title</div>
            <div className="ct-col2">Programming Language</div>
            <div className="ct-col3">Difficulty</div>
            <div className="ct-col4">Date Completed</div>
          </div>
          {projecteulerList.map(item => (
            <EmbeddedGist
              title={item.title}
              language={item.language}
              gist={item.url}
              challenge={item.challengeLink}
              dateCompleted={item.dateCompleted}
              difficulty={item.difficulty}
              key={item.key}
            />
          ))}
        </UnmountClosed>
      </div>
    </main>
  );
};

export default Challenges;