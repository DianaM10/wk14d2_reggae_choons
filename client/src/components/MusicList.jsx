var React = require('react');

var MusicList = React.createClass({

  render: function() {
    console.log('4')
        console.log('props', this.props)
    var choons = this.props.music.map(function(choon, index) {
      return (
        <MusicList
          key={index}
          title={choon["im:name"]["label"]}
          artist={choon["im:artist"]["label"]}
          image={choon["im:image"][2]["label"]}/>
        );
    })
    return (
      <div>
      { choons }
      </div>
      )
  }
  });


module.exports = MusicList;