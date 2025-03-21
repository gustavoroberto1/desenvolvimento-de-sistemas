'use client'
import { FormEvent, useState } from "react";
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
type comment = {

 message: string,
 publishedAt: Date,
 like: number,
 author: Author
}
type PostProps = {
    post: {
        id: number;
        author: Author;
        publishedAt: Date,
        content: string,
        // comments: comment[];

    }
}

export default function Post({ post }: PostProps) {
    const [newComment, setNewComment]= useState<string>('');

   async function handleCreateNewComment(event: FormEvent) {
        event.preventDefault();
        alert(newComment)

        const comment = {
            Comment: newComment,
            publishedAT: new Date().toISOString(),
            author:{
                name:"Rosane",
                role: "personal organizer",
                avatarUrl:"https://avatars.githubusercontent.com/u/170477548?v=4&size=64"
            }
        }

        await axios.patch(`http://localhost:3001/posts/${post.id}`,{
            comment: comment
        })

    }

    const dateFormat = formatDistanceToNow(post.publishedAt, {
        locale: ptBR,
        addSuffix:true
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

                <TextareaCustom message= {newComment}
                setMessage={setNewComment}
               title="DIGITE UM COMENTARIO"
                />

                <footer>
                    <button>
                        Publicar
                    </button>
                </footer>
            </form>

        </article>

    )
}
