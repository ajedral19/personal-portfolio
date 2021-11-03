import Image from 'next/image'
import Accordion from '../Accordion/accordion'
import style from './resume.module.sass'
import cn from 'classnames'

export default function Resume({ profileData }) {
  return (
    <>
      <p>
        I am a self-thought Graphic Designer and Front-end Developer. In 2017 I
        decided to do some coding and set aside designing. Besides, I love
        watching creepy YouTube videos/Horror Movies every night or dawn with
        lights turned off which make me feel better every time I felt tired of
        creating something.
      </p>
      <h4 className="t-6 uppercase semibold mb-1 mt-3">work experience</h4>
      <div className="accordion mb-3">
        <Accordion data={profileData} />
      </div>
      <button className={cn('btn', style.dlcv_button)}>Download resume</button>
    </>
  )
}
