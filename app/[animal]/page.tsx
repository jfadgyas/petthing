import Link from "next/link"

import PageHeader from "../components/PageHeader"
import Breadcrumbs from "../components/Breadcrumbs"
import ShowArticles from "../components/ShowArticles"

import style from './page.module.scss'

const AnimalPage = async ({params}: Record<string, any>) => {

    const {animal} = await params

    return (
        <main id='animal'>
            <PageHeader title={`Everything about ${animal}s`} animal={animal} img='/bgimage.jpg'/>            
            <Breadcrumbs />
            <article className={style.article}>
                <h2 className={style.sectionTitle}>well-being</h2>
                <p>Involves providing a balanced mix of physical care, mental stimulation, and a loving environment to ensure the animal feels healthy, safe, and emotionally fulfilled.</p>
                <ShowArticles animal={animal} category='well-being'/>
                <Link
                    className={style.link}
                    data-animal='cat'
                    href={`${animal}/well-being`}
                    >more about well-being
                </Link>
            </article>
            <article className={style.article}>
                <h2 className={style.sectionTitle}>diseases</h2>
                <p>Diseases encompass a wide range of health conditions that can affect animals, including infections, chronic illnesses, and genetic disorders, impacting their quality of life and requiring proper diagnosis, treatment, and preventive care.</p>
                <ShowArticles animal={animal} category='health'/>
                <Link
                    className={style.link}
                    data-animal='cat'
                    href={`${animal}/health`}
                    >more about health
                </Link>
            </article>
            <article className={style.article}>
                <h2 className={style.sectionTitle}>Deep knowledge</h2>
                <p>Fascinating facts, unique abilities and insights into their emotions, needs, and communication styles, helping owners understand their pets’ moods and intentions.</p>
                <ShowArticles animal={animal} category='deep-knowledge'/>
                <Link
                    className={style.link}
                    data-animal='cat'
                    href={`${animal}/deep-knowledge`}
                    >learn more
                </Link>
            </article>

            <article className={style.article}>
                <h2 className={style.sectionTitle}>social media</h2>
                <h3>egy mondat</h3>
                <span>ide jon a scrollos tartalom</span>
                <Link href='readmore'>read more</Link>
            </article>
        </main>

    )
}

export default AnimalPage