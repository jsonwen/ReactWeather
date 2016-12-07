var React = require('react');
var {Link} = require('react-router');

// var Examples = React.createClass({
//   render: function() {
//     return (
//       <h3>Examples</h3>
//     );
//   }
// });

var Examples = (properties) => {
  return (
    <div>
      <h3>Examples</h3>
      <p>Here are some locations to try out</p>
      <ol>
        <li><Link to='/?location=Amsterdam'>Amsterdam</Link></li>
        <li><Link to='/?location=Tokyo'>Tokyo</Link></li>
      </ol>
    </div>
  )
}

module.exports = Examples;
