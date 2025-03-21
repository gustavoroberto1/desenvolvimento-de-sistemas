import "./Styles.css";

type textareaProps = {
    message: string;
    setMessage: (value: string) => void;
    title: string
}

export default function TextareaCustom({ message, setMessage, title }: textareaProps) {

    return (

        <textarea
            placeholder={title}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
        />
    )
}           