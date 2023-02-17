
import React from 'react';
import SearchForm from './components/searchform';
import axios from 'axios'
import ImagesList from './components/imagesList'
import './App.css';

class App extends React.Component{
  state = {
  param : {}
  }



  sendFuncForBackEvent = async (para) => {
let result =  await axios.get('https://api.unsplash.com/search/photos', {
    headers : {Authorization:" Client-ID YRwg-XLfb91zJ_zl-CbrjbzoTFM5NrYM_-noX3MhKbs"},
    params : {
      query: para,
      per_page : 30
    },

  })


this.setState({
  param : result.data
}); 
}

  render(){
    return(
      <div className='body'>
        <div className='searchbox' >
            <SearchForm  sendFuncForBackEvent={this.sendFuncForBackEvent}/>
            <ImagesList sendResultResponse={this.state.param} />
        </div>
      </div>
    )
  }
}
export default App;
