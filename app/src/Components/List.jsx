import './CSS/List.css';

export function List({items, vertical, className}) {

    return (
        <div className={
            "list" + (
                (vertical) ? " vertical" : " fourths"
            ) + (
                (className && ` ${className}`)
            )
        }>
            {items}
        </div>
    )
}