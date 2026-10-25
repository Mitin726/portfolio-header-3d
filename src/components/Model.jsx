// src/components/Model.jsx
import { useEffect, useRef } from 'react';
import { useLoader } from '@react-three/fiber';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';
import { useAnimations } from '@react-three/drei';

export default function Model() {
  const group = useRef();
  const fbx = useLoader(FBXLoader, '/model.fbx');
  const { actions, names } = useAnimations(fbx.animations, group);

  useEffect(() => {
    if (names.length > 0) {
      const actionName = names[0];
      const action = actions[actionName];
      action.play();
      action.fadeIn(0.5);
    }
  }, [actions, names]);
  return (
    <group ref={group} position={[0, -2.5, 0]} scale={0.028}>
      <primitive object={fbx} />
    </group>
  );
}