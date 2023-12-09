import { useEffect, useState } from "react";

export default function PhotoPage() {
  const [photos, setPhotos] = useState(null);

  const getPhotos = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/photos");
    const photo = await res.json();
    setPhotos(photo.slice(0, 50));
  };

  useEffect(() => {
    getPhotos();
  }, []);

  return (
    <>
      <h3>여기는 사진 페이지 입니다</h3>
      {photos ? (
        <>
          {photos.map((value) => (
            <ul key={value.id}>
              <li>번호: {value.id}</li>
              <li>사진 제목: {value.title}</li>
              <li>
                <img src={value.thumbnailUrl} alt="사진" />
              </li>
            </ul>
          ))}
        </>
      ) : (
        <h3>Loading...</h3>
      )}
    </>
  );
}
