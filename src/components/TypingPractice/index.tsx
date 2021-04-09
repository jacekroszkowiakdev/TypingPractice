import "./TypingPractice.css";
import { useContext, useState, useCallback, useEffect } from "react";
import { TypingPracticeContext } from "../../App";
import { Timer } from "../Timer";
import { Counter } from "../utils/CounterUtils";

export const TypingPractice = () => {
    const context = useContext(TypingPracticeContext);
    const [start, setStart] = useState<number | null>();
    const [userInput, setUserInput] = useState<string>();
    const [misspellCount, setMisspellCount] = useState<number | null>(0);
    const stringCheck = context.generatedText!;
    // const typingTime = Timer: () => JSX.Element;

    const handleKeyDown = useCallback(
        (evt) => {
            if (!start) {
                setStart(Date.now());
            }

            console.log("stringCheck.length: ", stringCheck!.length);
            console.log("stringCheck split: ", stringCheck!.split(""));
            console.log("user input split: ", userInput!.split(""));
            const generatedTextSplit: string[] = stringCheck!.split("");
            const userTextSplit: string[] = userInput!.split("");
            let finished: boolean = false;

            // const countMistakes = useCallback(() => {
            //     setMisspellCount(misspellCount);
            // }, [misspellCount]);

            generatedTextSplit.forEach((characterGenerated, index) => {
                const characterTyped = userTextSplit[index];
                if (userTextSplit.length === generatedTextSplit.length) {
                    finished = true;
                    console.log("TYPING COMPLETED!");
                    // screen showing how the user did with the Typing
                }

                if (characterTyped === null) {
                    console.log("Remained untyped characters: ");
                } else if (characterTyped === characterGenerated) {
                    // characterTyped.classList.add("correct");
                    // characterTyped.classList.remove("misspell");
                    console.log("CORRECT");
                } else {
                    // characterTyped.classList.remove("correct");
                    // characterTyped.classList.add("misspell");
                    console.log("MISSPELL");
                    // countMistakes();
                }
            });
        },
        [stringCheck, userInput, start]
    );

    return (
        <div className="TypingPracticeComponent">
            <div className="user-input">
                {start ? (
                    <div>
                        <div className="misspellCounter">
                            mistakes: {misspellCount}
                        </div>
                        <div className="typingTime">your time:</div>
                    </div>
                ) : (
                    <div></div>
                )}

                {/* user input + setTime, progress and accuracy. Mismatches to have highlight class added */}
                <textarea
                    id="userText"
                    onChange={(evt) => setUserInput(evt.target.value)}
                    value={userInput}
                    onKeyDown={handleKeyDown}
                ></textarea>
            </div>
        </div>
    );
};
