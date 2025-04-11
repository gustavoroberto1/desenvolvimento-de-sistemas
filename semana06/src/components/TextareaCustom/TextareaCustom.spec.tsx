import { fireEvent, render,screen} from "@testing-library/react"
import TextareaCustom from "./Index"

describe("TextareaCustom componente",() =>{
    it('deve renderizar o componete com placeholder correto', () =>{
        render(
        <TextareaCustom
        message="hello word"
        setMessage={jest.fn()}
        title="Digite aqui..." />
        )
        const Textarea=screen.getByPlaceholderText('Digite aqui...');
        expect(Textarea).toBeInTheDocument();
        expect(Textarea).toHaveValue("hello word")
    })
})
