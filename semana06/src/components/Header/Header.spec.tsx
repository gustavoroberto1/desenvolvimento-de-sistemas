import { render, screen } from "@testing-library/react"
import Header from "."

describe("componente Header",() =>{
    it('deve resnderizar o componente header', () =>{
        render(<Header/>);

        const element = screen.getByAltText("logo")
        expect(element).toBeInTheDocument();

         const elementH2 = screen.getByText("Feed")
         expect(elementH2).toBeInTheDocument();

    })
})