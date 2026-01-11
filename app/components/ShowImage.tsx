'use client'

import {CldImage} from 'next-cloudinary'

const ShowImage = ({src, alt, width, height, fill, sizes}: {src: string, alt: string, width?: number, height?: number, fill: boolean, sizes?: string}) => {
    return (
        <CldImage
            // className={style.image}
            src={src}
            alt={alt}
            width={width}
            height={height}
            fill={fill || false}
            sizes={sizes || "325px"}
            // placeholder={loader as PlaceholderValue}
        />
    )
}

export default ShowImage