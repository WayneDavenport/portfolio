import { useEffect, useRef } from 'react';

function useLazyLoad(ref) {
    useEffect(() => {
        const element = ref.current;
        if ("IntersectionObserver" in window) {
            const observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            const video = entry.target;
                            for (const source of video.children) {
                                if (source.tagName === "SOURCE") {
                                    source.src = source.dataset.src;
                                }
                            }
                            video.load();
                            observer.unobserve(video);
                        }
                    });
                },
                { threshold: 0.5 } // Observe element when 50% visible
            );
            observer.observe(element);

            return () => observer.disconnect(); // Cleanup on unmount
        }
    }, [ref]);
}

export default useLazyLoad;
