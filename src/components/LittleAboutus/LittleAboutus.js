import React from 'react'
import '../../global.css'
import '../../styles/LittleAboutus.css'
import ArcheryCenter from '../../img/archerycentre.jpg'
import AboutImg1 from '../../img/about_img1.jpg'
import AboutImg2 from '../../img/about_img2.jpg'
import AboutImg3 from '../../img/about_img3.jpg'

export default function LittleAboutus() {
  return (
    <>
      <section className='about_section'>
        <div className="container">
          <div className='about_content'>
            <img src={ArcheryCenter} alt="ArcheryCenter" />
            <div className='about_content2'>
              <h2>Немного о нас</h2>
              <p className='about_text'>Стрельба из лука – олимпийский вид спорта, в котором спортсмены соревнуются в точности стрельбы из лука. Победителем в стрельбе из лука является спортсмен или команда, которая наберёт больше очков, согласно правилам соревнований. Соревнования по стрельбе из лука проводятся как между мужчинами, так и между женщинами. </p>
              <p className='about_text2'>
                Соревнования по стрельбе из лука проводятся как на открытом воздухе, так и в помещении. Стрельба на соревнованиях ведется сериями по 3 или 6 стрел.
              </p>
            </div>
          </div>

          <div className='about_infos'>
            <div className='about_info'>
              <img src={AboutImg1} alt="img" />
              <h2>Правила стрельбы из лука</h2>
              <p className='about_info-text'>В помещении стрельба ведется с расстояний в 18, 30 или 50 метров (для мужчин и женщин). На открытом воздухе расстояние до мишеней составляет 30, 50, 70 и 90 метров для мужчин и 30, 50, 60 и 70 метров для женщин. На Олимпийских играх стрельба из лука ведется только с расстояния 70 метров.</p> <br />
              <p className='about_info-text'>Соревнования по стрельбе из лука проводятся как на открытом воздухе, так и в помещении. Стрельба на соревнованиях ведется сериями по 3 или 6 стрел. По стандартам FITA на серию из 3 стрел даётся 2 минуты, а на серию из 6 стрел 4 минуты.</p>
            </div>
            <div className='about_info'>
              <img src={AboutImg2} alt="img" />
              <h2>Правила стрельбы из лука</h2>
              <p className='about_info-text'> <strong>Стрельба из лука</strong> — это искусство, практика, или навык метания стрелы с использованием лука. Она исторически использовалась для охоты, борьбы и войны. Однако, в наше время, ее основное назначение — развлечение людей. Того, кто практикует стрельбу из лука, как правило, называют «стрелками» или «лучниками».</p>
              <p className='about_info-text'>Если верить ученым, лук были изобретен в конце палеолита и начале мезолита. Самые старые свидетельства его применения в Европе нашли в Стелморе в Оренбургской долине, что к северу от Гамбурга (Германия). Была установлена дата.</p>
            </div>
            <div className='about_info'>
              <img src={AboutImg3} alt="img" />
              <h2>Правила стрельбы из лука</h2>
              <p className='about_info-text'>В помещении стрельба ведется с расстояний в 18, 30 или 50 метров (для мужчин и женщин). На открытом воздухе расстояние до мишеней составляет 30, 50, 70 и 90 метров для мужчин и 30, 50, 60 и 70 метров для женщин. На Олимпийских играх стрельба из лука ведется только с расстояния 70 метров.</p> <br />
              <p className='about_info-text'>Соревнования по стрельбе из лука проводятся как на открытом воздухе, так и в помещении. Стрельба на соревнованиях ведется сериями по 3 или 6 стрел. По стандартам FITA на серию из 3 стрел даётся 2 минуты, а на серию из 6 стрел 4 минуты.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
