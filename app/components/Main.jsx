var React = require('react');
var Nav = require('Nav');

var Main = (properties) => {
  return (
    <div>
      <Nav/>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-9 offset-sm-3 col-md-10 offset-md-2 main">
            {properties.children}
          </div>
        </div>
      </div>
    </div>
  )
}

module.exports = Main;
