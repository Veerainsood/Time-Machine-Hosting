import { OrbitControls, useAnimations, useGLTF } from "@react-three/drei"
import { useEffect, useRef } from "react"
import { useFrame, useThree } from "@react-three/fiber"

import * as THREE from 'three'
import { RigidBody } from "@react-three/rapier"
import { board } from "../hooks/board"

// Initialize direction vectors and quaternions for movement and rotation
let walkDirection = new THREE.Vector3();
let rotateAngle = new THREE.Vector3(0, 1, 0);
let rotateQuarternion = new THREE.Quaternion();
let cameraTarget = new THREE.Vector3();

// Function to calculate direction offset based on movement input
const directionOffset = ({ moveForward, moveBackward, moveLeft, moveRight }) => {
    let directionOffset = 0;
    if (moveForward) {
        if (moveLeft) {
            directionOffset = Math.PI / 4; // Forward-Left
        } else if (moveRight) {
            directionOffset = -Math.PI / 4; // Forward-Right
        }
    } else if (moveBackward) {
        if (moveLeft) {
            directionOffset = Math.PI / 4 + Math.PI / 2; // Backward-Left
        } else if (moveRight) {
            directionOffset = -Math.PI / 4 - Math.PI / 2; // Backward-Right
        } else {
            directionOffset = Math.PI; // Backward
        }
    } else if (moveLeft) {
        directionOffset = Math.PI / 2; // Left
    } else if (moveRight) {
        directionOffset = -Math.PI / 2; // Right
    }
    return directionOffset;
};

export const MyPlayer = () => {
    // Get movement inputs from the board hook
    const { moveBackward, moveForward, moveRight, moveLeft, jump } = board();
    // Load the 3D model and its animations
    const model = useGLTF("/character1.glb");
    const { actions } = useAnimations(model.animations, model.scene);
    // Scale the model to half size
    model.scene.scale.set(0.5,0.5,0.5);
    const currentAction = useRef("");
    const controlsRef = useRef(null);
    // Get the camera object from the three.js context
    const camera = useThree((state) => state.camera);

    // Function to update the camera's target based on player movement
    const updateCameraTarget = (moveX, moveZ) => {
        // Adjust camera position
        camera.position.x += moveX;
        camera.position.z += moveZ;

        // Set the new camera target position
        cameraTarget.x = model.scene.position.x;
        cameraTarget.z = model.scene.position.z;
        cameraTarget.y = model.scene.position.y + 2;

        // Update OrbitControls' target
        if (controlsRef.current) controlsRef.current.target = cameraTarget;
    };

    useEffect(() => {
        // Determine the current action based on movement input
        let action = "";
        if (moveBackward || moveForward || moveLeft || moveRight) {
            action = "run"; // Running action
        } else if (jump) {
            action = "jump_air"; // Jumping action
        } else {
            action = "idle"; // Default idle action
        }

        // Transition to the new action if it has changed
        if (currentAction.current !== action) {
            const nextActionToPlay = actions[action];
            const current = actions[currentAction.current];
            current?.fadeOut(0.2); // Smooth transition from current action
            nextActionToPlay?.reset().fadeIn(0.2).play(); // Start new action
            currentAction.current = action; // Update current action reference
        }
    }, [moveForward, moveBackward, moveLeft, moveRight, jump]);

    // Frame-by-frame updates for smooth movement and rotation
    useFrame((state, delta) => {
        if (currentAction.current === "run") {
            // Calculate angle between camera and player position
            const angleYCameraDirection = Math.atan2(
                camera.position.x - model.scene.position.x,
                camera.position.z - model.scene.position.z
            );

            // Determine the direction offset based on movement input
            const newDirectionOffset = directionOffset({
                moveForward, moveBackward, moveLeft, moveRight
            });

            // Apply rotation based on the camera direction and input offset
            rotateQuarternion.setFromAxisAngle(
                rotateAngle,
                angleYCameraDirection + newDirectionOffset
            );
            model.scene.quaternion.rotateTowards(rotateQuarternion, 0.2);
            // Determine walking direction relative to the camera
            camera.getWorldDirection(walkDirection);
            walkDirection.y = 0; // Prevent vertical movement
            walkDirection.normalize();
            walkDirection.applyAxisAngle(rotateAngle, newDirectionOffset);

            // Calculate movement speed
            const velocity = currentAction.current === "run" ? 10 : 5;
            const moveX = walkDirection.x * velocity * delta;
            const moveZ = walkDirection.z * velocity * delta;
            model.scene.position.x += moveX; // Update player position on X-axis
            model.scene.position.z += moveZ; // Update player position on Z-axis

            // Update camera to follow the player
            updateCameraTarget(moveX, moveZ);
        }
    });

    return (
        <>
            {/* Attach OrbitControls for better camera handling */}
            <OrbitControls ref={controlsRef} />
            {/* Add the player model as a fixed rigid body */}
            <RigidBody type="fixed" colliders='cuboid'>
                <primitive object={model.scene} />
            </RigidBody>
        </>
    );
};
