import React, { useEffect, useState } from 'react';

const ParticleBackground = () => {
    const [particleCount, setParticleCount] = useState(0);
    const [isDarkMode, setIsDarkMode] = useState(() => {
        // Initialize with current theme state to prevent mismatch
        if (typeof window !== 'undefined') {
            return document.documentElement.classList.contains('dark');
        }
        return false;
    });

    useEffect(() => {
        const checkDarkMode = () => {
            const darkMode = document.documentElement.classList.contains('dark');
            setIsDarkMode(darkMode);
        };

        checkDarkMode();

        const observer = new MutationObserver(checkDarkMode);
        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ['class']
        });

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        const isMobile = window.innerWidth <= 768;
        
        // Small delay to ensure theme is properly set
        const initializeParticles = () => {
            const script = document.createElement('script');
            script.src = 'https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js';
            script.onload = () => {
                if (window.particlesJS) {
                    window.particlesJS("particles-js", {
                        particles: {
                            number: {
                                value: isMobile ? 40 : 60,
                                density: {
                                    enable: true,
                                    value_area: 1000
                                }
                            },
                            color: {
                                value: isDarkMode ? "#ffffff" : "#000000"
                            },
                            shape: {
                                type: "circle",
                                stroke: {
                                    width: 0,
                                    color: isDarkMode ? "#ffffff" : "#000000"
                                }
                            },
                            opacity: {
                                value: 0.5
                            },
                            size: {
                                value: 3,
                                random: true
                            },
                            line_linked: {
                                enable: true,
                                distance: 150,
                                color: isDarkMode ? "#ffffff" : "#000000",
                                opacity: 0.4,
                                width: 1
                            },
                            move: {
                                enable: true,
                                speed: isMobile ? 1.5 : 3,
                                direction: "none",
                                out_mode: "out"
                            }
                        },
                        interactivity: {
                            detect_on: "canvas",
                            events: {
                                onhover: {
                                    enable: !isMobile,
                                    mode: "repulse"
                                },
                                onclick: {
                                    enable: !isMobile,
                                    mode: "push"
                                },
                                resize: true
                            },
                            modes: {
                                repulse: {
                                    distance: 100,
                                    duration: 0.4
                                },
                                push: {
                                    particles_nb: 2
                                }
                            }
                        },
                        retina_detect: true
                    });

                    const updateCount = () => {
                        if (window.pJSDom?.[0]?.pJS?.particles?.array) {
                            setParticleCount(window.pJSDom[0].pJS.particles.array.length);
                        }
                        requestAnimationFrame(updateCount);
                    };
                    updateCount();
                }
            };

            const existingScript = document.querySelector('script[src*="particles.min.js"]');
            if (!existingScript) {
                document.head.appendChild(script);
            } else {
                if (window.particlesJS) {
                    script.onload();
                }
            }
        };

        // Initialize particles after a small delay to ensure theme is set
        const timeoutId = setTimeout(initializeParticles, 50);

        return () => {
            clearTimeout(timeoutId);
            if (window.pJSDom?.[0]) {
                window.pJSDom[0].pJS.fn.vendors.destroypJS();
                window.pJSDom = [];
            }
        };
    }, [isDarkMode]);

    return (
        <div
            id="particles-js"
            className="absolute inset-0 w-full h-full"
            style={{
                backgroundColor: 'transparent',
                backgroundImage: 'url("")',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: '50% 50%'
            }}
        />
    );
};

export default ParticleBackground;
