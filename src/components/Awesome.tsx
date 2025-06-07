import { memo, useEffect, useRef } from "react";
import * as Three from "three";

const MousePickGeo = new Three.CircleGeometry(3, 32);
const MousePickMaterial = new Three.MeshPhongMaterial({
  color: "#D6EFFF",
  opacity: 0.5,
});
const mousePick = new Three.Mesh(MousePickGeo, MousePickMaterial);

const rippleGeometry = new Three.RingGeometry(0, 5, 64);
const rippleMaterial = new Three.MeshBasicMaterial({
  color: "#ffffff",
  transparent: true,
  // side: Three.DoubleSide
});
const ripple = new Three.Mesh(rippleGeometry, rippleMaterial);
const RIPPLE_PERIOD = 300;

const getMousePick = () => {
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

  let startTime = performance.now();

  const rippleAnimate = () => {
    const elapsedTime = performance.now() - startTime;

    const alpha = 0.1;

    ripple.scale.x += alpha;
    ripple.scale.y += alpha;
    ripple.material.opacity -= 0.01;

    const position = mousePick.position;
    ripple.position.copy(position);
    ripple.lookAt(new Three.Vector3(0, 0, 1).add(position));

    if (elapsedTime < RIPPLE_PERIOD) {
      requestAnimationFrame(rippleAnimate);
    } else {
      ripple.scale.x = 1;
      ripple.scale.y = 1;
      ripple.material.opacity = 1;
      scene.remove(ripple);
      ripple.geometry.dispose();
      ripple.material.dispose();
    }
    renderer.render(scene, camera);
  }
  const rippleClick = () => {
    startTime = performance.now();

    scene.add(ripple);
    requestAnimationFrame(rippleAnimate);
  }

  window.addEventListener("mousemove", mousemove);
  window.addEventListener("mouseup", rippleClick)
  window.addEventListener("resize", resize);
};

export const Awesome = memo(() => {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    if (ref.current) {
      render(ref.current);
    }
  }, []);

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
}, () => true);
