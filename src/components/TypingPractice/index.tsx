import "./TypingPractice.css";
import { useContext, useState, useCallback } from "react";
import { TypingPracticeContext } from "../../App";

export const TypingPractice = () => {
    const context = useContext(TypingPracticeContext);
    const [start, setStart] = useState<number>(0);
    const [userInput, setUserInput] = useState<string>();
    const [misspellCount, setMisspellCount] = useState<number | null>(0);
    const [remainigChars, setRemaingChars] = useState<number | null>(0);
    const stringCheck = context.generatedText;

    if (
        typeof context.generatedText === "string" &&
        typeof userInput === "string"
    ) {
        console.log("stringCheck.length: ", stringCheck!.length);
        console.log("stringCheck split: ", stringCheck!.split(""));
        console.log("user input split: ", userInput!.split(""));
        const generatedTextSplit: string[] = stringCheck!.split("");
        const userTextSplit: string[] = userInput!.split("");
        let finished: boolean = false;

        const countMistakes = useCallback(() => {
            setMisspellCount(misspellCount);
        }, [misspellCount]);

        generatedTextSplit.forEach((characterGenerated, index) => {
            const characterTyped = userTextSplit[index];
            if (characterTyped == null) {
                console.log("Remained untyped characters: ");
            } else if (characterTyped === characterGenerated) {
                // characterTyped.classList.add("correct");
                // characterTyped.classList.remove("misspell");
                console.log("CORRECT");
            } else {
                // characterTyped.classList.remove("correct");
                // characterTyped.classList.add("misspell");
                console.log("MISSPELL");
                countMistakes();
            }

            if (userTextSplit.length === generatedTextSplit.length) {
                finished = true;
                console.log("TYPING COMPLETED!");
                // screen showing how the used did with the Typing
            }
        });
    }

    return (
        <div className="TypingPracticeComponent">
            <div className="user-input">
                <div className="misspellCounter">mistakes: {misspellCount}</div>

                {/* user input + setTime, progress and accuracy. Mismatches to have highlight class added */}
                <textarea
                    id="userText"
                    onChange={(evt) => setUserInput(evt.target.value)}
                    value={userInput}
                ></textarea>
            </div>
        </div>
    );
};
