import { useState, useRef, ChangeEventHandler } from "react";

interface PassedObject {
    field1: string;
    field2: [];
}

interface Props {
    text: string;
    ok?: boolean;
    integer?: number;
    fn?: (argument: string) => string;
    passedObject?: PassedObject;
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

interface TextNode {
    text: string;
}

export const TextField: React.FC<Props> = ({ handleChange }) => {
    const [count, setCount] = useState<number | null>(5);
    // const [text, setText] = useState<{ text: string }>({ text: "hello" });
    const [text, setText] = useState<TextNode>({ text: "hello" });
    const inputRef = useRef<HTMLInputElement>(null);
    const divRef = useRef<HTMLDivElement>(null);

    setCount(count);
    setText(text);

    return (
        <div ref={divRef}>
            <input ref={inputRef} onChange={handleChange} />
        </div>
    );
};
