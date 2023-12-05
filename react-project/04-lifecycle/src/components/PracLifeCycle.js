import { useEffect, useState } from "react";
import axios from "axios";

function PracLifeCycle() {
  const [post, setPost] = useState([]);

  //   useEffect(() => {
  //     axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
  //       console.log(res.data);
  //       setTimeout(() => setPost(res.data), 2000);
  //     });
  //   }, []);

  const getPost = async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    setTimeout(() => setPost(response.data), 2000);
  };

  useEffect(() => {
    getPost();
  }, []);

  // 마운트되고 2초 뒤에 post의 값을 fakePost의 값으로 변경
  // setTimeOut
  return (
    <>
      <h3 className="PracLifeCycle__title">📬Post List</h3>
      <div className="PracLifeCycle__box__container">
        {post.length === 0 ? (
          <h3>Loading...</h3>
        ) : (
          post.map((value) => {
            return (
              <div className="PracLifeCycle__box" key={value.id}>
                <div>
                  <span style={{ color: "rgb(67, 135, 237)" }}>
                    No. {value.id}{" "}
                  </span>
                  <span style={{ opacity: 0.5 }}>- {value.title}</span>
                </div>
                <div>{value.body}</div>
              </div>
            );
          })
        )}
      </div>
    </>
  );
}

export default PracLifeCycle;
