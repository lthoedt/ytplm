import './CSS/List.css';

export function List({items, vertical}) {
    return (
        <div className={
            "list " + (
                (vertical) ? "vertical" : "fourths"
            )
        } >
            {items}
        </div>
    )
}