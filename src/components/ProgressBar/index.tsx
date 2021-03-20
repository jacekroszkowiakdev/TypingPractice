import "./ProgressBar.css";

type ProgressBarProps =
    | { percentage: number }
    | { value: number; maxValue: number; minValue: number };

export const ProgressBar = (props: ProgressBarProps) => {
    let error = false;

    // let calculatedPercentage = (
    //     value: number,
    //     minValue: number,
    //     maxValue: number
    // ) => {
    //     if (isNaN(value) || isNaN(minValue) || isNaN(maxValue)) {
    //         error = true;
    //         alert("Provided value is not a number");
    //     }
    //     return (value / (maxValue - minValue)) * 100;
    // };

    let percentage =
        "percentage" in props
            ? props.percentage
            : props.value / (props.maxValue - props.minValue);

    if (percentage < 0 || percentage > 100) {
        error = true;
        alert("Percentage must be a number in range of 0 to 100");
    }
    return (
        <div className="progressContainer">
            {error ? (
                <div className="progressBarError">⚠️</div>
            ) : (
                <div
                    className="progressBar"
                    style={{ width: `${percentage}%` }}
                >
                    <div className="percentage">{percentage.toFixed(1)}%</div>
                </div>
            )}
        </div>
    );
};
