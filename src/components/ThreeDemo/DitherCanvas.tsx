import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const DitherCanvas: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        // === THREE.JS CODE START ===
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        
        const renderer = canvasRef.current ? new THREE.WebGLRenderer({ canvas: canvasRef.current }) : null;

        if (renderer) {
            renderer.setSize(window.innerWidth / 2, window.innerHeight / 2);

            const geometry = new THREE.BoxGeometry(1, 1, 1);
            const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
            const cube = new THREE.Mesh(geometry, material);
            scene.add(cube);

            camera.position.z = 5;

            const animate = () => {
                requestAnimationFrame(animate);

                cube.rotation.x += 0.01;
            };

            if (renderer) {
                animate();
            }
        // === THREE.JS CODE END ===
        }
    }, []);

    return <canvas ref={canvasRef} />;
};

export default DitherCanvas;