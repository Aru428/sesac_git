import io from "socket.io-client";
import { useEffect, useRef } from "react";

const socket = io.connect("http://localhost:8000", { autoConnect: false });
export default function Practice1() {
  const initSocketConnect = () => {
    if (!socket.connected) socket.connect();
  };

  useEffect(() => {
    initSocketConnect();

    socket.on("resHello", (res) => {
      console.log(res);
      resultMsg(res);
    });

    socket.on("resStudy", (res) => {
      console.log(res);
      resultMsg(res);
    });

    socket.on("resBye", (res) => {
      console.log(res);
      resultMsg(res);
    });
  }, []);

  const resultMsg = (res) => {
    result.current.innerText = res.msg;
  };

  const hello = () => {
    socket.emit("hello", { data: "hello" });
  };
  const study = () => {
    socket.emit("study", { data: "study" });
  };
  const bye = () => {
    socket.emit("bye", { data: "bye" });
  };

  const result = useRef(null);

  return (
    <>
      <h3>소켓 실습 1</h3>
      <button onClick={hello}>hello</button>
      <button onClick={study}>study</button>
      <button onClick={bye}>bye</button>
      <p ref={result}></p>
    </>
  );
}
