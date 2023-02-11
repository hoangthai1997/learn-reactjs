import React from "react";
import AlbumList from "./components/AlbumList/index";

AlbumFeature.propTypes = {};

function AlbumFeature(props) {
  const albumList = [
    {
      id: 1,
      name: "Rời Xa Thế Giới",
      thumbnaiUrl:
        "https://photo-zmp3.zmdcdn.me/banner/0/f/3/4/0f34dce0f938401109e913bcdf9412a1.jpg",
    },
    {
      id: 2,
      name: "Trào Lưu Nhạc Hot",
      thumbnaiUrl:
        "https://photo-zmp3.zmdcdn.me/banner/d/d/2/4/dd243b3822a181f31e98ed89be31b30d.jpg",
    },
    {
      id: 3,
      name: "Nhạc Trẻ Gây Nghiện",
      thumbnaiUrl:
        "https://photo-zmp3.zmdcdn.me/banner/8/2/2/f/822f8799a239d87e1853354d4c6f13e3.jpg",
    },
  ];
  return (
    <div>
      <h2>Có thể bạn sẽ thích đấy</h2>
      <AlbumList albumList={albumList} />
    </div>
  );
}

export default AlbumFeature;
