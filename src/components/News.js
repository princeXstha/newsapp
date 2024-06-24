import React, { useState, useEffect} from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import propTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";



const News =(props)=>{
    const [articles, setArticles]= useState([])
    const [loading, setLoading]= useState(true)
    const [page, setPage]= useState(1)
    const [totalResults, settotalResult]= useState(0);

    const updateNews = async ()=>{
        const url =`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=62c2c30bc94745e69543902d012e19d4&page=${page}&pageSize=${props.pagesize}`;
        setLoading(true)
        let data = await fetch(url);
        let parsedData = await data.json();
        setArticles(parsedData.articles);
        settotalResult(parsedData.totalResults)
        setLoading(false);
    }
    useEffect(()=>{
            updateNews();
    })
    const fetchMoreData = async () => {
        const url =`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=62c2c30bc94745e69543902d012e19d4&page=${page}&pageSize=${props.pagesize}`;
        setPage(page+1)
        let data = await fetch(url);
        let parsedData = await data.json();
        setArticles(articles.concat(parsedData.articles))
        settotalResult(parsedData.totalResults)
      };
    const cat = props.category;
    return (
        <>
      <div className='container my-4'>
        <h1 className='text-center'>NEWS MONKEY - HEADLINES</h1>
            <h2 className='text-center'>{cat.toUpperCase()}</h2>
        {loading && <Spinner/>}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<Spinner/>}
        >
        <div className="row">
        {articles.map((element)=>{
            
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
News.defaultProps={
    country: 'in',
    pagesize: 12,
    category: 'general'
}
News.propTypes = {
    country: propTypes.string,
    pagesize: propTypes.number,
    category: propTypes.string
}

export default News
