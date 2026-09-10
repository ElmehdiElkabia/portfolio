import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink } from 'lucide-react';

const Projects = () => {
    const projects = [
        {
            title: "Trivia Trap",
            description:
                "A multiplayer trivia game focused on bluffing, voting, and real-time interaction. Designed with a modern gaming interface and built as a full-stack web experience.",
            image: "🎯",
            technologies: ["Next.js", "TypeScript", "Tailwind CSS", "WebSockets"],
            category: "Full-Stack Web App",
            github: "https://github.com/ElmehdiElkabia/trivia_trap",
            demo: null
        },
        {
            title: "EventFlow Pro",
            description:
                "A full-stack event management platform with role-based access, event moderation, ticketing, QR workflows, authentication, transactions, and real-time notifications.",
            image: "🎫",
            technologies: ["React", "Vite", "Laravel", "MySQL", "Redis", "Docker", "Nginx"],
            category: "Full-Stack Web App",
            github: "https://github.com/ElmehdiElkabia/EventFlow",
            demo: null
        },
        {
            title: "Webserv",
            description:
                "A custom HTTP server developed in C++98 to explore networking, sockets, HTTP request/response handling, configuration parsing, client connections, and server architecture.",
            image: "🌐",
            technologies: ["C++98", "Sockets", "HTTP", "Networking", "Linux"],
            category: "Systems / Networking",
            github: "https://github.com/ElmehdiElkabia/webserv",
            demo: null
        },
        {
            title: "ft_irc",
            description:
                "An IRC server project focused on socket programming, client-server communication, channels, authentication, messaging, and operator commands.",
            image: "💬",
            technologies: ["C++98", "Sockets", "TCP/IP", "IRC", "Linux"],
            category: "Systems / Networking",
            github: "https://github.com/ElmehdiElkabia/ft_irc",
            demo: null
        },
        {
            title: "Inception",
            description:
                "A Docker-based infrastructure project combining Nginx, WordPress with PHP-FPM, and MariaDB, with HTTPS/TLS, persistent volumes, and isolated services.",
            image: "🐳",
            technologies: ["Docker", "Docker Compose", "Nginx", "WordPress", "MariaDB", "TLS"],
            category: "DevOps / Infrastructure",
            github: "https://github.com/ElmehdiElkabia/Inception",
            demo: null
        },
        {
            title: "Minishell",
            description:
                "A Unix-like shell implemented in C, covering process creation, pipes, redirections, environment variables, signals, command execution, and memory management.",
            image: "⌨️",
            technologies: ["C", "Unix", "Processes", "Pipes", "Signals", "Bash"],
            category: "Systems Programming",
            github: "https://github.com/ElmehdiElkabia/minishell",
            demo: null
        },
        {
            title: "Cub3D",
            description:
                "A raycasting-based 3D game project inspired by classic first-person engines, with map parsing, DDA raycasting, textures, movement, and rendering.",
            image: "🎮",
            technologies: ["C", "Raycasting", "DDA", "MiniLibX", "Graphics"],
            category: "Graphics / Game Development",
            github: "https://github.com/ElmehdiElkabia/cub3d",
            demo: null
        },
        {
            title: "Philosophers",
            description:
                "A concurrency project implementing the dining philosophers problem to study threads, mutexes, synchronization, timing, and race-condition prevention.",
            image: "🧵",
            technologies: ["C", "Threads", "Mutexes", "Concurrency", "Linux"],
            category: "Systems Programming",
            github: "https://github.com/ElmehdiElkabia/philosophers",
            demo: null
        },
        {
            title: "Push_swap",
            description:
                "A sorting algorithm project focused on constrained stack operations, algorithm design, optimization, and efficient data manipulation in C.",
            image: "🔢",
            technologies: ["C", "Algorithms", "Stacks", "Sorting", "Optimization"],
            category: "Algorithms",
            github: "https://github.com/ElmehdiElkabia/push-swap-1337",
            demo: null
        },
        {
            title: "Pipex",
            description:
                "A Unix process and piping project reproducing shell pipeline behavior using processes, pipes, file descriptors, and command execution.",
            image: "🔀",
            technologies: ["C", "Processes", "Pipes", "File Descriptors", "Unix"],
            category: "Systems Programming",
            github: "https://github.com/ElmehdiElkabia/pipex",
            demo: null
        },
        {
            title: "Libft",
            description:
                "A personal C library implementing standard utility functions and reusable data-structure helpers as a foundation for later systems projects.",
            image: "📚",
            technologies: ["C", "Pointers", "Memory Management", "Data Structures"],
            category: "C Library",
            github: "https://github.com/ElmehdiElkabia/Libft-1337",
            demo: null
        },
        {
            title: "get_next_line",
            description:
                "A C project implementing line-by-line file reading while handling buffers, file descriptors, and dynamic memory allocation efficiently.",
            image: "📄",
            technologies: ["C", "File I/O", "Buffers", "Memory Management"],
            category: "C Programming",
            github: "https://github.com/ElmehdiElkabia/get_next_line-1337",
            demo: null
        }
    ];

    return (
        <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/50">
            <div className="container mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                        Featured Projects
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                        A selection of my work across software engineering, systems programming,
                        networking, DevOps, and full-stack development.
                    </p>
                </div>

                <div className="grid xl:grid-cols-3 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
                    {projects.map((project, index) => (
                        <Card
                            key={project.title}
                            className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            <CardHeader>
                                <div className="text-4xl mb-4 text-center group-hover:scale-110 transition-transform">
                                    {project.image}
                                </div>

                                <div className="text-center">
                                    <Badge variant="outline" className="mb-2">
                                        {project.category}
                                    </Badge>
                                </div>

                                <CardTitle className="text-xl text-center">
                                    {project.title}
                                </CardTitle>

                                <CardDescription className="text-center leading-relaxed">
                                    {project.description}
                                </CardDescription>
                            </CardHeader>

                            <CardContent>
                                <div className="space-y-4">
                                    <div>
                                        <h4 className="font-semibold mb-2 text-sm text-muted-foreground">
                                            Technologies Used:
                                        </h4>

                                        <div className="flex flex-wrap gap-1.5">
                                            {project.technologies.map((tech) => (
                                                <Badge
                                                    key={tech}
                                                    variant="secondary"
                                                    className="text-xs"
                                                >
                                                    {tech}
                                                </Badge>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="flex gap-2 pt-2">
                                        <Button
                                            asChild
                                            size="sm"
                                            variant="outline"
                                            className="flex-1"
                                        >
                                            <a
                                                href={project.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                aria-label={`View ${project.title} source code on GitHub`}
                                            >
                                                <Github className="h-4 w-4 mr-2" />
                                                Code
                                            </a>
                                        </Button>

                                        {project.demo ? (
                                            <Button asChild size="sm" className="flex-1">
                                                <a
                                                    href={project.demo}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    aria-label={`Open ${project.title} live demo`}
                                                >
                                                    <ExternalLink className="h-4 w-4 mr-2" />
                                                    Live Demo
                                                </a>
                                            </Button>
                                        ) : (
                                            <Button
                                                size="sm"
                                                className="flex-1"
                                                variant="secondary"
                                                disabled
                                            >
                                                <ExternalLink className="h-4 w-4 mr-2" />
                                                No Demo
                                            </Button>
                                        )}
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <p className="text-muted-foreground mb-4">
                        Want to see more of my work?
                    </p>

                    <Button asChild variant="outline" size="lg">
                        <a
                            href="https://github.com/ElmehdiElkabia"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Github className="h-4 w-4 mr-2" />
                            View All Projects on GitHub
                        </a>
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default Projects;
