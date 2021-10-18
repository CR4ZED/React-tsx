import { useState } from "react";
import classes from "./TypeArea.module.css";
import React from "react";

interface ILetters {
  letter: string;
  match: boolean;
  className: string;
}

interface ICb {
  (state: ILetters[]): ILetters[];
}

interface IProps {
  letters: ILetters[];
  setLetters: (callback: ICb) => void;
}

function TypeArea(props: IProps) {
  const { letters, setLetters } = props;
  const [prevIdx, setPrevIdx] = useState(-1);

  function updateClassName(classname: string, match: boolean, idx: number) {
    return setLetters((state: ILetters[]) => {
      const updatedLetters: ILetters[] = [...state];
      updatedLetters[idx].match = match;
      updatedLetters[idx].className = classname;
      return updatedLetters;
    });
  }

  function readKey(e: React.ChangeEvent<HTMLTextAreaElement>) {
    const word: string = e.target.value;
    const currIdx: number = e.target.value.length - 1;
    if (prevIdx === 0 && currIdx === -1) {
      updateClassName("", false, prevIdx);
    }
    if (word.length > 0) {
      const currLetter: string = word[word.length - 1];

      if (currIdx < letters.length) {
        console.log(currLetter, currIdx, letters[currIdx].letter);
        if (prevIdx > currIdx) {
          setPrevIdx(currIdx);
          return updateClassName("", false, prevIdx);
        }
        // if (currLetter === letters[currIdx].letter) {
        //   setPrevIdx(currIdx);
        //   return updateClassName("correct", true, currIdx);
        // }

        if (currLetter !== letters[currIdx].letter) {
          setPrevIdx(currIdx);
          return updateClassName("incorrect", false, currIdx);
        }
      }
    }
    /*
    compare letters[currIdx] with currLetter
      if matched then assign class of correct to the span
      else
        assign incorrect to span


    */
  }
  return (
    <textarea
      className={classes["typearea"]}
      placeholder="type...."
      onChange={readKey}
    ></textarea>
  );
}

export default React.memo(TypeArea);
