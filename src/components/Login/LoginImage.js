import feedLoginImage from "../../assets/images/feed_draw_login 1.svg";


function LoginImage() {
    return(
        <div className="d-flex row justify-content-center">
          <h2 className="mb-3" style={{ textAlign: "center", color: '#00816D' }}>
            Conheça sua comunidade profissional!
          </h2>
          <picture>
            <source media="(max-width: 768px)" srcSet={feedLoginImage} />
            <source media="(max-width: 1080px)" srcSet={feedLoginImage} />
          </picture>
        </div>
    )
}

export default LoginImage;