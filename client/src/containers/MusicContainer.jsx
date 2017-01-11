var React = require('react');
var MusicList = require('../components/MusicList');

var MusicContainer = React.createClass({

  getInitialState: function() {
    console.log("1")
    return {
      music: []
    };
  },

  componentDidMount: function() {
    console.log("2")

    var url ='https://itunes.apple.com/us/rss/topsongs/limit=25/genre=24/json';
    var request = new XMLHttpRequest();
    request.open('GET', url);
    request.onload = function() {
      var data = JSON.parse(request.responseText)['feed']['entry'];
      console.log("data", data);
      this.setState({
        music: data
      });
    }.bind(this);
    request.send(null);
  },

  render: function() {
    console.log("3")

    return (
      <div >
        <h1>Top 25 Reggae Tunes</h1>
        <MusicList music={this.state.music}/>
      </div>
      );
  }
});

module.exports = MusicContainer;