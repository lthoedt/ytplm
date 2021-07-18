export function ColoredButton({ className, icon, action, color }) {
    switch (color) {
        case 'error':
            // should be probably change to something less css related
            color = '--clr-error';
            break;
        case 'normal':
            // should be probably change to something less css related
            color = '--clr-normal';
            break;
        default:
            break;
    }
    return (
        <div className= {className + ' align content hcenter vcenter clickable'} style={{ backgroundColor: `var(${color})` }} onClick={action} >
            {icon}
        </div>
    )
}