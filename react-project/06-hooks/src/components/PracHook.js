import { useState, useMemo } from "react";

export default function PracHook() {
  const [text, setText] = useState("");
  const [word, setWord] = useState("");

  const findWord = useMemo(() => {
    const words = text.split(" ");
    return words.filter((w) => w.includes(word.trim())).length;
  }, [text, word]);

  return (
    <>
      <h3>useMemo 실습</h3>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <br />
      <input
        type="text"
        value={word}
        onChange={(e) => setWord(e.target.value)}
      />

      {word && (
        <h4>
          "{word}" 단어의 빈도수: {findWord}
        </h4>
      )}
    </>
  );
}
