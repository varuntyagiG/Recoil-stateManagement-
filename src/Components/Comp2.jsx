import { useRecoilValue } from "recoil";
import { Comp3 } from "./Comp3";
import { countAtom } from "../store/atoms/count";
import { EvenCountRenderer } from "./EvenCountRenderer";

function Comp2() {
  let count = useRecoilValue(countAtom);

  return (
    <>
      <p>
        <b>Count :({count})</b>
      </p>
      <EvenCountRenderer />
      <Comp3 />
    </>
  );
}

export { Comp2 };
