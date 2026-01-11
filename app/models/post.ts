import mongoose from "mongoose";

const coverImageSchema = new mongoose.Schema(
    {
        src: {
            type: String,
            required: true,
        },
        alt: {
            type: String,
            required: true,
        },
        width: {
            type: Number,
            required: false
        },
        height: {
            type: Number,
            required: false
        },
        fill: {
            type: Boolean,
            required: false
        }
    },
)

const seoSchema = new mongoose.Schema(
    {
        title: String,
        description: String,
        canonicalUrl: String
    }
)

const authorSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            default: "John Holland"
        },
        // avatarUrl: {
        //     type: String,
        //     required: false
        // },
    }
)

const PostSchema = new mongoose.Schema(
    {
        slug: {
            type: String,
            required: true,
        },
        title: {
            type: String,
            required: true,
        },
        summary: {
            type: String,
            required: true,
        },
        content: {
            type: String,
            required: true,
        }, // mdx as text
        coverImage: coverImageSchema,
        seo: seoSchema,
        tags: [String], // ???
        animal: {
            type: String,
            required: true,
        },
        category: {
            type: String,
            required: true,
        },
        status: String,
        publishedAt: Date,
        author: {
            type: authorSchema,
            required: true
        }
    },
    {
        timestamps: true
    }
)

export default mongoose.models.Post || mongoose.model('Post', PostSchema)