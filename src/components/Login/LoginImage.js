import feedLoginImage from "../../assets/images/feed_draw_login 1.svg";

function LoginImage() {
  return (
    <>
    <div className="d-flex row justify-content-center">
      <h2 className="p-0 mb-4" style={{ textAlign: "center", color: "#00816D" }}>
        Conheça sua comunidade profissional!
      </h2>
        <img src={feedLoginImage} alt="feed" style={{width: '65%'}} />
        <div className="row m-5 mt-4"></div>
    </div>
    </>
  );
}

export default LoginImage;
