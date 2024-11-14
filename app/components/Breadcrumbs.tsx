'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'

import style from './style/breadcrumbs.module.scss'

const Breadcrumbs = () => {
    
    const path = usePathname()
    const pathSegments = path.split('/').filter(item => item)
    
    const showbreadcrumbs = pathSegments.map((item, index) => {
        const currentLink = pathSegments.slice(0, index + 1).join('/')
        return (
            <Link
                className={style.breadcrumblink}
                key={item}
                href={`/${currentLink}`}
                >
                <span className={style.breadcrumblinktext}>
                    {item}
                </span>
            </Link>
        )        
    })

    return (
        <div className={style.breadcrumbs}>
            <Link
                className={style.breadcrumblink}
                href={'/'}
                >
                <span className={style.breadcrumblinktext}>
                    home
                </span>
            </Link>
            {showbreadcrumbs}
        </div>
    )
}

export default Breadcrumbs