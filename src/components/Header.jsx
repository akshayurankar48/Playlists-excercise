import { useState } from "react";

const Header = ({ postIdsArr }) => {
  const [playlistName, setPlayListName] = useState("");
  const [playlistDesc, setPlayListDesc] = useState("");

  const createPlaylist = () => {
    if (!playlistName || !playlistDesc) {
      alert("Please enter playlist Name or Desc");
    }

    if (postIdsArr.length === 0) {
      alert("Please select videos to add to playlist");
    }

    fetch(
      "https://fxojmluid9.execute-api.ap-south-1.amazonaws.com/Prodapi/engt/createPlayList",
      {
        method: "POST",
        mode: "cors",
        headers: {
          "x-api-key": "MXqO3cDcr492OTPGZZAot7akPvLmfKbA4bKt5Ryr",
          "x-tenant-key": "DIVANOR123",
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
          PlayListId: Math.floor(Math.random() * 100),
          Post_Ids: postIdsArr,
          Name: playlistName,
          Description: playlistDesc,
        }),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setPlayListName("")
        setPlayListDesc("")
        console.log({ data })})
      .catch((err) => console.error(err));
  };

  return (
    <div className="flex items-center justify-between mb-8">
      <input
        className="h-8 w-1/3 text-gray-700 text-md px-1 border border-gray-400 rounded-md outline-none"
        placeholder="Playlist Name*"
        type="text"
        value={playlistName}
        onChange={(e) => setPlayListName(e.target.value)}
      />
      <input
        className="h-8 w-1/3 text-gray-700 text-md px-1 border border-gray-400 rounded-md outline-none"
        type="text"
        placeholder="Description"
        value={playlistDesc}
        onChange={(e) => setPlayListDesc(e.target.value)}
      />
      <button
        onClick={createPlaylist}
        className="text-md text-white bg-blue-600 rounded-md w-52 py-2"
      >
        + Create Playlist
      </button>
    </div>
  );
};

export default Header;
