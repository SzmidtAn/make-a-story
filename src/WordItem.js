export const WordItem = ({title, description, pronunciation }) => {
    return (
            <div className="content">
                <h1 className="header">{title}</h1>
                <h2 className="pronunciation">{pronunciation}</h2>
                <p className="descriptionItem">Definition: {description}</p>
{/*
                <p className="exampleItem">Example: <span>"{example}"</span></p>
*/}
            </div>

    );
};