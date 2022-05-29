export const fadeUpObserve = () => {
  var targets = document.querySelectorAll('.observe-fadeUp') // 監視対象を選択
  var targetsArray = Array.prototype.slice.call(targets) // 監視対象を配列に変換（IE対策）

  //IntersectionObserverに渡すコールバック関数
  var cb = function (entries, observer) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        //画面内に入った時に処理開始
        entry.target.classList.add('show') // 画面内に入った要素にshowクラスを付与
        observer.unobserve(entry.target) // 一度発火した後監視を止める
      }
    })
  }
  var options = {
    rootMargin: '0px 0px',
  }

  //IntersectionObserver初期化
  var io = new IntersectionObserver(cb, options)

  targetsArray.forEach((el) => {
    io.observe(el)
  })
}
