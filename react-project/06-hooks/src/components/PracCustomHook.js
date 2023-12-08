import useWindowSize from "../hooks/useWindowSize";

export default function PracCustomHook() {
  const { width, height } = useWindowSize();

  return (
    <>
      <h3>custom Hook 실습</h3>
      <p>너비: {width}</p>
      <p>높이: {height}</p>
    </>
  );
}
