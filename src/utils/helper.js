import {formatDistanceToNow} from  'date-fns';


export const formatViewCount = (count) => {
    if (count >= 1000000) {
        return (count / 1000000).toFixed(1) + 'M';
    } else if (count >= 1000) {
        return (count / 1000).toFixed(1) + 'K';
    } else {
        return count?.toString();
    }
  };
  
  export const formatPublishTime = (publishTime) => {
    return formatDistanceToNow(new Date(publishTime), { addSuffix: true });
  };
  
  export const formatDuration = (duration) => {
    if (!duration) return "N/A"; // Handle null or undefined
    const match = duration.match(/PT(\d+H)?(\d+M)?(\d+S)?/);
    if (!match) return "N/A";
  
    const hours = match[1] ? parseInt(match[1].replace("H", ""), 10) : 0;
    const minutes = match[2] ? parseInt(match[2].replace("M", ""), 10) : 0;
    const seconds = match[3] ? parseInt(match[3].replace("S", ""), 10) : 0;
  
    return `${hours > 0 ? `${hours}:` : ""}${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
  };
  