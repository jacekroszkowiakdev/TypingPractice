import "./TypingPractice.css";
import { useContext, useState, useCallback, useEffect } from "react";
import { TypingPracticeContext } from "../../App";
import { Timer } from "../Timer";
import { Counter } from "../utils/CounterUtils";

export const TypingPractice = () => {
    const context = useContext(TypingPracticeContext);
    const [start, setStart] = useState<number | null>();
    const [userInput, setUserInput] = useState<string>();
    // const [misspellCount, setMisspellCount] = useState<number | null>(0);
    const [characterClassName, setCharacterClassName] = useState<string>();
    const [finished, setFinished] = useState<boolean>(false);
    const [userTypingTime, setUserTypingTime] = useState<number | null>();
    const stringCheck = context.generatedText!;

    const handleKeyDown = useCallback(
        (evt) => {
            const generatedTextSplit: string[] = stringCheck!.split("");
            const userTextSplit: string[] = userInput!.split("");
            generatedTextSplit.forEach((characterGenerated, index) => {
                const characterTyped = userTextSplit[index];

                setStart(Date.now());

                if (typeof context.generatedText === "string") {
                    if (characterTyped === null) {
                        console.log("Remained untyped characters: ");
                    } else if (characterTyped === characterGenerated) {
                        setCharacterClassName("correct");
                        console.log("CORRECT");
                    } else {
                        console.log("MISSPELL");
                        setCharacterClassName("misspell");
                        // generatedTextSplit.forEach(
                        //     (characterGenerated, index) => {
                        //         if (characterTyped !== characterGenerated) {
                        //             setMisspellCount(1);
                        //         }
                        //     }
                        // );
                    }

                    if (
                        userTextSplit.length ===
                        generatedTextSplit.length - 1
                    ) {
                        setFinished(true);
                        setUserTypingTime(() =>
                            Math.floor((Date.now() - start!) / 1000)
                        );
                        console.log("TYPING COMPLETED!");
                    }
                }
            });
        },
        [stringCheck, userInput, start, context.generatedText]
    );

    return (
        <div className="TypingPracticeComponent">
            <div className="user-input">
                {start ? (
                    <div>
                        <div className="misspellCounter">
                            mistakes: figure out a counter here
                        </div>
                        <div className="typingTime">
                            your time: <Timer /> seconds
                        </div>
                    </div>
                ) : (
                    <div />
                )}

                {!finished ? (
                    <textarea
                        id="userText"
                        onChange={(evt) => setUserInput(evt.target.value)}
                        className={characterClassName}
                        value={userInput}
                        onKeyDown={handleKeyDown}
                    ></textarea>
                ) : (
                    <div>{userTypingTime}</div>
                )}
            </div>
        </div>
    );
};
