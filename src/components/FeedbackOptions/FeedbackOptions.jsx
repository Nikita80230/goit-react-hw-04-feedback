import css from './FeedbackOptions.module.css';

export const FeedbackOptions = ({
    handleOptionClick,
    options,
}) => {

    const onOptionClick = event => {
        handleOptionClick(event.target.name);
    };

    return (
        <div>
            <div>
                <h2>Please leave feedback</h2>
                <ul className={css.list}>
                    {Object.keys(options).map((option) => {
                        return (<li key={option}>
                            <button
                                name={option}
                                className={css.btn}
                                onClick={onOptionClick}
                            >
                                {option.toUpperCase()}
                            </button>
                        </li>)
                    })}
                </ul>
            </div>
        </div>
    );
};

