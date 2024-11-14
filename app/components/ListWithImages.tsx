import style from './style/listwithimages.module.scss'

const ListWithImages = (props: Record<string, any>) => {

    return (
        <li
            className={style.listItem}
            {...props}>
        </li>
    )
}

export default ListWithImages