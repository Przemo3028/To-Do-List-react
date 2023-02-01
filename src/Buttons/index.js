import "./style.css";

const Button = ({ tasks, hideDoneTasks, toggleHideDone }) => {
    if (tasks.length === 0) {
        return null;
    }
    return (
        <div>
            <button
                onClick={toggleHideDone}
                className="buttons__button">
                {hideDoneTasks ? "pokaż" : "ukryj"} ukończone
            </button>
            <button
                className="buttons__button"
                disabled={tasks.every(({ done }) => done)}>
                ukończ wszystkie
            </button>
        </div>
    )
};

export default Button;