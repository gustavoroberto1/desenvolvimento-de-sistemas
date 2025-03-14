'use client'
import Header from "@/components/Header";
import "./styles.css"
import Image from "next/image";
import gato from '@/assets/Gato-x-leao.jpg'
import Avatar from "@/components/Avatar";
export default function Feed() {
    return (
        <div>
            <Header />
            <div className="container">
                <aside className="sidebar">
                    <Image src={gato} alt="gato" className="gato"/>

                    <div className="profile">

                    <Avatar src= "https://avatars.githubusercontent.com/u/170477548?v=4&size=64" hasBorder/>
                    <strong>Rosane Maia</strong>
                    <span>diarista</span>

                     </div>


                </aside>


                <main className="main">

                </main>

            </div>

        </div>

    )
}
