import '@testing-library/jest-dom';
import { handerMock, render, screen } from '@testing-library/react'
import ButtonCustom from '.';


describe('Teste Button Custom', () => {
    it('Deve renderizar o componente Button Custom', () => {
        render(<ButtonCustom />)

        const button = screen.getByText('Publicar')

            expect(button).toBeInTheDocument();
    })
    it('Deve renderizar o componente e testar click no botao',() => {
        const handerMock = jest.fn();
        render(<ButtonCustom text = 'Entrar')
    })
})