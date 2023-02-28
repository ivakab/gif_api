import React, { useEffect, useState } from "react";
import ShowGIF from "./components/ShowGIF";
import { ApiGIF } from "./components/ApiGIF";
import styles from "./App.module.css";
import { Buttons } from "./components/Buttons/Buttons";
import { Inputs } from "./components/Inputs/Inputs";

export type GifType = {
  url: string;
  title: string;
};

function App() {
  const [showGIF, setShowGIF] = useState(false);
  const [gifName, setGifName] = useState("");

  const [gif, setGif] = useState<GifType[]>([]);

  const Search = () => {
    ApiGIF.searchByQuery(gifName).then(setGifsFromApi);
  };

  const Trending = () => {
    ApiGIF.getTrending().then(setGifsFromApi);
  };

  const Translate = () => {
    ApiGIF.searchTranslate(gifName, 0).then(setGifs);
  };

  const setGifs = (res: any) => {
    console.log(res.data.images.fixed_height.url);
    setGif([
      {
        url: res.data.images.fixed_height.url,
        title: res.data.title,
      },
    ]);
    setShowGIF(true);
  };

  const setGifsFromApi = (res: any) => {
    console.log(res.data);
    setGif(
      res.data.map((item: any) => ({
        url: item.images.fixed_height.url,
        title: item.title,
      }))
    );
    setShowGIF(true);
  };

  return (
    <div className={styles.App}>
      <div className={styles.searchRow}>
        <Inputs
          type={"text"}
          value={gifName}
          onChange={(e) => setGifName(e.target.value)}
        />
        <Buttons onClick={Search} label="Search" />
        <Buttons onClick={Trending} label="Trending" />
        <Buttons onClick={Translate} label="Translate" />
      </div>
      {showGIF && <ShowGIF gifs={gif} />}
    </div>
  );
}

export default App;
