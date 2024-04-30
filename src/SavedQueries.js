export function SavedQueries(params) {
  let currentUser = null;
  if (params.currentUser) {
    currentUser = params.currentUser.user ? params.currentUser.user : "na";
    console.log("current User:", currentUser.user);
  }
  function onSavedQueryClick(savedQuery) {
    params.onQuerySelect(savedQuery);
  }

  function getQueries() {
    return params.savedQueries.map((item, idx) => {
      let trimTitle = item.queryName.substring(0, 30);
      return (
        <li
          key={idx}
          onClick={() => onSavedQueryClick(item)}
          className={
            item.queryName === params.selectedQueryName ? "selected" : ""
          }
        >
          {trimTitle +
            ': "' +
            item.q +
            `" : "` +
            item.language +
            `" : "` +
            item.pageSize +
            `"`}{" "}
        </li>
      );
    });
  }
  let emptyList = [];
  function onResetClick(event) {
    let result = window.confirm(
      "Are you sure you want to reset the saved queries?"
    );
    if (result) {
      params.setSavedQueries(emptyList);
    }
  }

  return (
    <div>
      <ul>
        {params.savedQueries && params.savedQueries.length > 0 ? (
          getQueries()
        ) : (
          <li>No Saved Queries, Yet!</li>
        )}
      </ul>
      <span style={{ display: "block", backgroundColor: "#eee" }}>
        <input
          type="button"
          value="Reset Saved Queries"
          onClick={onResetClick}
        />
      </span>
    </div>
  );
}
