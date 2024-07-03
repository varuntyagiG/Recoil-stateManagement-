import { useRecoilValue } from "recoil";
import { evenSelector } from "../store/atoms/Selector/EvenSelector";

function EvenCountRenderer() {
  let count = useRecoilValue(evenSelector);
  return <div>{count % 2 === 0 ? "it is even" : null}</div>;
}

export { EvenCountRenderer };
