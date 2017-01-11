var React = require('react');

var MusicList = React.createClass({

  render: function() {
    console.log('4')
        console.log('props', this.props)
    var choons = this.props.music.map(function(choon, index) {
      return (
        <li key={index}> 
          <p>Title: {choon["im:name"]["label"]}</p>
          <p>By:{choon["im:artist"]["label"]}</p>
          <img src={choon["im:image"][2]["label"]}/>
        </li>
         /* key={index}
          title={choon["im:name"]["label"]}
          artist={choon["im:artist"]["label"]}
          image={choon["im:image"][2]["label"]}/>*/
        );
    })
    return (
      <ul>
      { choons }
      </ul>
      )
  }
  });


module.exports = MusicList;