import Image from "next/image"
import Link from "next/link"

import ShowArticles from "./components/ShowArticles"

import bgimage from '../public/bgimage.jpg'

import style from './page.module.scss'

const HomePage = () => {

    // Sitename: petting, pet-thing
    // Next 15 calls are not cached!!!  

    return (
        <main id='home'>
            <article className={style.article} id='hero'>
                <div className={style.imgwrapper}>
                    <Image
                        src={bgimage}
                        alt='background'
                        fill
                        priority
                    />
                </div>
                <div className={style.details}>
                    <h1 className={style.title}>
                        Welcome to PetThing
                    </h1>
                    <h2 className={style.subtitle}>Your Trusted Guide to Pet Care and Wellness</h2>
                    <p className={style.motto}>
                        Discover expert tips, health advice, and fun facts to help you understand and nurture the animals you love. From health insights to behavior tips, PetThing is your go-to for a happier, healthier life with your pets.
                    </p>
                    <Link
                        className={style.link}
                        href='#cat'
                        >
                        Explore Now
                    </Link>
                </div>
            </article>
            <article className={style.article} id='cat'>
                <h2 className={style.sectionTitle}>Find out more about your cat's health</h2>
                <ShowArticles animal='cat' />
                <Link
                    className={style.link}
                    data-animal='cat'
                    href='cat'
                    >more about cats
                </Link>
            </article>
            <article className={style.article} id='dog'>
                <h2 className={style.sectionTitle}>Discover more about the health of your dog</h2>
                <ShowArticles animal='dog' />
                <Link
                    className={style.link}
                    data-animal='dog'
                    href='dog'
                    >more about dogs
                </Link>
            </article>
            {/* <article className={style.article} id='bird'>
                <h2 className={style.sectionTitle}>Learn more about your bird's health</h2>
                <ShowArticles animal='bird' />
                <Link
                    className={style.link}
                    data-animal='bird'
                    href='bird'
                    >more about birds
                </Link>
            </article> */}
        </main>
    )
}

export default HomePage