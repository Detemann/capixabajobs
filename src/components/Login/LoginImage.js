import "./LoginImage.scss";

function LoginImage() {
    return(
        <div className="d-flex row justify-content-center">
          <h1 style={{ textAlign: "center", color: '#00816D' }}>
            Conheça sua comunidade profissional!
          </h1>
          <img src="../../assets/images/feed_draw_login 1.svg" class="img-fluid draw-image" alt="pessoa no computador" />
        </div>
    )
}

export default LoginImage;