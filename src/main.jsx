import React from 'react';
import { createRoot } from 'react-dom/client';
import { MotionConfig } from 'motion/react';
import App from './App';
import styles from './styles.module.css';
createRoot(document.getElementById('root')).render(<React.StrictMode><MotionConfig reducedMotion="user"><div className={styles.shell}><App/></div></MotionConfig></React.StrictMode>);


