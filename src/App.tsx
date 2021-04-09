import logo from "./logo.svg";
import "./App.css";
import { ProgressBar } from "./components/ProgressBar/";
import { TypingPractice } from "./components/TypingPractice";
import { useState, useEffect, createContext, useCallback } from "react";
import { Timer } from "./components/Timer";

type ContextProps = {
    generatedText: string | null;
    userText: string | null;
    typingProgress: number;
    startTime: number;
    typingTime: number | null;
};

export const TypingPracticeContext = createContext<Partial<ContextProps>>({});

function App() {
    const randomTextUrl = "https://litipsum.com//api/evelina/2/";
    const [text, setText] = useState<string>();
    const [userInput, setUserInput] = useState<string>();
    const [start, setStart] = useState<number>(0);
    const [elapsedTime, setElapsedTime] = useState<number>();
    const [percentage, setPercentage] = useState<number>(0)!;
    const [error, setError] = useState<boolean>(false);

    const getAPIText = function () {
        fetch(randomTextUrl)
            .then((res: Response) => {
                if (!res.ok) {
                    throw Error(res.statusText);
                } else {
                    res.text().then((text) => {
                        setText(text);
                    });
                }
            })
            .catch((err) => {
                console.log("error fetching text from litispum API: ", err);
                setError(true);
            });
    };

    const loadAPIText = () => {
        getAPIText();
        setUserInput("");
        setStart(0);
    };

    useEffect(() => {
        getAPIText();
        setUserInput("");
        setStart(0);
    }, []);

    return (
        <div className="App">
            <TypingPracticeContext.Provider
                value={{
                    generatedText: text,
                    userText: userInput,
                    typingProgress: percentage,
                    startTime: start,
                    typingTime: elapsedTime,
                }}
            >
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p style={{ color: "black" }}>ProgressBar:</p>
                    <ProgressBar percentage={66} />
                    <div className="API-text">{text}</div>
                    <button className="load-text" onClick={loadAPIText}>
                        LOAD
                    </button>
                    <Timer />
                    <TypingPractice />
                </header>
            </TypingPracticeContext.Provider>
        </div>
    );
}

export default App;
