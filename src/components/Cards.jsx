const Cards = ({ videos, postIdsArr }) => {
  return (
    <div className="flex flex-wrap gap-8 w-full h-full">
      {videos?.map((video) => (
        <Card
          key={video.EngagementPostId}
          video={video}
          postIdsArr={postIdsArr}
        />
      ))}
    </div>
  );
};

export default Cards;

const Card = ({ video, postIdsArr }) => {
  return (
    <div className="relative bg-white shadow-md h-48 w-36 rounded-md">
      <input
        type="checkbox"
        className="absolute left-2 top-2"
        value={video.EngagementPostId}
        onChange={(e) => postIdsArr.push(e.target.value)}
      />
      <img
        src={video.Thumbnail_URL}
        alt={video.Thumbnail_Title}
        className="h-full object-cover"
      />
      <div className="absolute bottom-0 right-0 h-10 w-full bg-gray-700 text-left text-white p-1 overflow-hidden">
        <p>{video.Thumbnail_Title}</p>
      </div>
    </div>
  );
};
