import { ImagText } from "../../moleculas/ImageText/ImagText";
import { Text } from "../../atoms";
import imageCardBack from "../../../assets/images/bg-card-back.png";

const CVC = "000";

export function CardBack({ cvc }) {
  const cvcDefault = cvc || CVC;
  return (
    <ImagText styles={{ left: "300px", top: "-80px" }} img={imageCardBack}>
      <Text
        text={cvcDefault}
        top="-240px"
        left="630px"
        color="hsl(270, 3%, 87%)"
      />
    </ImagText>
  );
}
