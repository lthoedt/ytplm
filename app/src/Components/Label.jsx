import './CSS/Label.css';

export function Label({ value, color = '#B07463' }) {
    return (
        <div className="label" style={{backgroundColor: color}}>
            <span>{value}</span>
        </div>
    )
}