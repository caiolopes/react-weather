import React from 'react';

// export default class About extends React.Component {
//   render() {
//     return (
//       <h3>About Component</h3>
//     );
//   }
// }

// Stateless Functional Component
const About = (props) => {
  return (
    <div>
      <h1 className="text-center">About</h1>
      <p>This is a weather application build on React.</p>
      <p>I have built this for The Complete React Web App Developer Course.</p>
      <p>Here are some of the tools I used:</p>
      <ul>
        <li>React</li>
        <li>Open Weather Map</li>
      </ul>
    </div>
  );
}

export default About;
