import { useCallback, useState } from "react";

export default function PracUseCallback() {
  const [items, setItems] = useState(["Item 1", "Item 2", "Item 3"]);
  const [editing, setEditing] = useState(null);
  const [editText, setEditText] = useState("");

  const handleEdit = useCallback((item) => {
    // console.log("handleEdit : ", item);
    setEditing(item);
    setEditText(item);
  }, []);

  const handleSave = useCallback(
    (itemToSave) => {
      // console.log("handleSave: ", itemToSave);
      setItems(items.map((item) => (item === editing ? itemToSave : item)));
      setEditing(null);
    },
    [items, editing]
  );

  const handleDelete = useCallback(
    (itemToDelete) => {
      // console.log("handleDelete: ", itemToDelete);
      setItems(items.filter((item) => item !== itemToDelete));
    },
    [items]
  );

  return (
    <>
      <h3>useCallback 실습</h3>
      <ul>
        {items.map((value) => (
          <li key={value}>
            {editing === value ? (
              <input
                type="text"
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
              />
            ) : (
              <span>{value} </span>
            )}
            {editing === value ? (
              <button onClick={() => handleSave(editText)}>Save</button>
            ) : (
              <>
                <button onClick={() => handleEdit(value)}>Edit</button>
                <button onClick={() => handleDelete(value)}>Delete</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </>
  );
}
