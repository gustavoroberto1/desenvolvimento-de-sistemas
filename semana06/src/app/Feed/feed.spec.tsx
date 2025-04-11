import { fireEvent, render,screen, waitFor } from "@testing-library/react";
import axios from "axios";
import Feed from "./page";
jest.mock('axios');
const mockAxios = axios as jest.Mocked<typeof axios>;
const mockPosts = [
    {
        id: "1",
        content: "Post 1",
        publishedAt: new Date("2025-04-10").toISOString(),
        author: {
            name: "Rosane",
            role: "dev",
            avatarUrl: "url-fake",
        },
        comments: []
    },
    {
        id: "2",
        content: "Post 2",
        publishedAt: new Date("2025-04-10").toISOString(),
        author: {
            name: "Rosane",
            role: "dev",
            avatarUrl: "url-fake",
        },
        comments: []

    }
]

describe("pagina do feed", () => {
    beforeEach(() => {
        mockAxios.get.mockResolvedValue({ data: mockPosts });
        mockAxios.post.mockResolvedValue({});
    })
    it("deve renderizar a pagina do feed", async () => {
        render(<Feed />)

        expect(screen.getByText('Carregando...')).toBeInTheDocument();

        await waitFor(() => {
            expect(screen.queryByText('Carregando...')).not.toBeInTheDocument()
        })
        const post = screen.getAllByTestId("post-test");

        expect(post.length).toBe(2);
        expect(post[0]).toHaveTextContent('Post 1')
        expect(post[1]).toHaveTextContent('Post 2')

        const textarea = screen.getByPlaceholderText("o que você está pensando???");
        expect(textarea).toBeInTheDocument();
        fireEvent.change(textarea, {target:{current: "meu novo post"}})
        expect(textarea).toHaveValue("meu novo post"); 
        const button = screen.getByText("publicar");
        expect(button).toBeInTheDocument();

        fireEvent.click(button);

        await waitFor(() => {
            expect(mockAxios.post).toHaveBeenNthCalledWith( "http://localhost:3001/posts",
                expect.objectContaining({
                    content:"meu novo post";
                    
                })

            )
        })
        expect(textarea).toHaveValue("");

    })
})