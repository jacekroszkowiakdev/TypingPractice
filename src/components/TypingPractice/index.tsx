import "./TypingPractice.css";
import { useContext, useState, useCallback } from "react";
import { TypingPracticeContext } from "../../App";

// type TypingPracticeVariables = {
//     userText: string | null;
//     stringCheck: string | null;
// };

export const TypingPractice = () => {
    const context = useContext(TypingPracticeContext);
    const [text, setText] = useState<string>();
    const [start, setStart] = useState<number>(0);
    const userText = document.getElementById("userText");
    const stringCheck = context.generatedText;

    if (typeof context.generatedText === "string") {
        console.log("stringCheck.length: ", stringCheck!.length);
        console.log("stringCheck split: ", stringCheck!.split(""));
    }

    // console.log("stringCheck: ", stringCheck!.length);
    // console.log("stringCheck split: ", stringCheck!.split(""));

    //  userText.addEventListener("input", function () {
    //      // console.log("logging input event");

    //      var userInput = userText.value;
    //      console.log("text:", userInput);
    //      var swapInput = gettysburgAddress.substring(0, userInput.length);
    //      userText.value = swapInput;
    //  });

    return (
        <div className="TypingPracticeComponent">
            <div className="user-input">
                {/* user input + setTime, progress and accuracy. Mismatches to have highlight class added */}
                <textarea id="userText"></textarea>
            </div>
            {context.generatedText}
        </div>
    );
};
