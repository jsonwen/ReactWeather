var React = require('react');

var WeatherForm = React.createClass({
  onFormSubmit: function(e){
    e.preventDefault();

    var location = this.refs.location.value;

    if (location.length > 0) {
      this.refs.location.value = '';
      this.props.onSearch(location);
    }
  },
  render: function() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <div><input ref="location" className="form-control" type="text" placeholder="Search Weather By City Name"></input></div>
          <div><button className="btn btn-primary btn-hg">Get Weather</button></div>
        </form>
      </div>
    );
  }
});

module.exports = WeatherForm;
