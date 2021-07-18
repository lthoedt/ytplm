import './CSS/TrackItem.css';
import { IoTrashOutline, IoShareOutline, IoClose } from "react-icons/io5";
import $ from 'jquery';

import { SizedBox } from "./SizedBox";
import { Label } from "./Label";
import { DivisionBar } from "./DivisionBar";
import { ColoredButton } from './ColoredButton';

export function TrackItem(track) {

    let labelColor = '#B4B4B4';

    return (
        <div className="track-holder align content">
            <div>
                <div className="track-button" id="options" onClick={(event) => toggleTrackOptions(event, { open: true })} >
                    <span style={{ fontSize: '1.2em', lineHeight: '2em' }}>•••</span>
                </div>
            </div>
            <div className='track-options align content vcenter hcenter'>
                <div>
                    <ColoredButton className="track-options-button" icon={<IoClose />} action={(event) => toggleTrackOptions(event, { open: false })} color='' ></ColoredButton>
                </div>
                <div>
                    <ColoredButton className="track-options-button" icon={<IoTrashOutline />} action={() => { }} color='error' ></ColoredButton>
                </div>
                <div>
                    <ColoredButton className="track-options-button" icon={<IoShareOutline />} action={() => { }} color='normal' ></ColoredButton>
                </div>
            </div>
            <div className="track-container align content vcenter">
                <div className="align content vcenter">
                    <img src={track.thumbnail} alt='Playlist thumbnail' />
                    <SizedBox width='var(--fourthSafearea)'></SizedBox>
                    <div className="left vcenter column">
                        <span className='listItemTitle'>
                            {track.title}
                        </span>
                        <span className='listItemDescription'>
                            {track.uploader}
                        </span>
                    </div>
                </div>

                <SizedBox width='var(--halfSafearea)'></SizedBox>

                <div class="tooltip">
                    <span class="tooltiptext">{track.viewCount.toLocaleString()} views</span>
                    <Label value={`👁️ ${track.viewCount.shorten()}`} color={labelColor}  ></Label>
                </div>

                <SizedBox width='var(--halfSafearea)'></SizedBox>

                <div class="tooltip">
                    <span class="tooltiptext">{track.likes.toLocaleString()} / {track.dislikes.toLocaleString()}</span>
                    <DivisionBar v1Icon='👍 ' v1={track.likes} v2Icon='👎 ' v2={track.dislikes} color={labelColor} ></DivisionBar>
                </div>

                <SizedBox width='var(--halfSafearea)'></SizedBox>

                <div>
                    <Label value={track.duration.parseToTime()} color={labelColor} ></Label>
                </div>

            </div>

            <div>
                <div className="track-button" id="info" onClick={(event) => toggleTrackInfo(event, { open: true })} >
                    <span>i</span>
                </div>

                <div className="track-info infoBlock align content hcenter vcenter">
                    <div>
                        <div>
                            {track.description}
                        </div>
                        <SizedBox height='var(--halfSafearea)'></SizedBox>
                        <div>
                            {track.dateUploaded}
                        </div>
                    </div>

                    <div>
                        <ColoredButton className="track-options-button" icon={<IoClose />} action={(event) => toggleTrackInfo(event, { open: false })} color='' ></ColoredButton>
                    </div>

                </div>

            </div>
        </div>
    )
}

function toggleTrackOptions(e, { open }) {
    let trackHolder = $(e.target).closest(".track-holder");
    let trackButton = trackHolder.find("#options");

    let trackOptions = trackHolder.find(".track-options");
    let trackContainer = trackHolder.find(".track-container");

    // let isOpen = trackButton.hasClass("opened");

    if (open) {
        trackOptions.addClass("opened");
        trackContainer.addClass("opened");
        trackButton.addClass("opened");

        trackOptions.addClass("left");
        trackContainer.addClass("left");
        trackButton.addClass("left");
    } else {
        trackOptions.removeClass("opened");
        trackContainer.removeClass("opened");
        trackButton.removeClass("opened");

        trackOptions.removeClass("left");
        trackContainer.removeClass("left");
        trackButton.removeClass("left");
    }
}

function toggleTrackInfo(e, { open }) {
    let trackHolder = $(e.target).closest(".track-holder");
    let trackButton = trackHolder.find("#info");

    let trackInfo = trackHolder.find(".track-info");
    let trackContainer = trackHolder.find(".track-container");

    // let isOpen = trackButton.hasClass("opened");

    if (open) {
        trackInfo.addClass("opened");
        trackContainer.addClass("opened");
        trackButton.addClass("opened");

        trackInfo.addClass("right");
        trackContainer.addClass("right");
        trackButton.addClass("right");
    } else {
        trackInfo.removeClass("opened");
        trackContainer.removeClass("opened");
        trackButton.removeClass("opened");

        trackInfo.removeClass("right");
        trackContainer.removeClass("right");
        trackButton.removeClass("right");
    }
}