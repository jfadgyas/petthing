import 'server-only'

import dbConnect from './dbConnect'

import Post from '../models/post'

await dbConnect()

// Get all posts for animal and category
export const getAllPosts = async (animal: string, category?: string) => {

    const filter = {animal: animal, status: 'published'}

    try{
        const posts = await Post.find(category ? Object.assign(filter, {category: category}) : filter)
        // console.log(posts)
        return posts
    }
    catch(err: unknown){
        console.log(err)
        // return {error: err && err instanceof Error ? err.message : ''}
        return []
    }
}

// Get one specific post
export const getPost = async (slug: string) => {
    try{
        const post = await Post.findOne({slug: slug})
        // console.log(post.content)
        return post
    }
    catch(err: unknown){
        console.log(err)
        // return {error: err && err instanceof Error ? err.message : ''}
        return null
    }
}