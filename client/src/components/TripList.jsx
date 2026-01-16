import TripCard from "./TripCard";
import { useState, useEffect } from "react";
import axios from "axios";

function TripList() {
  const [items, setItems] = useState([]);
  const [searchText, setSearchText] = useState("");

  const getItems = async () => {
    let respons = await axios.get(
      `http://localhost:4001/trips?keywords=${searchText}`
    );
    console.log(respons);
    setItems(respons.data.data);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    getItems();
  };

  const handleClickTag = (tag) => {
    const currentTags = searchText.split(" ");

    if (!currentTags.includes(tag)) {
        const newText = searchText === "" ? tag : `${searchText} ${tag}`;
        setSearchText(newText)
    }
  };

  useEffect(() => {
    getItems();
  }, []);

  return (
    <div className="main-content">
      <form onSubmit={handleSubmit}>
        <div className="search-box flex flex-col items-center justify-center pt-10 px-4 w-full relative">
          <div className="w-full max-w-6xl">
            <p>ค้นหาที่เที่ยว</p>
          </div>
          <input
            className="text-center border-b border-gray-500 focus:border-sky-400 outline-none py-2 text-xl text-gray-600 w-full max-w-6xl"
            type="text"
            placeholder="หาที่เที่ยวแล้วไปกัน..."
            onChange={(event) => {
              setSearchText(event.target.value);
            }}
            value={searchText}
          />
          <button
            className="absolute bottom-1 right-70 border p-2 border-gray-500 rounded-4xl hover:scale-105 hover:text-blue-400 hover:border-blue-600 cursor-pointer"
            type="submit"
          >
            Search
          </button>
        </div>
        </form>

        <div className="flex flex-col relative">
          {items.map((item) => {
            return (
              <TripCard
                key={item.eid}
                title={item.title}
                description={item.description}
                imgSrc={item.photos[0]}
                tag={item.tags}
                img1={item.photos[1]}
                img2={item.photos[2]}
                img3={item.photos[3]}
                url={item.url}
                onTagClick={handleClickTag}
              />
            );
          })}
        </div>
    </div>
  );
}

export default TripList;
