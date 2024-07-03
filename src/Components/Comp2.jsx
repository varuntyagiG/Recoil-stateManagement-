import { useRecoilValue } from "recoil";
import { Comp3 } from "./Comp3";
import { countAtom } from "../store/atoms/count";

function Comp2() {
  let count = useRecoilValue(countAtom);

  return (
    <>
      <p>
        <b>Count :({count})</b>
      </p>
      <Comp3 />
    </>
  );
}

export { Comp2 };
