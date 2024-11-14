import Image from 'next/image'

import style from './style/pageheader.module.scss'

type Props = {
    title: string
    animal: string
    img: string
}

const PageHeader = (props: Props) => {
    return (
        <div
            className={`${style['header']} ${style[`header--${props.animal}`]}`}
            >
            <div className={style.imgwrapper}>
                <Image
                    className={style.img}
                    src={props.img}
                    alt='background'
                    fill
                    priority
                    sizes="100vw"
                />
            </div>
            <h1 className={style.title}>{props.title}</h1>
        </div>
    )
}

export default PageHeader