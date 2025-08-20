import React, { useEffect } from 'react';

const MouseFollower = () => {
    useEffect(() => {
        const follower = document.createElement('div');
        follower.style.position = 'fixed';
        follower.style.top = '0';
        follower.style.left = '0';
        follower.style.width = '24px';
        follower.style.height = '24px';
        follower.style.borderRadius = '50%';
        follower.style.background = 'pink';
        follower.style.pointerEvents = 'none';
        follower.style.zIndex = '9999';
        follower.style.transform = 'translate(-50%, -50%)';
        follower.style.transition = 'transform 0.08s cubic-bezier(0.22, 1, 0.36, 1)';
        document.body.appendChild(follower);

        const moveFollower = (e) => {
            follower.style.transform = `translate(${e.clientX - 12}px, ${e.clientY - 12}px)`;
        };
        window.addEventListener('mousemove', moveFollower);

        return () => {
            window.removeEventListener('mousemove', moveFollower);
            document.body.removeChild(follower);
        };
    }, []);

    return null;
};

export default MouseFollower;
