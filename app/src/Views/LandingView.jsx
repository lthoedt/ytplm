import { Button } from "../Components/Button";
import { SizedBox } from "../Components/SizedBox";

import googleLogo from '../Assets/Images/GoogleLogo.svg';

export default function LandingView(props) {
    return (
        <div className="App">
            <h1>
                YouTube Playlist Manager
            </h1>
            <center>
                <h2>
                    Move, delete or add video's to and from your Playlists!
                </h2>
            </center>
            <div className='align hcenter vcenter'>
                <div className='infoBlock'>
                    <h2 style={{ color: '#3d3d3d', fontWeight: '300' }}>
                        To get started,
                    </h2>
                    <SizedBox height='calc( var(--safearea) / 2 )'></SizedBox>
                    <Button label="Sign in" prefix={<img src={googleLogo} alt="Google Logo" />} ></Button>
                </div>
            </div>
        </div>
    )
}