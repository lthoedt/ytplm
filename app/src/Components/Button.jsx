import './CSS/Button.css';

import { SizedBox } from './SizedBox';

export function Button({ label, prefix }) {


    return (
        <button>
            {prefix}
            {(prefix && <SizedBox width='calc( var(--safearea) / 2 )'></SizedBox>)}
            {label}
        </button>
    )
}