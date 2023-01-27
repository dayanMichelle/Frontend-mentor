import { Text } from "../../atoms";
import { ImagText } from "../../moleculas/ImageText/ImagText";
import imageCardBack from "../../../assets/images/bg-card-front.png";

const NUMBERCARD = "0000 0000 0000 0000";
const NAMECARD = "Jane Austen";
const MM = "00";
const YY = "00";

export function CardFront({ number, name, yy, mm }) {
  const numberDefault = number || NUMBERCARD;
  const nameDefault = name || NAMECARD;
  const mmDefault = mm || MM;
  const yyDefault = yy || YY;


  return (
    <ImagText styles={{ left: "200px" }} img={imageCardBack}>
      <Text text={numberDefault} top="-130px" left="220px" color="white" />
      <Text
        text={nameDefault}
        top="-130px"
        size="10px"
        left="220px"
        color="white"
      />
      <Text text={`${mmDefault} / ${yyDefault}`} top="-155px" size="10px" left="550px" color="white" />
    </ImagText>
  );
}
