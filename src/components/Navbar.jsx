import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Moon, Sun, Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isDark, setIsDark] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        if (isDark) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [isDark]);

    const toggleTheme = () => {
        setIsDark(!isDark);
    };

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setIsMenuOpen(false);
    };

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex-shrink-0">
                        <h1 className="text-xl font-bold text-foreground">Portfolio</h1>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            <button
                                onClick={() => scrollToSection('hero')}
                                className="text-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors"
                            >
                                Home
                            </button>
                            <button
                                onClick={() => scrollToSection('about')}
                                className="text-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors"
                            >
                                About
                            </button>
                            <button
                                onClick={() => scrollToSection('skills')}
                                className="text-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors"
                            >
                                Skills
                            </button>
                            <button
                                onClick={() => scrollToSection('projects')}
                                className="text-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors"
                            >
                                Projects
                            </button>
                            <button
                                onClick={() => scrollToSection('contact')}
                                className="text-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors"
                            >
                                Contact
                            </button>
                        </div>
                    </div>

                    <div className="flex items-center space-x-2">
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={toggleTheme}
                            className="w-9 h-9"
                        >
                            {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
                        </Button>

                        {/* Mobile menu button */}
                        <div className="md:hidden">
                            <Button
                                variant="ghost"
                                size="icon"
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className="w-9 h-9"
                            >
                                {isMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation */}
            {isMenuOpen && (
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background border-t">
                        <button
                            onClick={() => scrollToSection('hero')}
                            className="text-foreground hover:text-primary block px-3 py-2 rounded-md text-base font-medium w-full text-left transition-colors"
                        >
                            Home
                        </button>
                        <button
                            onClick={() => scrollToSection('about')}
                            className="text-foreground hover:text-primary block px-3 py-2 rounded-md text-base font-medium w-full text-left transition-colors"
                        >
                            About
                        </button>
                        <button
                            onClick={() => scrollToSection('skills')}
                            className="text-foreground hover:text-primary block px-3 py-2 rounded-md text-base font-medium w-full text-left transition-colors"
                        >
                            Skills
                        </button>
                        <button
                            onClick={() => scrollToSection('projects')}
                            className="text-foreground hover:text-primary block px-3 py-2 rounded-md text-base font-medium w-full text-left transition-colors"
                        >
                            Projects
                        </button>
                        <button
                            onClick={() => scrollToSection('contact')}
                            className="text-foreground hover:text-primary block px-3 py-2 rounded-md text-base font-medium w-full text-left transition-colors"
                        >
                            Contact
                        </button>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
