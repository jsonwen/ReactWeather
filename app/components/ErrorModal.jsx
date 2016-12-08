var React = require('react');

var ErrorModal = React.createClass({
  getDefaultProps: function() {
    title: 'Error'
  },
  propTypes: {
    title: React.PropTypes.string,
    message: React.PropTypes.string.isRequired
  },
  componentDidMount: function() {
    $('#error-modal').modal('show');
  },
  render: function() {
    var {title, message} = this.props;
    return (
      <div id="error-modal" className="modal fade bd-example-modal-sm" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-sm">
          <div className="modal-content">
            <h1>{title}</h1>
            <p>{message}</p>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = ErrorModal;
