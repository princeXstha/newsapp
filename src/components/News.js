import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    constructor(){
        super();
        this.state={
            articles: [],
            loading: false,
            page: 1,
        }
    }
    async componentDidMount(){
        let url ="https://newsapi.org/v2/top-headlines?country=in&apiKey=62c2c30bc94745e69543902d012e19d4&page=1&pageSize=20";
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({articles: parsedData.articles, totalResults : parsedData.totalResults})
    }
    handleNext = async ()=>{
        console.log("abc")
        if(this.state.page +1 > Math.ceil(this.state.totalResults/20)){

        }
        else{
        let url =`https://newsapi.org/v2/top-headlines?country=in&apiKey=62c2c30bc94745e69543902d012e19d4&page=${this.state.page+1}&pageSize=20`;
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            page: this.state.page+1,
            articles: parsedData.articles
        })
    }
    }
    handlePrev = async ()=>{
        console.log("abc");
        let url =`https://newsapi.org/v2/top-headlines?country=in&apiKey=62c2c30bc94745e69543902d012e19d4&page=${this.state.page-1}&pageSize=20`;
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            page: this.state.page -1,
            articles: parsedData.articles
        })
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
        <div className="d-flex justify-content-between bd-highlight mb-3 mt-3">
        <button disabled={this.state.page<=1} type="button" className="btn btn-primary" onClick={this.handlePrev}>&larr; Previous</button>
        <button type="button" className="btn btn-primary" onClick={this.handleNext}>Next &rarr;</button>
        </div>
      </div>
    )
  }
}

export default News
