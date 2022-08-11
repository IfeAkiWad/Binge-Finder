import React, { Component } from 'react';
import {Grid} from 'semantic-ui-react';
import TVShow from './TVShow'

class TVShowList extends Component {

  // eslint-disable-next-line
  mapAllShows = (props) => {
    if (!!props.searchTerm){
      // eslint-disable-next-line
      return props.shows.map((s) => {
        if (s.name.toLowerCase().includes(props.searchTerm)){
         return (<TVShow show={s} key={s.id} selectShow={props.selectShow}/> ) 
        }
      })
    }
    return props.shows.map( (s)=> <TVShow show={s} key={s.id} selectShow={props.selectShow}/>)
  }

  render() {
    return (
      <div className="TVShowList">
        <Grid>
          {this.mapAllShows()}
        </Grid>
      </div>
    )
  }

}

export default TVShowList;
