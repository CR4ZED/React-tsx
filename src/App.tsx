import "./styles.css";
import { useState, useEffect } from "react";
import Paragraph from "./Paragraph";
import TypeArea from "./TypeArea";

const paras: string[] = [
  "Sunset is the time of day when our sky meets the outer space solar winds. There are blue, pink, and purple swirls, spinning and twisting, like clouds of balloons caught in a whirlwind. The sun moves slowly to hide behind the line of horizon, while the moon races to take its place in prominence atop the night sky. People slow to a crawl, entranced, fully forgetting the deeds that must still be done. There is a coolness, a calmness, when the sun does set.",
  "It was July 21, 1969, and Neil Armstrong awoke with a start. It was the day he would become the first human being to ever walk on the moon. The journey had begun several days earlier, when on July 16th, the Apollo 11 launched from Earth headed into outer space. On board with Neil Armstrong were Michael Collins and Buzz Aldrin. The crew landed on the moon in the Sea of Tranquility a day before the actual walk. Upon Neil’s first step onto the moon’s surface, he declared, “That’s one small step for man, one giant leap for mankind.” It sure was!",
  "Oceans and lakes have much in common, but they are also quite different. Both are bodies of water, but oceans are very large bodies of salt water, while lakes are much smaller bodies of fresh water. Lakes are usually surrounded by land, while oceans are what surround continents. Both have plants and animals living in them. The ocean is home to the largest animals on the planet, whereas lakes support much smaller forms of life. When it is time for a vacation, both will make a great place to visit and enjoy."
];

export default function App() {
  interface ILetters {
    letter: string;
    match: boolean;
    className: string;
  }

  const [para, setPara] = useState<string>(paras[0]);
  const [letters, setLetters] = useState<ILetters[]>([]);

  useEffect(() => {
    setLetters(
      para.split("").map((letter) => {
        return {
          letter,
          match: false,
          className: ""
        };
      })
    );
  }, [para]);

  function changeParagraph(e: React.ChangeEvent<HTMLSelectElement>) {
    const key = e.target.value;

    switch (key) {
      case "0": {
        return setPara(paras[+key]);
      }
      case "1": {
        return setPara(paras[+key]);
      }
      case "2": {
        return setPara(paras[+key]);
      }
      default: {
        return setPara(paras[0]);
      }
    }
  }

  return (
    <div className="App">
      <select onChange={changeParagraph}>
        <option value="0">sunset</option>
        <option value="1">Apolo Space mission</option>
        <option value="2">Oceans</option>
      </select>
      <Paragraph para={para} letters={letters} />
      <TypeArea letters={letters} setLetters={setLetters} />
    </div>
  );
}
