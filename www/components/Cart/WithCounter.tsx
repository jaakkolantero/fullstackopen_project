import React, { useState, useEffect } from "react";
import { useSpring, animated } from "react-spring";
import { useDrag } from "react-use-gesture";
import { clamp, isBetween } from "../../utils";

export interface WithCounterProps {
  children: React.ReactNode;
  count?: number;
  onCountChange?: (count: number) => void;
}

const WithCounter = ({
  children,
  onCountChange,
  count: newCount,
}: WithCounterProps) => {
  const [count, setCount] = useState(0);
  const increment = () => setCount(prevCount => Math.min(prevCount + 1, 99));
  const decrement = () => setCount(prevCount => Math.max(prevCount - 1, 0));

  useEffect(() => {
    onCountChange && onCountChange(count);
  }, [count]);

  useEffect(() => {
    if (newCount) {
      setCount(isBetween(newCount, 0, 99));
    }
  }, [newCount]);

  const [{ x }, set] = useSpring(() => ({ x: 0 }));
  const bind = useDrag(({ down, movement, memo = [x.getValue()] }) => {
    const [leftBound, rightBound] = [-120, 6];
    const currentMovement = clamp(memo[0] + movement[0], leftBound, rightBound);
    const openRightMenu = -100;
    if (down) {
      set({ x: currentMovement });
    } else {
      if (currentMovement < openRightMenu) {
        set({ x: openRightMenu });
      } else {
        set({ x: 0 });
      }
    }
  });

  return (
    <>
      <div className="flex justify-center w-full">
        <animated.div className="-mr-20 z-50" {...bind()} style={{ x }}>
          {children}
        </animated.div>
        <div className="flex items-center -ml-20 w-40 z-0 bg-gray-900 text-gray-300 rounded">
          <div className="flex items-baseline justify-end w-full mr-2">
            <button
              onClick={decrement}
              className="rounded border border-gray-700 h-6 w-6"
            >
              -
            </button>
            <div className="text-gray-300 px-3 py-2">{count}</div>
            <button
              onClick={increment}
              className="rounded border border-gray-700 h-6 w-6"
            >
              +
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default WithCounter;
