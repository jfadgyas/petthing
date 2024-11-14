import fs from 'fs'
import path from 'path'

import { compileMDX } from 'next-mdx-remote/rsc'

const getArticles = async (animal: string) => {
    
    // Create base directory and file
    const articlesDir = path.join(process.cwd(), `posts/${animal}`)
    const fileNames = fs.readdirSync(articlesDir)

    // Generate articles
    const articlesData = Promise.all(
        fileNames.map(async fileName => {
            const fullPath = path.join(articlesDir, fileName)
            const fileContent = fs.readFileSync(fullPath, "utf-8")
    
            const article = await compileMDX<Record<string, any>>({
                source: fileContent,
                options: {
                    parseFrontmatter: true
                },
            })
            
            return {slug: fileName.replace('.mdx', ''), ...article}
        })
    )
    
    return await articlesData
}

export default getArticles