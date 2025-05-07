import { render, screen } from "@testing-library/react"
import Header from "."

describe("Componente Header", () => {
    it("Deve renderizar o componente header", () => {
        render(<Header />);
        expect(screen.getByAltText("Logo")).toBeInTheDocument();
        expect(screen.getByText("Feed")).toBeInTheDocument();
    })
})