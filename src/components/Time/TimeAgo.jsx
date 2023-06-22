import {parseISO, formatDistanceToNow} from 'date-fns';

const TimeAgo = ({timestamp}) => {
    let timeAgo = "";
    if(timestamp) {
        const date = parseISO(timestamp);
        const period = formatDistanceToNow(date);

        timeAgo = `${period} ago`;
    }
    return (
        <div>
            <span>
                &nbsp; <i>{timeAgo}</i>
            </span>
        </div>
    )
}

export default TimeAgo;