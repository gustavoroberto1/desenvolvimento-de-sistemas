'use client'
import Header from "@/components/Header";
import "./styles.css"
import Image from "next/image";
import gato from '@/assets/Gato-x-leao.jpg'
import Avatar from "@/components/Avatar";
import { PiPencilLine } from "react-icons/pi";
import Post from "@/components/Post";
import { FormEvent, useEffect, useState} from "react";
import axios from "axios";
import { Content } from "next/font/google";


export default function Feed() {
    const [posts, setPosts] = useState<any[]>([]);
    const [content, setContent] = useState<string>('');

    useEffect(() => {
        loadPost();
    },[])

    async function loadPost() {
        const response = await axios.get('http://localhost:3001/posts');
        const postSort = response.data.sort((a,b)=> new Date(a.publishedAt as any))
        setPosts(response.data);
        
    }

    async function handleCreatePost(event:FormEvent) {
        const post = {
            id: posts.length +1,
            content: content,
            publishedAt: new Date().toISOString(),
            author: {
                name: "Rosane Maia",
                role: "Personal Organizer",
                avatarUrl:"https://avatars.githubusercontent.com/u/170477548?v=4&size=64"
            }
        }
        
    }


    return (
        <div>
            <Header />
            <div className="container">
                <aside className="sidebar">
                    <Image src={gato} alt="gato" className="gato"/>

                    <div className="profile">

                    <Avatar src= "https://avatars.githubusercontent.com/u/170477548?v=4&size=64" hasBorder/>
                    <strong>Rosane Maia</strong>
                    <span>Personal organizer</span>

                    <footer>
                        <button className="button-edit-profile">
                            <PiPencilLine />
                            Editar seu perfil

                        </button>
                    </footer>

                     </div>


                </aside>


                <main className="main">
                    <form onSubmit={handleCreatePost}>

                        <textarea placeholder="Oque você esta pensando?" 
                        value={Content}
                        onChange={(e) => setContent(e.target.value)}
                        />
                        <button type="submit">PUBLICAR</button>
                    </form>
                    {posts.map(item =>(
                        <Post post={item}key={item.id}/>
                    ))}
                    
                    

                </main>

            </div>

        </div>

    )
}
