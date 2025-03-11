import "./styles.css";

type PersonProps = {
    nome: string;
    idade: number;
}

export default function Person({ nome, idade }:PersonProps) {
    return (
        <div className="item">
            <strong>NOME: {nome}</strong>
            <span>Idade: {idade}</span>
        </div>
    )
}