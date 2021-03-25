export const WordItem = ({title, description, type, example }) => {
    return (
            <div className="content">
                <h1 className="header">{title}</h1>
                <h2 className="typeItem">{type}</h2>
                <p className="descriptionItem">Definition: {description}</p>
                <p className="exampleItem">Example: <span>"{example}"</span></p>
            </div>

    );
};