import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import propTypes from 'prop-types'


export class News extends Component {
    static defaultProps={
        country: 'in',
        pagesize: 12,
        category: 'general'
    }
    static propTypes = {
        country: propTypes.string,
        pagesize: propTypes.number,
        category: propTypes.string
    }
    constructor(){
        super();
        this.state={
            articles: [],
            loading: false,
            page: 1
        }
    }
    async updateNews(){
        let url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=62c2c30bc94745e69543902d012e19d4&page={this.state.page}&pageSize=${this.props.pagesize}`;
        this.setState({loading: true})
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({articles: parsedData.articles,
             totalResults : parsedData.totalResults,
             loading: false})

    }
    async componentDidMount(){
        this.updateNews(1);
    }
    handleNext = async ()=>{
        this.setState({
            page: this.state.page +1
        })
        this.updateNews();
    
    }
    handlePrev = async ()=>{
        this.setState({
            page: this.state.page -1
        })
        this.updateNews();
    }
  render() {
    return (
      <div className='container my-4'>
        <h1 className='text-center'>NEWS MONKEY - HEADLINES</h1>
        {this.state.loading && <Spinner/>}
        <div className="row">
        {!this.state.loading && this.state.articles.map((element)=>{
             return <div className="col md-4" key={element.url}> {/*give a unique key to the thing you are returning*/}
             <NewsItem source={element.source.name} author={element.author} date={element.publishedAt} title={element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,85):""} imageUrl={!element.urlToImage?"https://static.toiimg.com/thumb/msid-111130453,width-1070,height-580,imgsize-194682,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg":element.urlToImage} newsUrl={element.url}/>
             </div>
        })}
        </div>
        <div className="d-flex justify-content-between bd-highlight mb-3 mt-3">
        <button disabled={this.state.page<=1} type="button" className="btn btn-primary" onClick={this.handlePrev}>&larr; Previous</button>
        <button disabled={(this.state.page +1 > Math.ceil(this.state.totalResults/this.props.pagesize))} type="button" className="btn btn-primary" onClick={this.handleNext}>Next &rarr;</button>
        </div>
      </div>
    )
  }
}

export default News
