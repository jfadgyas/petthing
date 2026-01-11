import Link from "next/link"

import { getPost } from "@/app/lib/dal"

import ShowImage from '@/app/components/ShowImage'

import { compileMDX } from "next-mdx-remote/rsc"

import PageHeader from '@/app/components/PageHeader'
import Breadcrumbs from '@/app/components/Breadcrumbs'
import List from '@/app/components/List'
import ListSimple from '@/app/components/ListSimple'
import ListWithImages from '@/app/components/ListWithImages'

import style from './page.module.scss'

const PostPage = async ({params}: Record<string, any>) => {

    const {animal, category, title} = await params

    // Get article and compile content
    const post = await getPost(`${animal}/${category}/${title}`)

    const article = await compileMDX<Record<string, any>>({
        source: post.content,
        options: {
            parseFrontmatter: true
        },
        components: {
            // h1: (props) => <h1 className={style.title} {...props}>{props.children}</h1>,
            h2: (props) => <h2 className={`${style['subtitle']} ${style[`subtitle--${animal}`]}`} id={props.children?.toString()} {...props}>{props.children}</h2>,
            h3: (props) => <h3 className={`${style['subtitle']} ${style[`subtitle--${animal}`]}`} {...props}>{props.children}</h3>,
            Link: (props) => <Link className={`${style['subtitle']} ${style[`subtitle--${animal}`]}`} {...props}>{props.children}</Link>,
            ShowImage,
            List,
            ListSimple,
            ListWithImages,
        }
    })

    // Create links for the sections
    const linkNames = article.frontmatter.sections.split(', ')
    const links = linkNames.map((item: string) => 
        <Link
            className={style.link}
            key={item}
            href={`#${item}`}
            >
            {item}
        </Link>
    )

    return (
        <main className={style.post} id='post'>
            <PageHeader title={article.frontmatter.title} animal={animal} img={article.frontmatter.img} />
            <Breadcrumbs />          
            <div className={style.linkwrapper}>
                {links}
            </div>
            <div className={style.articlewrapper}>
                {article.content}
            </div>
        </main>
    )
}

export default PostPage