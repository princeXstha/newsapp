import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import propTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";



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
            loading: true,
            page: 1,
            totalResults: 0
        }
    }
    async updateNews(){
        const url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=62c2c30bc94745e69543902d012e19d4&page={this.state.page}&pageSize=${this.props.pagesize}`;
        this.setState({loading: true})
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({articles: parsedData.articles,
             loading: false,
             totalResults : parsedData.totalResults})

    }
    async componentDidMount(){
        this.updateNews(1);
    }
    fetchMoreData = async () => {
          this.setState({
                page: this.state.page +1})
        const url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=62c2c30bc94745e69543902d012e19d4&page={this.state.page}&pageSize=${this.props.pagesize}`;
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({articles: this.state.articles.concat(parsedData.articles),
             totalResults : parsedData.totalResults})
      };
  render() {
    const cat = this.props.category;
    return (
        <>
      <div className='container my-4'>
        <h1 className='text-center'>NEWS MONKEY - HEADLINES</h1>
            <h2 className='text-center'>{cat.toUpperCase()}</h2>
        {this.state.loading && <Spinner/>}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length != this.state.totalResults}
          loader={<Spinner/>}
        >
        <div className="row">
        {this.state.articles.map((element)=>{
            
             return <div className="col md-4 mt-2" key={element.url}> {/*give a unique key to the thing you are returning*/}
             <NewsItem source={element.source.name} author={element.author} date={element.publishedAt} title={element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,85):""} imageUrl={!element.urlToImage?"https://static.toiimg.com/thumb/msid-111130453,width-1070,height-580,imgsize-194682,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg":element.urlToImage} newsUrl={element.url}/>
             </div>
        })}
        </div>
        </InfiniteScroll>
      </div>
      </>
    )
  }
}

export default News
