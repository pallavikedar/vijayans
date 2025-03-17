import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import { motion } from "framer-motion";
import { PlayCircle } from "lucide-react";
import "../Style/SessionsVideo.css";
import video1 from '../Assets/Video/IMG_7072.mp4'
import video2 from '../Assets/Video/IMG_7069.mp4'
import video3 from '../Assets/Video/IMG_7063.mp4'
import video4 from '../Assets/Video/IMG_7062.mp4'
import video5 from '../Assets/Video/IMG_7053.mp4'
import video6 from '../Assets/Video/IMG_7036.mp4'
import video7 from '../Assets/Video/IMG_7017.mp4'

const videoData = [
  { id: 1, src: video1, title: "Session 1" },
  { id: 2, src: video2, title: "Session 2" },
  { id: 3, src: video3, title: "Session 3" },
  { id: 4, src: video4, title: "Session 3" },
  { id: 5, src: video5, title: "Session 3" },
  { id: 6, src: video6, title: "Session 3" },
  { id: 7, src: video7, title: "Session 3" },
];

const SessionsVideo = () => {
  const videoRefs = useRef({});

  const handlePlay = (id) => {
    Object.values(videoRefs.current).forEach((video) => video.pause());
    videoRefs.current[id].play();
  };

  return (
    <div className="sessions-video-container">
    <h1 className="section_title1">Session videos</h1>
      <Swiper
        modules={[Pagination, Navigation]}
        pagination={{ clickable: true }}
        navigation
        spaceBetween={30}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 1 },
          1024: { slidesPerView: 3 },
        }}
        loop
        className="video-swiper"
      >
        {videoData.map((video) => (
          <SwiperSlide key={video.id} className="video-slide">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="video-wrapper"
            >
              <video
                ref={(el) => (videoRefs.current[video.id] = el)}
                src={video.src}
                className="video-player"
                controls
              />
              <button
                onClick={() => handlePlay(video.id)}
                className="play-button"
              >
                <PlayCircle className="play-icon" />
              </button>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SessionsVideo;