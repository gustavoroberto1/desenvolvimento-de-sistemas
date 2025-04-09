import { render, screen } from "@testing-library/react"
import Header from "."
import Person from ".";

describe("componente Person",() =>{
    it('deve resnderizar o componente Person', () =>{
        render(<Person nome = "Rosane" idade={33}/>);

        const name = screen.queryByText("Rosane", {exact:false})
        expect(name).toBeInTheDocument();

        const idade = screen.getByText("33",{exact: false})
        expect(idade).toBeInTheDocument();


        

    })
})
