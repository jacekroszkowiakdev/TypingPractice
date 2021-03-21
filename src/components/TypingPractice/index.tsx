import "./TypingPractice.css";
import { useContext, useState } from "react";
import { TypingPracticeContext } from "../../App";

export const TypingPractice = () => {
    console.log("typing practice component did mount");
    const [time, setTime] = useState<number>(0);
    const userText = document.getElementById("userText");

    userText.addEventListener("input", function () {
        var userInput = userText.value;
    });

    return (
        <div className="user-input">
            {/* user input + setTime, progress and accuracy. Missmatches to have highlight class added */}
            <textarea id="userText"></textarea>
        </div>
    );
};
