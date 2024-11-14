import Link from "next/link"
import Image from "next/image"

import getArticles from "../lib/article"

import style from './style/showarticles.module.scss'

const ShowArticles = async ({animal, category}: {animal: string, category?: string}) => {

    const articles = await getArticles(animal)

    // create scrollable, autoscroll function. better flexbox than grid

    // Filter on category and date, to ensure articles can be created now, but released later
    const articlesList = articles
        .filter(item => 
            (item.frontmatter.category === category || (category ? false : true))
            &&
            Date.parse(item.frontmatter.date) < Date.now()
        )
        .map(item => 
            <li
                className={style.listItem}
                key={item.frontmatter.title}
                >
                <Link
                    className={style.link}
                    href={`${item.frontmatter.link}/${item.slug}`}
                    >
                    <div className={style.imgwrapper}>
                        <Image
                            className={style.img}
                            src={item.frontmatter.img}
                            alt='background'
                            fill
                            sizes="325px"
                        />
                    </div>
                    <h3 className={style.articleTitle} data-animal={animal}>{item.frontmatter.title}</h3>
                    <p className={style.articleSummary}>{item.frontmatter.summary}</p>
                </Link>
            </li>
    )

    return (
        <ul className={style.list}>
            {articlesList}
        </ul>
    )
}

export default ShowArticles