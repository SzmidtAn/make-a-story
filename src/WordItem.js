export const WordItem = ({title, showItemsDescription}) => {
    return (
            <div className="wordItem" onClick={showItemsDescription}>
                <h2 className="header">{title}</h2>
            </div>
    );
};

export const WordItemDescription = ({title, description, pronunciation }) => {

    return (
            <div className="itemDetail">
                <h1 className="header">{title}</h1>
                <h2 className="pronunciation">{pronunciation}</h2>
                <p className="descriptionItem">Definition: {description}</p>
            </div>
    );
};