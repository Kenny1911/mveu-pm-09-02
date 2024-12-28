import React, {useState} from 'react';
import img1 from './../img/gallery/gallery-1.jpg'
import img2 from './../img/gallery/gallery-2.jpg'
import img3 from './../img/gallery/gallery-3.webp'
import img4 from './../img/gallery/gallery-4.jpg'
import img5 from './../img/gallery/gallery-5.jpg'
import img6 from './../img/gallery/gallery-6.jpg'

const images = [img1, img2, img3, img4, img5, img6];

const Calc = () => {
  const [index, setIndex] = useState<number>(0)

  const prev = () => {
    let i = index - 1

    if (i < 0) {
      i = images.length - 1
    }

    setIndex(i)
  }

  const next = () => {
    let i = index + 1

    if (i >= images.length) {
      i = 0
    }

    setIndex(i)
  }

  return (
    <>
      <div className="gallery">
        <div className="gallery__img">
          <img src={images[index]} alt=""/>
        </div>

        <div className="gallery__controls">
          <button onClick={() => prev()}>Предыдущая</button>
          <button onClick={() => next()}>Следующая</button>
        </div>
      </div>
    </>
  )
}

export default Calc