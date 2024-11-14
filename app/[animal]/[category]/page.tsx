import PageHeader from "@/app/components/PageHeader"
import Breadcrumbs from "@/app/components/Breadcrumbs"
import ShowArticles from "@/app/components/ShowArticles"

import style from './page.module.scss'

const CategoryPage = async ({params}: Record<string, any>) => {

    const {animal, category} = await params

    const summary: Record<string, string> = {
        "well-being": "Involves providing a balanced mix of physical care, mental stimulation, and a loving environment to ensure the animal feels healthy, safe, and emotionally fulfilled.",
        "health": "Diseases encompass a wide range of health conditions that can affect animals, including infections, chronic illnesses, and genetic disorders, impacting their quality of life and requiring proper diagnosis, treatment, and preventive care.",
        "deep-knowledge": "Fascinating facts, unique abilities and insights into their emotions, needs, and communication styles, helping owners understand their pets’ moods and intentions."
    }

    return (
        <main id='category'>
            <PageHeader title={category} animal={animal} img='/bgimage.jpg' />
            <Breadcrumbs />
            <article className={style.article}>
                <h2 className={style.sectionTitle}>{category}</h2>
                <p>{summary[category]}</p>
                <ShowArticles animal={animal} category={category} />
            </article>
        </main>
    )
}

export default CategoryPage