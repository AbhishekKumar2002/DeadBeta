/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 earth_new.gltf 
Author: PatelDev (https://sketchfab.com/PatelDev)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/earth-f7a76c63ff1846afb2d606e5c8369c15
Title: Earth
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useThree } from '@react-three/fiber'

export default function Model(props) {
  const { nodes, materials } = useGLTF("/models/earth_new1.gltf");
  const { camera } = useThree();
  // Set the initial camera position for zoom
  camera.position.set(1.5, 1.5, 1.5);
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.Object_4.geometry}
        material={materials["Scene_-_Root"]}
        scale={1.128}
      />
    </group>
  );
}

useGLTF.preload("/earth_new.gltf");
