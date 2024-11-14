import create from 'zustand' // Import the Zustand library for state management
import { nanoid } from 'nanoid' // Import nanoid to generate unique keys
import { texture } from 'three/webgpu' // Import texture from Three.js WebGPU

// Create a Zustand store to manage game state
export const useStore = create((set) => ({
    // Default texture set to 'dirt'
    texture: 'dirt',
    // Initialize cubes array with a single cube object
    cubes: [
        {
            key: nanoid(), // Generate a unique key for the cube
            pos: [1,1,1], // Set position of the cube
            texture: 'dirt' // Set texture of the cube to 'dirt'
        }
    ],
    // Function to add a new cube at a specific (x, y, z) position
    addCube: (x, y, z) => {
        set((prev) => ({
            cubes: [
                ...prev.cubes, // Spread previous cubes into the new array
                {
                    key: nanoid(), // Generate a unique key for the new cube
                    pos: [x, y, z], // Position of the new cube
                    texture: prev.texture // Use the current texture from the store
                }
            ]
        }))
    },
    // Placeholder function for removing a cube
    removeCube: () => {},
    // Placeholder function for setting texture
    setTexture: () => {},
    // Placeholder function to save the current state of the world
    saveWorld: () => {},
    // Placeholder function to reset the world to its initial state
    resetWorld: () => {}
}))
