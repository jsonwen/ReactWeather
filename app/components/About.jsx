var React = require('react');

// var About = React.createClass({
//   render: function() {
//     return (
//       <h3>About</h3>
//     );
//   }
// });

var About = (properties) => {
  return (
    <div>
      <h3 className="page-title">About</h3>
      <p>This is a weather application build on React. I have built this for the Complete React Web App Developer Course.</p>
      <p>
        Here are some of the tools I used:
      </p>
      <ul>
        <li>
          <a href="https://facebook.github.io/react">React</a> - This was the Javascript framework used.
        </li>
        <li>
          <a href="http://openweathermap.org">Open Weather Map</a> - I used Open Weather Map to search for weather data by city name.
        </li>
      </ul>
    </div>
  );
};

module.exports = About;
