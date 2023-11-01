import React from 'react';
import CodeBlock from '../components/CodeBlock';

const About = () => {
  const code = `
    class Me:
      def __init__(self):
        self.name = "Mia Zhang"
        self.MBTI = "ISTJ"
        self.hometown = "GuYuan, NingXia, CN"
        self.curr_location = "Christchurch, NZ"
        self.grad_school = "AUT"
        self.experiences = "Typescript, React, Node.js, Python, etc"
  `;
  return (
    <div className="page page__about">
      <h1>About</h1>
      <CodeBlock language="python" code={code} />
    </div>
  );
};

export default About;
