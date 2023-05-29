import "./LoginImage.scss";

function LoginImage() {
    return(
        <div className="d-flex row justify-content-center" style={{marginRight: 50}}>
          <h1 style={{ textAlign: "center", color: '#00816D' }}>
            Conheça sua comunidade profissional!
          </h1>
          <div className="draw-image"></div>
        </div>
    )
}

export default LoginImage;