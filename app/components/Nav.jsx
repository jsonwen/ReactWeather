var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = React.createClass({
  onSearch: function(e) {
    e.preventDefault();
    alert('Not yet wired up');
  },
  render: function() {
    return (
      <nav className="navbar navbar-dark bg-inverse">
        <div id="navbar">
          <nav className="nav navbar-nav float-xs-left">
            <IndexLink to="/" className="nav-item nav-link" activeClassName="active" activeStyle={{fontWeight:'bold'}}>Get Weather</IndexLink>
            <Link to="/about" className="nav-item nav-link" activeClassName="active" activeStyle={{fontWeight:'bold'}}>About</Link>
            <Link to="/examples" className="nav-item nav-link" activeClassName="active" activeStyle={{fontWeight:'bold'}}>Examples</Link>
          </nav>
          <form onSubmit={this.onSearch} className="float-xs-right">
            <input type="text" className="form-control" placeholder="Search..."/>
          </form>
        </div>
      </nav>
    )
  }
});

/*
<nav className="navbar navbar-dark navbar-fixed-top bg-inverse">
  <button type="button" className="navbar-toggler hidden-sm-up" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar" aria-label="Toggle navigation"></button>
  <a className="navbar-brand" href="#">React Weather App</a>
  <div id="navbar">
    <nav className="nav navbar-nav float-xs-left">
      <IndexLink to="/" className="nav-item nav-link" activeClassName="active" activeStyle={{fontWeight:'bold'}}>Get Weather</IndexLink>
      <Link to="/about" activeClassName="active" activeStyle={{fontWeight:'bold'}}>About</Link>
      <Link to="/examples" activeClassName="active" activeStyle={{fontWeight:'bold'}}>Examples</Link>
    </nav>
    <form onSubmit={this.onSearch} class="float-xs-right">
      <input type="text" class="form-control" placeholder="Search...">
    </form>
  </div>
</nav>
*/

module.exports = Nav;
