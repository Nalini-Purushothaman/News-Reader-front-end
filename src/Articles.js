export function Articles(params) {
  let articles = params.data.articles ? params.data.articles : [];
  console.log(articles);
  let queryName = params.query.queryName ? params.query.queryName : "na";
  let articleCount = params.data.totalResults ? params.data.totalResults : 0;
  let queryText = params.query.q ? params.query.q : "na";
  let queryLanguage = params.query.language ? params.query.language : "na";
  let pageSize = params.query.pageSize ? params.query.pageSize : 0;
  let currentUser = null;
  if (params.currentUser) {
    currentUser = params.currentUser.user ? params.currentUser.user : "na";
    console.log("current User:", currentUser.user);
  }
  return (
    <div className="scroll-container auto">
      <br />
      <div className="box">
        <span className="title">Current Query Details</span>
        Query: {queryName}
        <br />
        Count: {articleCount}
        <br />
        Query text: {queryText}
        {currentUser === "admin" ? (
          <>
            <br />
            Language: {queryLanguage}
            <br />
            Page Size: {pageSize}
          </>
        ) : null}
      </div>
      <ol>
        {articles.map((item, idx) => {
          if (item) {
            if (item.title) {
              if (item.title === "[Removed]") {
                return <li key={idx}>Was Removed</li>;
              }
              //let trimTitle = item.title.substring(0, 30);
              return (
                <li key={idx}>
                  {item.title}
                  <a href={item.url} target="_blank" rel="noreferrer">
                    &nbsp;Link
                  </a>
                </li>
              );
            } else {
              return <li key={idx}>No Title</li>;
            }
          } else {
            return <li key={1}>No Item</li>;
          }
        })}
      </ol>
    </div>
  );
}
