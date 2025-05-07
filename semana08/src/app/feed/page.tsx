'use client'

import Header from "@/components/Header";
import "./styles.css"
import Image from "next/image";

import cover from '@/assets/cover.avif';
import Avatar from "@/components/Avatar";
import { PiPencilLineBold } from "react-icons/pi";
import Post from "@/components/Post";
import { FormEvent, useEffect, useState } from "react";
import axios from "axios";
import TextareaCustom from "@/components/TextareaCustom";
import ButtonCustom from "@/components/ButtonCustom";

type Author = {
    name: string;
    role: string;
    avatarUrl: string;
}

type Comment = {
    id: string;
    author: Author;
    like: number;
    comment: string;
    publishedAt: Date
}

type Post = {
    id: string;
    author: Author;
    publishedAt: Date;
    content: string;
    comments: Comment[]
}

export default function Feed() {
    const [posts, setPosts] = useState<Post[]>([]);
    const [content, setContent] = useState<string>('');

    useEffect(() => {
        loadPost();
    }, [])


    async function loadPost() {
        const response = await axios.get("http://localhost:3001/posts");
        const postSort = response.data.sort((a: any, b: any) => (
            new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
        ))

        setPosts(postSort)
    }

    async function handleCreatePost(event: FormEvent) {
        event.preventDefault()

        const post = {
            id: String(posts.length + 1),
            content: content,
            publishedAt: new Date().toISOString(),
            author: {
                name: "Gustavo Souza",
                role: "Full-Stack Developer",
                avatarUrl: "https://github.com/gusttavosouza.png"
            }
        };
        await axios.post("http://localhost:3001/posts", post);

        await loadPost();
        setContent('');
    }


    return (
        <div>
            <Header />
            <div className="container">
                <aside className="sidebar">
                    <Image src={cover} alt="cover" className="cover" />

                    <div className="profile">
                        <Avatar src="https://github.com/gusttavosouza.png" hasBorder />
                        <strong>Gustavo Souza</strong>
                        <span>Full-Stack Developer</span>

                        <footer>
                            <button className="button-edit-profile">
                                <PiPencilLineBold />
                                Editar seu perfil
                            </button>
                        </footer>
                    </div>
                </aside>

                <main className="main">
                    <form onSubmit={handleCreatePost} className="form-post">
                        <TextareaCustom
                            message={content}
                            setMessage={setContent}
                            title="O que você está pensando???"
                        />

                        <ButtonCustom />
                    </form>

                    {posts.map(item => (
                        <Post post={item} key={item.id} setPost={setPosts} />
                    ))}
                </main>
            </div>
        </div>
    )
}
