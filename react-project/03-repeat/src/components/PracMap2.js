import { useState } from "react";

function PracMap2() {
  const [inputWriter, setInputWriter] = useState("");
  const [inputTitle, setInputTitle] = useState("");
  const [inputSearch, setInputSearch] = useState("");
  const [comment, setComment] = useState([
    {
      writer: "코디",
      title: "codicodi",
    },
  ]);
  const [result, setResult] = useState([]);
  const [searchType, setSearchType] = useState("writer");

  const addComment = () => {
    let newComment = {
      writer: inputWriter,
      title: inputTitle,
    };

    setComment([...comment, newComment]);
    setInputWriter("");
    setInputTitle("");
  };

  const searchComment = () => {
    let searchResult = comment.filter((item) => {
      // console.log(item); // comment에 대한 각 원소(객체)
      // console.log(item[searchType]); // 검색 조건(key)에 대한 value 값
      // console.log(item[searchType].includes(search)); // true or false

      // 검색결과 없음; null 반환
      if (!item[searchType].includes(inputSearch)) {
        return null;
      }

      // 검색결과 있음; 검색결과(배열) 반환
      return item;
    });

    // 검색 결과 state 설정
    setResult(searchResult);
    setInputSearch("");
  };

  const selectSearchType = (e) => {
    // console.log(e.target.value);
    // select option 상태 설정
    setSearchType(e.target.value);
  };

  return (
    <div>
      <form>
        <fieldset>
          <label htmlFor="wirter2">작성자 : </label>
          <input
            id="wirter2"
            type="text"
            name="writer"
            value={inputWriter}
            onChange={(e) => setInputWriter(e.target.value)}
          />{" "}
          <label htmlFor="title2">제목 : </label>
          <input
            id="title2"
            type="text"
            name="title"
            value={inputTitle}
            onChange={(e) => setInputTitle(e.target.value)}
          />{" "}
          <button type="button" onClick={addComment}>
            작성
          </button>
        </fieldset>
      </form>

      <br />

      <form>
        <select name="type" onChange={selectSearchType}>
          <option value="writer">작성자</option>
          <option value="title">제목</option>
        </select>{" "}
        <input
          type="text"
          name="search"
          placeholder="검색어"
          value={inputSearch}
          onChange={(e) => setInputSearch(e.target.value)}
        />{" "}
        <button type="button" onClick={searchComment}>
          검색
        </button>
      </form>

      <table border={1} style={{ marginTop: "30px", width: "500px" }}>
        <thead>
          <tr>
            <th>번호</th>
            <th>제목</th>
            <th>작성자</th>
          </tr>
        </thead>
        <tbody>
          {comment.map((value, idx) => {
            return (
              <tr key={idx + 1}>
                <td>{idx + 1}</td>
                <td>{value.title}</td>
                <td>{value.writer}</td>
              </tr>
            );
          })}
        </tbody>
      </table>

      {result.length > 0 ? (
        <div>
          <h3>검색 결과</h3>
          <table border={1} style={{ marginTop: "30px", width: "500px" }}>
            <thead>
              <tr>
                <th>번호</th>
                <th>제목</th>
                <th>작성자</th>
              </tr>
            </thead>
            <tbody>
              {result.map((value, idx) => {
                return (
                  <tr key={idx + 1}>
                    <td>{idx + 1}</td>
                    <td>{value.title}</td>
                    <td>{value.writer}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      ) : (
        <h3>검색 결과가 없습니다.</h3>
      )}
    </div>
  );
}

export default PracMap2;
