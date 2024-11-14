import style from './style/list.module.scss'

const List = (props: Record<string, any>) => {

    return (
        <ul className={style.list}>
            {...props.children}
        </ul>
    )
}

export default List