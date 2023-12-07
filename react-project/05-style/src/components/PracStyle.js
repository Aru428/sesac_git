import "../styles/larva.scss";

export default function PracStyle() {
  return (
    <>
      <div className="larva">
        <div className="body1">
          <div className="eye eye-white">
            <div className="eye eye-black"></div>
          </div>
        </div>
        <div className="body2"></div>
        <div className="body3"></div>
        <div className="body4"></div>
        <div className="body5"></div>

        {/*  process.env.PUBLIC_URL: /public 폴더 경로 */}
        <img
          className="grass"
          src={process.env.PUBLIC_URL + "/images/grass.png"}
          alt="잔디"
        />
      </div>
    </>
  );
}
