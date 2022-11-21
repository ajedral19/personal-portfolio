import { Fragment } from "react"
import cn from 'classnames'
import style from './Banner.module.sass'
import Image from 'next/image'
import HeroImage from '/assets/images/hero.png'

const Banner = ({ }) => {
    return (

        <Fragment>
            <header id="header" className={cn(style.banner_main)}>
                <div className={cn(style.banner_main__banner)}>
                    <div className={cn(style.heading)}>
                        <div className={cn(style.stripe)}>
                            <span className={cn(style.stripe__line)}></span>
                            <span className={cn(style.stripe__line, style.stripe__line_large)}></span>
                        </div>
                        <div className={cn(style.container)}>
                            <div className={cn(style.heading__header)}>
                                <h1>
                                    <span className={cn(style.title, "mb-1")}>
                                        knows how to <span className={cn(style.typing)}>any</span>
                                    </span>
                                    <span className={cn(style.name)}>Your name</span>
                                </h1>
                            </div>
                        </div>
                        <div className={cn(style.hero)}>
                            <div className={cn(style.container)}>
                                <span className={cn(style.hero__image)}>
                                    <Image src={HeroImage} layout="intrinsic" objectFit="contain" alt="" />
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </header>


            {/* <header id="header" className={cn('top-page', style.topPage)}>
                <div className={style.banner}>
                    <div className={style.heading}>
                        <div className={style.strips}>
                            <span className={style.strip}></span>
                            <span className={cn(style.strip, style.large)}></span>
                        </div>
                        <div className={cn('container', style.topPageContainer)}>
                            <h1>
                                <div className={style.title}>
                                    knows how to <span className={style.typing}>{word}</span>
                                </div>
                                <div className={style.name}>AJ Power</div>
                            </h1>
                        </div>
                        <div className={cn(style.heroWrapper)}>
                            <div className={cn(style.hero, 'container', style.container)}>
                                <span className={cn(style.img, 'block')}>
                                    <Image
                                        layout="intrinsic"
                                        objectFit="contain"
                                        src={hero}
                                        alt="hero image"
                                    />
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </header> */}



        </Fragment>

    )
}


export default Banner