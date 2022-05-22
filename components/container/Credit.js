const contact = `https://github.com/cheers-coffee`;

function Credit() {
  return (
    <div className="contentWrapper credit">
      <div className="credit-title">만든 사람들</div>
      <div className="row-content">
        <div className="credit-info">
          <img className="large-icon" src="../img/songinho.jpg" />
          <div className="credit-name">송인호</div>
          <div className="credit-text">블록체인 개발</div>
          <div className="credit-link">
            <a href="https://github.com/ImInnocent"><img className="credit-link-item" src="/img/github.png" /></a>
            <a href="https://cheers-coffee-front.vercel.app/user/goldfish"><img className="credit-link-item" src="/img/coffee-icon.png" /></a>
          </div>
        </div>
        <div className="credit-info">
          <img className="large-icon" src="../img/yeonji.jpg" />
          <div className="credit-name">최연지</div>
          <div className="credit-text">웹 프론트엔드 개발</div>
          <div className="credit-link">
            <a href="https://github.com/dearyeon"><img className="credit-link-item" src="/img/github.png" /></a>
            <a href="https://cheers-coffee-front.vercel.app/user/dearyeon"><img className="credit-link-item" src="/img/coffee-icon.png" /></a>
          </div>
        </div>
      </div>
      <div className="credit-contact">
        <a href={contact}><img className="mini-icon" src="../img/github.png" /></a>
      </div>
    </div>
  );
}

export default Credit;
