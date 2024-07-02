import { useRecoilState } from "recoil";
import { countAtom } from "../store/atoms/count";

function Comp4() {
  let [count, setCount] = useRecoilState(countAtom);

  return (
    <>
      <p>
        Count : (<b>{count}</b>)
      </p>
      <button
        onClick={() => {
          setCount(count + 1);
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
          setCount(count - 1);
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
