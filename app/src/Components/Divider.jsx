import './CSS/Divider.css';

export function Divider({full}) {
    return (
        <div className = {'divider ' + (full && "full")}></div>
    )
}