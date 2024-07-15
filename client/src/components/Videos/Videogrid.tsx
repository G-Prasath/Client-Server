import React from "react";
import ReactPlayer from "react-player";

const Videogrid = () => {

  const vidList = ["Chomept.mp4", "thirupur_colmpleted.mp4", "jrt.mp4", "thirupur.mp4"]

  return (
    <div className="mt-8 w-full grid grid-cols-2 gap-10 max-md:gap-5 max-lg:grid-cols-1 sec-padding overflow-hidden">
      {vidList.map((item, index) => (
        <div className="w-full aspect-video" key={index}>
          <ReactPlayer
            controls={true}
            url={`/videos/${item}`}
            width="full"
            height="auto"
          />
        </div>
      ))}
    </div>
  );
};

export default Videogrid;
