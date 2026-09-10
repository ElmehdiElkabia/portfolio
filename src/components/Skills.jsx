import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Palette, Server, Database, Code, Wrench, Cloud, Sparkles } from 'lucide-react';

const Skills = () => {
    const skillCategories = [
        {
            title: "Frontend",
            icon: <Palette className="h-6 w-6 text-pink-500" />,
            skills: ["React", "Next.js", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Vite", "shadcn/ui"],
            color: "hover:shadow-pink-500/20"
        },
        {
            title: "Backend",
            icon: <Server className="h-6 w-6 text-blue-500" />,
            skills: ["Laravel", "PHP", "Node.js", "Express.js", "REST APIs", "Sanctum", "WebSockets"],
            color: "hover:shadow-blue-500/20"
        },
        {
            title: "Databases & Caching",
            icon: <Database className="h-6 w-6 text-green-500" />,
            skills: ["MySQL", "MongoDB", "Redis", "Database Design", "Eloquent ORM"],
            color: "hover:shadow-green-500/20"
        },
        {
            title: "Systems & Networking",
            icon: <Code className="h-6 w-6 text-orange-500" />,
            skills: ["C", "C++98", "Linux", "Unix", "Sockets", "TCP/IP", "HTTP", "Processes", "Threads", "Algorithms", "Data Structures"],
            color: "hover:shadow-orange-500/20"
        },
        {
            title: "DevOps & Infrastructure",
            icon: <Cloud className="h-6 w-6 text-purple-500" />,
            skills: ["Docker", "Docker Compose", "Nginx", "Git", "GitHub", "TLS/HTTPS", "CI/CD"],
            color: "hover:shadow-purple-500/20"
        },
        {
            title: "Engineering",
            icon: <Wrench className="h-6 w-6 text-cyan-500" />,
            skills: ["Object-Oriented Programming", "System Design", "API Design", "Problem Solving", "Debugging", "Memory Management", "Concurrency"],
            color: "hover:shadow-cyan-500/20"
        }
    ];

    return (
        <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
            {/* Animated background */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/4 right-1/3 w-64 h-64 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
                <div className="absolute bottom-1/3 left-1/4 w-48 h-48 bg-gradient-to-r from-green-500/10 to-yellow-500/10 rounded-full blur-2xl animate-pulse delay-2000"></div>
            </div>

            <div className="container mx-auto relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 animate-fade-in flex items-center justify-center gap-3">
                        <Sparkles className="h-8 w-8 text-yellow-500" />
                        Skills & Technologies
                        <Sparkles className="h-8 w-8 text-yellow-500 delay-500" />
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-3xl mx-auto animate-fade-in delay-300">
                        A practical toolkit built through full-stack development, systems programming, networking,
                        DevOps, and software engineering projects.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {skillCategories.map((category, index) => (
                        <Card
                            key={category.title}
                            className={`hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:scale-105 animate-fade-in group ${category.color}`}
                            style={{ animationDelay: `${index * 200}ms` }}
                        >
                            <CardHeader className="text-center">
                                <CardTitle className="flex items-center justify-center gap-2 text-lg group-hover:animate-pulse">
                                    <span style={{ animationDelay: `${index * 100}ms` }}>
                                        {category.icon}
                                    </span>
                                    {category.title}
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="flex flex-wrap gap-2">
                                    {category.skills.map((skill, skillIndex) => (
                                        <Badge
                                            key={skill}
                                            variant="secondary"
                                            className="hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-default hover:scale-110"
                                            style={{ animationDelay: `${skillIndex * 100}ms` }}
                                        >
                                            {skill}
                                        </Badge>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <Card className="max-w-2xl mx-auto hover:shadow-2xl transition-all duration-500 hover:scale-105 animate-fade-in delay-1000 hover:shadow-blue-500/20">
                        <CardContent className="pt-6">
                            <h3 className="text-xl font-semibold mb-4 flex items-center justify-center gap-2">
                                <Sparkles className="h-5 w-5 text-blue-500" />
                                Currently Learning
                            </h3>
                            <p className="text-muted-foreground mb-4">
                                Deepening my knowledge of C++, networking, system architecture, and advanced software engineering at 1337 Coding School.
                            </p>
                            <div className="flex flex-wrap justify-center gap-2">
                                <Badge variant="outline" className="hover:scale-110 transition-transform duration-200">C++</Badge>
                                <Badge variant="outline" className="hover:scale-110 transition-transform duration-200">Networking</Badge>
                                <Badge variant="outline" className="hover:scale-110 transition-transform duration-200">System Design</Badge>
                                <Badge variant="outline" className="hover:scale-110 transition-transform duration-200">Software Engineering</Badge>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    );
};

export default Skills;
