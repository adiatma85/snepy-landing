import "./Header.scss"

function Header() {
  return (
    <div className="jumbotron mb-5">
      <div className="hero d-flex flex-column container-header">
        {/* Item 1 */}
          <h1 className="jumbotron__text jumbotron__text__main jumbotron__text__color-white">Bantal Leher <br/> Jaman Now Paling Hit</h1>
          <h2 className="jumbotron__text jumbotron__text__color-white mt-5">Pegal dan kaku leher hilang dalam 5 menit</h2>
          <div className="d-flex justify-content-end pt-5">
            <div className="btn-buy jumbotron__text__btn-buy jumbotron__text__color-white me-4">Pre-Order Sekarang</div>
            <a className="btn-buy learn-more jumbotron__text__color-white jumbotron__text__btn-buy" href="https://google.com">Pelajari lebih</a>
          </div>
        <div>
        </div>
      </div>
    </div>
  )
}

export default Header;
