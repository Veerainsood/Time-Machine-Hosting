import React, { useState } from 'react'; // Import React and useState hook for managing state
import { initializeApp } from 'firebase/app'; // Import function to initialize Firebase
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'; // Import authentication functions from Firebase
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook for navigation
import styles from './style.module.css';
import { TimeMachine2 } from '../models/TimeMachine2'; // Import the TimeMachine2 model
import { Physics } from '@react-three/rapier'; // Import Physics for 3D physics simulation
import { OrbitControls } from '@react-three/drei'; // Import OrbitControls for user interaction
import { Canvas } from '@react-three/fiber'; // Import Canvas for rendering 3D graphics

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBADLgkoSxAj5D6XuL-nG76PAnri8yo5us",
  authDomain: "wanrakshak.firebaseapp.com",
  projectId: "wanrakshak",
  storageBucket: "wanrakshak.appspot.com",
  messagingSenderId: "51192366530",
  appId: "1:51192366530:web:2ffef819adbd61baca025b",
  measurementId: "G-V11LZJGL5W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig); // Initialize Firebase app with configuration
const auth = getAuth(app); // Get Firebase authentication instance

function Register() {
  const [email, setEmail] = useState(''); // State for storing email
  const [password, setPassword] = useState(''); // State for storing password
  const [FirstName, setFirstName] = useState(''); // State for storing email
  const [LastName, setLastName] = useState(''); // State for storing password
  const navigate = useNavigate(); // Initialize navigation

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission behavior

    // Create a user with email and password
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up successfully
        const user = userCredential.user; // Get user object
        alert('Account created successfully!'); // Alert success message
        // Navigate to the desired page after successful registration
        navigate('/NavigationPage'); // Redirect to NavigationPage
      })
      .catch((error) => {
        // Handle errors here
        const errorCode = error.code; // Get error code
        const errorMessage = error.message; // Get error message
        alert(`Error: ${errorMessage} (${errorCode})`); // Alert error message
      });
  };

  return (
    <>
    <div className={styles.position}>
    <div className={styles.wrapper}> {/* Use styles.wrapper here */}
      <form onSubmit={handleSubmit}>
        <h2>Register</h2>
        <div className={styles['input-field']}> {/* Use styles['input-field'] */}
          <input
            id="name"
            value={FirstName}
            placeholder='Enter Your First Name'
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </div>
        <div className={styles['input-field']}> {/* Use styles['input-field'] */}
          <input
            id="name"
            value={LastName}
            placeholder='Enter Your Last Name'
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </div>
        <div className={styles['input-field']}> {/* Use styles['input-field'] */}
          <input
            type="email"
            id="email"
            value={email}
            placeholder='Enter Your Email'
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className={styles['input-field']}> {/* Use styles['input-field'] */}
          <input
            type="password"
            id="password"
            value={password}
            placeholder='Enter Your Password'
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button className={styles.RegButton} type="submit">Register</button>
      </form>
    </div>
    <div className={styles.canvaReg}>
        <Canvas>
          <ambientLight intensity={3} />
          <pointLight position={[10, 10, 10]} />
          <Physics>
          <TimeMachine2 scale={[0.4, 0.4, 0.4]} />
          </Physics>
          <OrbitControls autoRotate autoRotateSpeed={1} />
        </Canvas>
    </div>
  </div>
    </>
  );
};

export default Register; // Export the Register component
