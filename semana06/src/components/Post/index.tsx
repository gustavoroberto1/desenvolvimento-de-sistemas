'use client'
import { Dispatch, FormEvent, SetStateAction, useState } from "react";
import Avatar from "../Avatar";
import "./Styles.css";
import { format, formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";
import TextareaCustom from "../TextareaCustom/Index";
import axios from "axios";

type Author = {
    name: string;
    role: string;
    avatarUrl: string;
    author: Author;
}

type Comment = {
    id: string;
    comment: string,
    publishedAt: Date,
    like: number,
    author: Author
}

type Post = {
    id: string;
    author: Author;
    publishedAt: Date,
    content: string,
    comments: Comment[];
}

type PostProps = {
    setPost: Dispatch<SetStateAction<Post[]>>,
    post: Post
}

export default function Post({ post, setPost }: PostProps) {
    const [newComment, setNewComment] = useState<string>('');


    async function loadPost() {
        const response = await axios.get(`http://localhost:3001/posts/${post.id}`);
        setPost((prev: Post[]) =>
            prev.map(atual => (
                atual.id == post.id ? response.data : atual)))
    }

    async function handleCreateNewComment(event: FormEvent) {
        event.preventDefault();

        const comment = {
            comment: newComment,
            publishedAt: new Date().toISOString(),
            author: {
                name: "Rosane",
                role: "personal organizer",
                avatarUrl: "https://avatars.githubusercontent.com/u/170477548?v=4&size=64"
            }
        }
        const comments = post.comments?.length ? [...post.comments, comment] : [comment]

        await axios.patch(`http://localhost:3001/posts/${post.id}`, {
            "comments": comments
        })
        loadPost()
        setNewComment('');

    }

    const dateFormat = formatDistanceToNow(post.publishedAt, {
        locale: ptBR,
        addSuffix: true
    })

    return (
        <article className="post">
            <header>
                <div className="author">
                    <Avatar src={post.author.avatarUrl} hasBorder />
                    <div className="author-info">
                        <span>{post.author.name}</span>
                        <span>{post.author.role}</span>
                    </div>
                </div>
                <time>
                    {dateFormat}
                </time>
            </header>
            <div className="content">
                <p>
                    {post.content}

                </p>
            </div>
            <form className="form" onSubmit={handleCreateNewComment}>
                <strong>Deixe seu comentário</strong>

                <TextareaCustom message={newComment}
                    setMessage={setNewComment}
                    title="DIGITE UM COMENTARIO"
                />

                <footer>
                    <button>
                        Publicar
                    </button>
                </footer>
            </form>

            {post.comments?.length ? post.comments.map(comment => (
                <h1 key={comment.comment}>{comment.comment}</h1>
            )): null}
        </article>
    )
}
