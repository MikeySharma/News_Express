import React, { useState, useEffect } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';
import NavBar from './NavBar';
import LoadingBar from 'react-top-loading-bar'


const NewsContainer = (props) => {

  const capitalizeFirstLetter = (word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }

  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const [progress, setProgress] = useState(0);

  const [searchData, setSearchData] = useState('general');


  // document.title = `NewsExpress - ${capitalizeFirstLetter(searchData)}`;

  const updateNews = async () => {
    try{
    setProgress(10);
      const url=`https://newsapi.org/v2/everything?q=${searchData}&apiKey=${props.apiKey}&page=${page}&pagesize=${props.pageSize}`
    let data = await fetch(url);
    setProgress(50);
    let parsedData = await data.json();
    setProgress(70);
    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    setLoading(false);
    setProgress(100);
    } catch (error){
      throw new Error (error);
    }
  }
  useEffect(() => {
    setPage(page + 1)
    updateNews();
    // eslint-disable-next-line
  }, [])





  const fetchMoreData = async () => {
    try{
      const url=`https://newsapi.org/v2/everything?q=${searchData}&apiKey=${props.apiKey}&page=${page}&pagesize=${props.pageSize}`
      setPage(page + 1);
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults);
    } catch(error){
    throw new Error ("Fetching Failed");
    }
  }


  return (
    <>
       <NavBar setSearchData={setSearchData} updateNews={updateNews} />
          <LoadingBar
            color='#f11946'
            progress={progress}
          />
      <h1 className="text-center" style={{ margin: "35px 0" }}>NewsExpress - Top {capitalizeFirstLetter(searchData)} Headlines</h1>
      {loading && <Spinner />}

       <InfiniteScroll
        dataLength={articles.length} //This is important field to render the next data
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<Spinner />}
      >
        <div className="container">
          <div className="row">
            {articles.filter((item)=>{
              return searchData.toLowerCase() ===''? item : item.title.toLowerCase().includes(searchData);
            }).map((element,index) => {
              return (

                <div className="col-md-4 my-2" key={index}>
                  <NewsItem title={element.title ? element.title.slice(0, 35) : element.title = "Title Not Found"} description={element.description ? element.description.slice(0, 70) : element.description = "Description Not Found"} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                </div>

              )
            })}
          </div>
        </div>
      </InfiniteScroll>
    </>
  )
}

export default NewsContainer
NewsContainer.defaultProps = {
  country: "in",
  pageSize: 8,
  category: "science"
}
NewsContainer.propTypes = {
  country: PropTypes.string,
  category: PropTypes.string,
  pageSize: PropTypes.number
}
