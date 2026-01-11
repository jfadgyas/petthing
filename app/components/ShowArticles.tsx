import Link from "next/link"

import { getAllPosts } from "../lib/dal"
import ShowImage from "./ShowImage"

import style from './style/showarticles.module.scss'

const ShowArticles = async ({animal, category}: {animal: string, category?: string}) => {

    const articles = await getAllPosts(animal, category) // ispublished

    // create scrollable, autoscroll function. better flexbox than grid

    // Create article cards
    const articlesList = articles.map((item,index) => 
        <li
            className={style.listItem}
            key={item._id}
            >
            <Link
                className={style.link}
                href={`/${item.slug}`}
                >
                <div className={style.imgwrapper}>
                    <ShowImage src={item.coverImage.src} alt={item.coverImage.alt} fill={item.coverImage.fill} />
                </div>
                <h3 className={style.articleTitle} data-animal={animal}>{item.title}</h3>
                <p className={style.articleSummary}>{item.summary}</p>
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