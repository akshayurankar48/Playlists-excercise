import { useEffect, useState } from "react";
import Cards from "./components/Cards";
import Header from "./components/Header";

function App() {
  const [data, setData] = useState([]);
  let postIdsArr = [];

  const fetchVideos = () => {
    fetch(
      "https://fxojmluid9.execute-api.ap-south-1.amazonaws.com/Prod/api/engt/getfeeds_v1",
      {
        method: "POST",
        headers: {
          "X-api-key": "MXqO3cDcr492OTPGZZAot7akPvLmfKbA4bKt5Ryr",
          "X-tenant-key": "DIVANOR123",
        },
        body: JSON.stringify({
          Index: 1,
          ContentType: [2],
        }),
      }
    )
      .then((res) => res.json())
      .then((data) => setData(data.data.Feeds))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchVideos();
  }, []);

  return (
    <div className="bg-gray-100 h-screen w-screen p-4">
      <Header postIdsArr={postIdsArr} />
      <Cards videos={data} postIdsArr={postIdsArr} />
    </div>
  );
}

export default App;
