import React from 'react'

const NewsItem =(props)=> {

    let {title, description, imageUrl, newsUrl, author, date, source} = props;
    return (
      <div>
        <div className="card" style={{width: "18rem"}}>
        <img src={imageUrl} alt="..." / >
        <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <span class="position-absolute top-0 start-50 translate-middle badge rounded-pill bg-info">
              {source}
            </span>
            <p className="card-text">{description}</p>
            <p class="card-text"><small class="text-muted">By:{!author || author === ""?"Unknown":author}  on {new Date(date).toGMTString()}</small></p>
            <a href={newsUrl} rel="noreferrer" target='_blank' className="btn btn-primary">READ MORE...</a>
        </div>
</div>
      </div>
    )
}

export default NewsItem
