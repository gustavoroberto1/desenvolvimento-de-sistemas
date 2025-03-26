import { PiThumbsUp, PiTrash } from 'react-icons/pi';
import Avatar from '../Avatar';
import'./styles.css';

type Author = {
    name: string;
    role: string;
    avatarUrl: string;
    
}

type CommentProps = {
    handleLike:(event:MouseEvent,id:string) =>void;
    handleDelete:
    comment:{
    id: string;
    comment: string,
    publishedAt: Date,
    like: number,
    author: Author
}
}



export default function Comment({comment}:CommentProps){
    const dateFormat = formatDistanceToNow(post.publishedAt, {
        locale: ptBR,
        addSuffix: true
    })
    return (
        <div className='comment'>
            <Avatar src={ comment.author.avatarUrl}hasBorder={false}/>
            <div className='comment-box'>
                <div className='comment-content'>
                    <header>
                        <div className='author-and-time'>
                            <strong>comment.author.name"</strong>
                            <time>{dateFormat}</time>

                        </div>
                        <button title='Deletar comentario'>
                            <PiTrash size={24}/>
                        </button>
                    </header>
                    <p>È isso mesmo...só falou verdades</p>

                </div>
                <footer>
                    <button>
                        <PiThumbsUp/>
                        Curtir <span>12</span>
                    </button>
                </footer>
            </div>
            
        </div>
    )
 
}