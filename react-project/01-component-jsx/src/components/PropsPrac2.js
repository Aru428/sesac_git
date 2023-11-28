function PropsPrac2({ title, author, price, type }) {
  return (
    <>
      <div className="PropsPrac2__box">
        <h2 className="PropsPrac2__title">이번주 베스트셀러</h2>
        <div className="PropsPrac2__book"></div>
        <h3>{title}</h3>
        <div className=".PropsPrac2__text">
          <div>저자: {author}</div>
          <div>판매가: {price}원</div>
          <div>구분: {type}</div>
        </div>
      </div>
    </>
  );
}

export default PropsPrac2;
