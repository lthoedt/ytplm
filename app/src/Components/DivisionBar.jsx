import './CSS/DivisionBar.css';
import { SizedBox } from './SizedBox';

export function DivisionBar({ v1Icon, v1, v2Icon, v2, color }) {

    let total = v1 + v2;
    let percentage = (v1 / total) * 100;
    let innerColor = '#9ABA8D';

    return (
        <div className="divisionBar-holder label" style={{ backgroundColor: color }}>
            <div className="divisionBar-innerBar" style={{ width: `${percentage}%`, backgroundColor: innerColor }}></div>
            <div className="divisionBar-labels align content vcenter hcenter">
                <div>
                    {v1Icon}{v1.shorten(1)}
                </div>
                <SizedBox width='var(--fourthSafearea)'></SizedBox>
                <div>
                    {v2Icon}{v2.shorten(1)}
                </div>
            </div>
        </div>
    )
}