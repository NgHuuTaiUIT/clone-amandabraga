import styled from "@emotion/styled";
import React, { useEffect, useRef } from "react";

const Cursor = styled.div`
  z-index: 1000;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  /* border: 1px solid black; */
  background-color: black;
  pointer-events: none;
  overflow: hidden;
  transform: translate3d(0, 0, 0);
  /* transition: transform 0.003s; */
  position: fixed;
`;

const FollowCursor = styled.div`
  z-index: 1000;
  border-radius: 50%;
  width: 80px;
  height: 80px;
  border: 1px solid black;
  pointer-events: none;
  overflow: hidden;
  transform: translate3d(0, 0, 0);

  position: fixed;
`;

const CustomCursor = (props: any) => {
  const mainCursor = useRef(null);
  const secondaryCursor = useRef(null);

  const positionRef = useRef<any>({
    mouseX: 0,
    mouseY: 0,
    destinationX: 0,
    destinationY: 0,
    distanceX: 0,
    distanceY: 0,
    key: -1
  });
  useEffect(() => {
    // if (document) {
    document.addEventListener("mousemove", e => {
      const { clientX, clientY } = e;

      const mouseX = clientX;
      const mouseY = clientY;
      positionRef.current.mouseX =
        mouseX - secondaryCursor.current.clientWidth / 2;
      positionRef.current.mouseY =
        mouseY - secondaryCursor.current.clientHeight / 2;

      mainCursor.current.style.transform = `translate3d(${
        mouseX - mainCursor.current.clientWidth / 2
      }px,${mouseY - mainCursor.current.clientHeight / 2}px,0)`;

      //   mainCursor.current.style.transform = `translate3d(${mouseX}px,${mouseY}px,0)`;
    });
    // }

    return () => {};
  }, []);
  //   return <Cursor ref={mainCursor} />;

  useEffect(() => {
    const followMouse = () => {
      positionRef.current.key = requestAnimationFrame(followMouse);

      const {
        mouseX,
        mouseY,
        destinationX,
        destinationY,
        distanceX,
        distanceY
      } = positionRef.current;

      if (!destinationX | !destinationY) {
        positionRef.current.destinationX = mouseX;
        positionRef.current.destinationY = mouseY;
      } else {
        positionRef.current.distanceX = (mouseX - destinationX) * 0.08;
        positionRef.current.distanceY = (mouseY - destinationY) * 0.08;

        if (
          Math.abs(positionRef.current.distanceY) +
            Math.abs(positionRef.current.distanceX) <
          0.1
        ) {
          positionRef.current.destinationX = mouseX;
          positionRef.current.destinationY = mouseY;
        } else {
          positionRef.current.destinationX += distanceX;
          positionRef.current.destinationY += distanceY;
        }
      }
      secondaryCursor.current.style.transform = `translate3d(${destinationX}px,${destinationY}px,0)`;
    };

    followMouse();
  }, []);

  return (
    <>
      <Cursor ref={mainCursor} />
      <FollowCursor ref={secondaryCursor} />
    </>
  );
};
export default CustomCursor;
