import { fireEvent, render,screen} from "@testing-library/react"
import Comment from "."

const mockComment = {
    id: "1",
    like: 3,
    comment:"ola tudo bem",
    publishedAt: new Date(),
    author:{
        name: "Rosane",
        role:"Dev",
        avatarUrl:'Rosane.png'

    }
}

describe("comment componente",() =>{
    it('deve renderizar um comentario', () =>{
        render(<Comment
                   comment={mockComment}
                   handleDelete={jest.fn()}
                   handleLike={jest.fn()}
        
            />
         )

         expect(screen.getByText("Rosane")).toBeInTheDocument();
         expect(screen.getByText("ha menos de um minuto")).toBeInTheDocument();
         expect(screen.getByText("olá tudo bem ")).toBeInTheDocument();
         expect(screen.getByText("Apludir")).toBeInTheDocument();
         expect(screen.getByText(" 3")).toBeInTheDocument();


        
    })
    it("deve verificar se a função handleLike foi chamada com id correto", () => {
        const handleLike = jest.fn();
        render(<Comment comment={mockComment}handleDelete={jest.fn()}handleLike={handleLike}/>)
        const likeButton = screen.getByText("apludir");
        fireEvent.click(likeButton);

        expect(handleLike).toHaveBeenCalled()
        expect(handleLike).toHaveBeenCalledTimes(1);
        expect(handleLike).toHaveBeenCalledWith(expect.any(Object) ,"1")

    })
    it("deve verificar se a função handleLike foi chamada com id correto", () => {
        const handleDelete = jest.fn();
        render(<Comment comment={mockComment}handleDelete={jest.fn()}handleDelete={handleDelete}/>)
        const deleteButton = screen.getTextId("button-delete");
        fireEvent.click(deleteButton);

        expect(handleDelete).toHaveBeenCalled()
        expect(handleDelete).toHaveBeenCalledTimes(1);
        expect(handleDelete).toHaveBeenCalledWith(expect.any(Object) ,"1")

    })
})