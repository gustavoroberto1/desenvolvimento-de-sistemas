import Avatar from "../Avatar";
import "./Styles.css";

type Author = {
    name: string;
    role: string;
    avatarUrl: string;
    author: Author;
}
//type comment = {

// message: string,
// publishedAt: Date,
// like: number,
// author: Author
//}
type PostProps = {
    post: {
        author: Author;
        publishedAt: Date,
        content: string,
        // comments: comment[];

    }
}


export default function Post({ post }: PostProps) {

    return (
        <article className="post">
            <header>
                <div className="author">
                    <Avatar src={"https://avatars.githubusercontent.com/u/170477548?v=4&size=64"} hasBorder />
                    <div className="author-info">
                        <span>Rosane Maia</span>
                        <span>Personal organizer</span>
                    </div>
                </div>
                <time>
                    Publicado há 2 horas
                </time>
            </header>
            <div className="content">
                <p>
                    "A persistência leva ao sucesso". "Hoje você tem a oportunidade de construir o amanhã que você deseja.
                    Sonhe sem medos, viva sem limites.
                    Se o plano não funciona, mude o plano, não a meta."
                </p>
            </div>
            <form className="form">
                <strong>Deixe seu comentário</strong>
                <textarea placeholder="Deixe seu comentário" />

                <footer>
                    <button>
                        Publicar
                    </button>
                </footer>
            </form>

        </article>

    )
}
