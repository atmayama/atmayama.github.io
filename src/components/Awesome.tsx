import { useEffect, useRef } from "react";
import * as Three from "three";

const getMousePick = () => {
  const MousePickGeo = new Three.CircleGeometry(10, 64);
  const MousePickMaterial = new Three.MeshPhongMaterial({
    color: "#D6EFFF",
    opacity: 0.5,
  });
  const mousePick = new Three.Mesh(MousePickGeo, MousePickMaterial);

  mousePick.position.x = 50;
  mousePick.position.y = 50;
  mousePick.position.z = 0;

  return mousePick;
};

const getCamera = () => {
  const camera = new Three.OrthographicCamera(
    0,
    window.innerWidth,
    window.innerHeight,
    0,
    0,
    1000
  );
  camera.zoom = 1;
  camera.position.z = 100;
  return camera;
};

const render = (canvas: HTMLCanvasElement) => {
  const renderer = new Three.WebGLRenderer({
    canvas,
    alpha: true,
    premultipliedAlpha: false,
  });

  renderer.setSize(window.innerWidth, window.innerHeight);

  const scene = new Three.Scene();
  const camera = getCamera();

  const light = new Three.AmbientLight("white", 3);
  scene.add(light);

  const mousePick = getMousePick();
  scene.add(mousePick);

  const mousemove = (mouseEvent: MouseEvent) => {
    mousePick.position.x = mouseEvent.clientX;
    mousePick.position.y = window.innerHeight - mouseEvent.clientY;
    renderer.render(scene, camera);
  };
  const resize = () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.render(scene, camera);

    camera.right = window.innerWidth;
    camera.top = window.innerHeight;
    camera.updateProjectionMatrix();
  };
  const click = () => {
    mousePick.geometry.scale(1.5, 1.5, 1.5);
    renderer.render(scene, camera);
  };
  const rightClick = (e: Event) => {
    e.preventDefault();
    mousePick.geometry.scale(0.75, 0.75, 0.75);
    renderer.render(scene, camera);
  };
  window.addEventListener("click", click);
  window.addEventListener("contextmenu", rightClick);
  window.addEventListener("mousemove", mousemove);
  window.addEventListener("resize", resize);
};

export const Awesome = () => {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    if (ref.current) {
      render(ref.current);
    }
  }, [ref.current]);

  return (
    <canvas
      ref={ref}
      style={{
        position: "fixed",
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        zIndex: -1,
      }}
    ></canvas>
  );
};
