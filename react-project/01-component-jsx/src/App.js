import "./App.css";
import FuncComponent from "./components/FuncComponent";
import ClassComponent from "./components/ClassComponent";
import JsxPracComponent from "./components/JsxPracComponent";
import FuncPropsEx from "./components/FuncPropsEx";
import Section from "./components/Section";
import ClassPropsEx from "./components/ClassPropsEx";
import PropsPrac from "./components/PropsPrac";
import PropsPrac2 from "./components/PropsPrac2";
import PropsPrac3 from "./components/PropsPrac3";

function App() {
  return (
    <div>
      <FuncComponent />
      {/* <FuncComponent></FuncComponent> */}

      <ClassComponent />
      <JsxPracComponent />

      <FuncPropsEx title="SeSAC" content="hello world" number={5}></FuncPropsEx>
      <FuncPropsEx number={5} />

      <Section title="SeSAC 영역">
        <div>SeSAC 영역의 content입니다.</div>
      </Section>
      <Section title="코딩온 영역">
        <h5>코딩온 영역의 content입니다.</h5>
      </Section>

      <ClassPropsEx content="hello world" number={5}></ClassPropsEx>

      <PropsPrac food="햄버거"></PropsPrac>
      <PropsPrac />
      <PropsPrac2
        title="나의 하루는 4시 40분에 시작된다"
        author="김유진"
        price="13,500"
        type="자기계발서"
      ></PropsPrac2>
      <PropsPrac3 text="props" valid="콘솔 띄우기 성공!"></PropsPrac3>
    </div>
  );
}

export default App;
