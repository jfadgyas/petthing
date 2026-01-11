import Link from "next/link"

import ShowArticles from "./components/ShowArticles"

import ShowImage from "./components/ShowImage"

import style from './page.module.scss'

const HomePage = async () => {

    // Sitename: petting, pet-thing
    // Next 15 calls are not cached!!!  

    // await getAllPosts('cat')
    // await getPost('')
    // await postArticle()

    // GOOGLE Analytics!!!

    return (
        <main id='home'>
            <article className={style.article} id='hero'>
                <div className={style.imgwrapper}>
                    <ShowImage
                        src='bgimage_sql4lb'
                        alt='background'
                        fill={true}
                        // priority
                        sizes='100vw'
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