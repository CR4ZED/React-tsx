import classes from "./Paragraph.module.css";

interface ILetters {
  letter: string;
  match: boolean;
  className: string;
}
interface IProps {
  para?: string;
  letters: ILetters[];
}

export default function Paragraph(IProps: IProps) {
  const { para, letters } = IProps;

  return (
    <div className={classes["paragraph"]}>
      {letters.map(function (letter: ILetters) {
        return (
          <span key={Math.random()} className={classes[letter.className]}>
            {letter.letter}
          </span>
        );
      })}
    </div>
  );
}
