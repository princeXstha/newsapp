import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    constructor(){
        super();
        this.state={
            articles: [],
            loading: false
        }
    }
    async componentDidMount(){
        let url ="https://newsapi.org/v2/top-headlines?country=in&apiKey=62c2c30bc94745e69543902d012e19d4";
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({articles: parsedData.articles})
    }

  render() {
    return (
      <div className='container my-4'>
        <h3>NEWS MONKEY - HEADLINES</h3>
        <div className="row">
        {this.state.articles.map((element)=>{
             return <div className="col md-4" key={element.url}> {/*give a unique key to the thing you are returning*/}
             <NewsItem title={element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,85):""} imageUrl={!element.urlToImage?"https://static.toiimg.com/thumb/msid-111130453,width-1070,height-580,imgsize-194682,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg":element.urlToImage} newsUrl={element.url}/>
             </div>
        })}
        </div>
      </div>
    )
  }
}

export default News
