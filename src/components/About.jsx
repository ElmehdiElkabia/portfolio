import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GraduationCap, Briefcase, Star, Trophy } from 'lucide-react';

const About = () => {
    return (
        <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/50 relative overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-10 right-10 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl animate-pulse delay-300"></div>
                <div className="absolute bottom-10 left-10 w-48 h-48 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-700"></div>
            </div>

            <div className="container mx-auto relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 animate-fade-in">
                        About Me
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-3xl mx-auto animate-fade-in delay-300 leading-relaxed">
                        Software Engineer and Full-Stack Developer with a strong foundation in systems programming,
                        networking, and modern web development. I enjoy building reliable, scalable applications and
                        solving complex technical problems from low-level systems to full-stack products.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    <Card className="hover:shadow-2xl transition-all duration-500 hover:scale-105 animate-fade-in delay-500 group hover:shadow-blue-500/20">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2 group-hover:animate-pulse">
                                <GraduationCap className="h-6 w-6 text-blue-500" />
                                Education
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-5">
                            <div className="transform hover:translate-x-2 transition-transform duration-300">
                                <h3 className="font-semibold text-foreground flex items-center gap-2">
                                    <Star className="h-4 w-4 text-yellow-500 animate-spin" />
                                    Full-Stack Web Development Diploma
                                </h3>
                                <p className="text-muted-foreground">OFPPT • 2022 – 2024</p>
                                <p className="text-sm text-muted-foreground mt-2">
                                    Web development training covering React, Laravel, JavaScript, PHP, databases,
                                    REST APIs, and full-stack application development.
                                </p>
                            </div>

                            <div className="transform hover:translate-x-2 transition-transform duration-300">
                                <h3 className="font-semibold text-foreground flex items-center gap-2">
                                    <Trophy className="h-4 w-4 text-orange-500 animate-pulse" />
                                    Software Engineering & Systems Programming
                                </h3>
                                <p className="text-muted-foreground">1337 Coding School • 2024 – Present</p>
                                <div className="flex flex-wrap gap-2 mt-2">
                                    <Badge variant="secondary">C</Badge>
                                    <Badge variant="secondary">C++</Badge>
                                    <Badge variant="secondary">Linux</Badge>
                                    <Badge variant="secondary">Networking</Badge>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="hover:shadow-2xl transition-all duration-500 hover:scale-105 animate-fade-in delay-700 group hover:shadow-purple-500/20">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2 group-hover:animate-pulse">
                                <Briefcase className="h-6 w-6 text-purple-500" />
                                Experience
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-5">
                            <div className="transform hover:translate-x-2 transition-transform duration-300">
                                <h3 className="font-semibold text-foreground flex items-center gap-2">
                                    <Star className="h-4 w-4 text-green-500 animate-spin" />
                                    Web Development Intern
                                </h3>
                                <p className="text-muted-foreground">OCP Benguerir • March 2024</p>
                                <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                                    Worked on real-world web development projects in a professional environment,
                                    applying frontend and backend development skills while gaining experience with
                                    enterprise workflows and software engineering practices.
                                </p>
                            </div>

                            <div className="transform hover:translate-x-2 transition-transform duration-300">
                                <h3 className="font-semibold text-foreground flex items-center gap-2">
                                    <Trophy className="h-4 w-4 text-blue-500 animate-pulse" />
                                    Personal & Academic Projects
                                </h3>
                                <p className="text-muted-foreground">Full-Stack, Systems & Networking</p>
                                <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                                    Built projects including full-stack platforms, HTTP and IRC servers, Unix systems,
                                    Docker infrastructure, networking applications, and multiplayer web experiences.
                                </p>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    );
};

export default About;
