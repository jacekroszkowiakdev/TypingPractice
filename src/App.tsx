import logo from "./logo.svg";
import "./App.css";
import { ProgressBar } from "./components/ProgressBar/";
import { useState, useEffect } from "react";

function App() {
    const randomTextUrl = "https://litipsum.com//api/evelina/2/";
    const [isFetched, setIsFetched] = useState<boolean>(false);
    const [text, setText] = useState<string>();
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

    useEffect(() => {
        // fetch the api text:
        getAPIText();
    });

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p style={{ color: "black" }}>ProgressBar:</p>
                <ProgressBar percentage={66} />
                {text}
                <button onClick={getAPIText}>LOAD</button>
            </header>
        </div>
    );
}

export default App;

// import { Counter } from "./components/Counter";
// import { TextField } from "./components/TextField";

// const App: React.FC = () => {
//     return (
//         <div>
//             <TextField
//                 text="API generated text comes here"
//                 handleChange={(evt) => evt.preventDefault}
//             />
//             <Counter>
//                 {({ count, setCount }) => (
//                     <div>
//                         {count}
//                         <button onClick={() => setCount(count + 1)}>+</button>
//                     </div>
//                 )}
//             </Counter>
//         </div>
//     );
// };
