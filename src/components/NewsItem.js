import React from 'react'

const NewsItem = (props) => {
  let { title, description, imageUrl, newsUrl, author, date, source } = props;
  return (
    <div className="card">

      <div style={{ display: "flex", justifyContent: "flex-end", position: "absolute", right: 0 }}>
        <span className="badge rounded-pill bg-danger">{source}</span>
      </div>
      <img src={imageUrl ? imageUrl : "https://images.macrumors.com/t/DiZ8FQQFCiSyWFWSI7-km8dofoA=/2500x/article-new/2023/09/iPhone-15-Rumor-Report-Card-2.jpg"} className="card-img-top" alt="..." />

      <div className="card-body">

        <h5 className="card-title">{title}...</h5>
        <p className="card-text">{description}...</p>
        <p className="card-text"><small className="text-body-secondary">By {author ? author : "Unknown"} on {new Date(date).toUTCString()}</small></p>
        <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-primary">Read More</a>
      </div>

    </div>
  )
}

export default NewsItem
