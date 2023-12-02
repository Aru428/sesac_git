import { useState } from "react";

function PracMap() {
  const infoList = [{ id: 1, name: "코디", email: "codi@gmail.com" }];

  const [info, setInfo] = useState(infoList);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const addInfo = () => {
    const newInfoList = infoList.concat({
      id: infoList[infoList.length - 1].id + 1,
      name: name,
      email: email,
    });
    setInfo(newInfoList);
    setName("");
    setEmail("");
  };

  const enterAddInfo = (e) => {
    if (e.key === "Enter") {
      const newInfoList = infoList.concat({
        id: infoList[infoList.length - 1].id + 1,
        name: name,
        email: email,
      });
      setInfo(newInfoList);
      setName("");
      setEmail("");
    }
  };

  const deleteInfo = (id) => {
    const newInfoList = info.filter((value) => value.id !== id);
    setInfo(newInfoList);
  };

  return (
    <>
      <input
        type="text"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
        placeholder="이름"
      />
      <input
        type="text"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        onKeyDown={enterAddInfo}
        placeholder="이메일"
      />
      <button onClick={addInfo}>등록</button>

      {info.map((value) => (
        <h3
          style={{ cursor: "pointer" }}
          onDoubleClick={(e) => {
            deleteInfo(value.id);
          }}
          key={value.id}
        >
          {value.name}: {value.email}
        </h3>
      ))}
    </>
  );
}

export default PracMap;
