import { useState } from "react";
import { MdArrowOutward } from "react-icons/md";

interface Props {
  image: string;
  alt?: string;
  video?: string;
  link?: string;
  description?: string;
}

const WorkImage = (props: Props) => {
  const [isVideo, setIsVideo] = useState(false);
  const [video, setVideo] = useState("");
  const handleMouseEnter = async () => {
    if (props.video) {
      setIsVideo(true);
      const response = await fetch(`src/assets/${props.video}`);
      const blob = await response.blob();
      const blobUrl = URL.createObjectURL(blob);
      setVideo(blobUrl);
    }
  };

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!props.link) e.preventDefault();
  };

  return (
    <div className="work-image">
      <a
        className="work-image-in"
        href={props.link || "#"}
        target={props.link ? "_blank" : undefined}
        onClick={handleClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={() => setIsVideo(false)}
        data-cursor={"disable"}
      >
        {props.link && (
          <div className="work-link">
            <MdArrowOutward />
          </div>
        )}
        <div className="work-flip">
          <div className="work-flip-front">
            <img src={props.image} alt={props.alt} />
            {isVideo && (
              <video src={video} autoPlay muted playsInline loop></video>
            )}
          </div>
          {props.description && (
            <div className="work-flip-back">
              <p>{props.description}</p>
            </div>
          )}
        </div>
      </a>
    </div>
  );
};

export default WorkImage;
