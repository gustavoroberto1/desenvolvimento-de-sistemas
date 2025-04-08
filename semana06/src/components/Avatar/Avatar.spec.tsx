import {render,screen}from '@testing-library/react'
import Avatar from '.'

describe('componente Avatar', ( =>{
    it('deve renderizar o componente de avatar sem borda.',() =>{
        render(<Avatar src= "teste"/>)

        const avatarElemement = screen.getByTestId('avatar');
        expect(avatarElemement).
    })

}))