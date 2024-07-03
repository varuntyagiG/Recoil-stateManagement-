import { useSetRecoilState } from "recoil";
import { countAtom } from "../store/atoms/count";

function Comp4() {
  let setCount = useSetRecoilState(countAtom);

  return (
    <>
      <button
        onClick={() => {
          setCount((c) => {
            return c + 1;
          });
        }}
        style={{
          backgroundColor: "red",
          borderRadius: "15px",
          height: "25px",
          width: "100px",
        }}
      >
        Increase
      </button>
      &nbsp; &nbsp;
      <button
        onClick={() => {
          setCount((c) => {
            return c - 1;
          });
        }}
        style={{
          backgroundColor: "grey",
          borderRadius: "15px",
          height: "25px",
          width: "100px",
        }}
      >
        Decrease
      </button>
    </>
  );
}

export { Comp4 };
