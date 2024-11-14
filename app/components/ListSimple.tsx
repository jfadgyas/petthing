import Icon from '@mdi/react';
import { mdiPaw } from '@mdi/js';

import style from './style/listsimple.module.scss'

const ListSimple = (props: Record<string, any>) => {

    // Extend item with style and Icons
    const createItem = (item: Record<string, any>, index: number) => {
        
        return (
            <li
                className={style.listItem}
                key={index}
                {...item}>
                <Icon
                    className={style.icon}
                    path={mdiPaw}
                />
                {item.children}
            </li>  
        )
    }

    // Passing actual list items to add style
    const items = props.children.props.children
        .filter((item: unknown) => item !== '\n') // filter out line breaks
        .map((item: Record<string, any>, index: number) => createItem(item.props, index))

    return (
        <ul
            className={style.list}
            {...props}>
            {items}
        </ul>
    )
}

export default ListSimple