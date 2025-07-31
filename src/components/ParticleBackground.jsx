import React, { useEffect, useState } from 'react';

const ParticleBackground = () => {
    const [particleCount, setParticleCount] = useState(0);
    const [isDarkMode, setIsDarkMode] = useState(false);

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
        const width = window.innerWidth;
        const isMobileOrTablet = width <= 1024;

        const script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js';
        script.onload = () => {
            if (window.particlesJS) {
                window.particlesJS("particles-js", {
                    particles: {
                        number: {
                            value: isMobileOrTablet ? 20 : 60,
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
                            enable: !isMobileOrTablet,
                            distance: 150,
                            color: isDarkMode ? "#ffffff" : "#000000",
                            opacity: 0.4,
                            width: 1
                        },
                        move: {
                            enable: true,
                            speed: isMobileOrTablet ? 1.5 : 3,
                            direction: "none",
                            out_mode: "out"
                        }
                    },
                    interactivity: {
                        detect_on: "canvas",
                        events: {
                            onhover: {
                                enable: !isMobileOrTablet,
                                mode: "repulse"
                            },
                            onclick: {
                                enable: !isMobileOrTablet,
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

        return () => {
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
