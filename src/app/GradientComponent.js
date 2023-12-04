'use client'
// GradientComponent.js

import React, { useEffect } from 'react';
import { Gradient } from './gradient';

const GradientComponent = () => {
    useEffect(() => {
        // Create your instance
        const gradient = new Gradient();

        // Call `initGradient` with the selector to your canvas
        gradient.initGradient('#gradient-canvas');
    }, []);

    return (
        <div className='canvas'>
            <canvas id="gradient-canvas" data-js-darken-top  data-transition-in style={{ width: '100%', height: '100%' }} />
        </div>
    );
};

export default GradientComponent;
