import "./ProgressBar.css";

type ProgressBarProps =
    | { percentage: number }
    | { value: number; maxValue: number; minValue: number };

export const ProgressBar = (props: ProgressBarProps) => {
    let error = false;
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
