import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Users, Award, Clock, Target } from "lucide-react"

export default function AboutPage() {
  const team = [
    {
      name: "Calvince Owino",
      role: "CEO",
      image: "/placeholder.svg?height=300&width=300",
      bio: "10+ years in software development and business strategy",
    },
    {
      name: "Cephas Eddy",
      role: "Co-CEO",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Expert in full-stack development and system architecture",
    },
    {
      name: "Roy",
      role: "Design Lead",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Specializes in user experience and interface design",
    },
    {
      name: "Frankline Zavai",
      role: "Project Manager",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Ensures projects are delivered on time and within budget",
    },
    {
      name: "Josphat Maroa",
      role: "CFO",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Ensures projects are delivered on time and within budget",
    },
    {
      name: "Felix Rading'",
      role: "Backend Lead",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Expert in backend development and system architecture",
    },
    {
      name: "Aisha Ahmed",
      role: "Design Lead",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Expert in design and user experience",
    },
    {
      name: "Raymond Komen",
      role: "Frontend Lead",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Expert in frontend development and user experience design",
    },
    {
      name: "Chris ",
      role: "Treasurer",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Expert in finance and accounting",
    },
    {
      name: "Bravin",
      role: "Frontend Team",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Expert in frontend development and user experience design",
    },
    {
      name: "Boniface Karani",
      role: "Frontend Team",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Expert in frontend development and user experience design",
    },
    {
      name: "Debbie Brooke",
      role: "Content creator",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Expert in content creation and social media marketing",
    },
    {
      name: "Sophia",
      role: "Content creator",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Expert in content creation and social media marketing",
    },
    {
      name: "Fidel",
      role: "UX design team",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Expert in UX design and user experience",
    },
    {
      name: "Joe Munene",
      role: "Backend Team",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Expert in backend development and system architecture",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">J</span>
              </div>
              <span className="text-xl font-bold text-gray-900">JALSOFT</span>
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors">
                Home
              </Link>
              <Link href="/services" className="text-gray-700 hover:text-blue-600 transition-colors">
                Services
              </Link>
              <Link href="/portfolio" className="text-gray-700 hover:text-blue-600 transition-colors">
                Portfolio
              </Link>
              <Link href="/about" className="text-blue-600 font-medium">
                About
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-blue-600 transition-colors">
                Contact
              </Link>
            </div>
            <Button asChild className="hidden md:inline-flex">
              <Link href="/contact">Get Started</Link>
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge variant="secondary" className="w-fit">
                About JALSOFT
              </Badge>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900">
                Building the Future of
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  {" "}
                  Digital Innovation
                </span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Founded in 2025, JALSOFT has been at the forefront of digital transformation, helping businesses
                leverage technology to achieve their goals and drive growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild>
                  <Link href="/contact">
                    Work With Us <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/portfolio">View Our Work</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="JALSOFT Team"
                width={600}
                height={400}
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-4xl font-bold text-blue-600">50+</div>
              <div className="text-gray-600">Projects Completed</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-purple-600">98%</div>
              <div className="text-gray-600">Client Satisfaction</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-green-600">1</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-orange-600">24/7</div>
              <div className="text-gray-600">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Mission & Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're driven by a passion for innovation and a commitment to delivering exceptional results
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center border-0 shadow-lg">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle>Innovation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">We stay ahead of technology trends to deliver cutting-edge solutions</p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg">
              <CardHeader>
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-purple-600" />
                </div>
                <CardTitle>Collaboration</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">We work closely with our clients as partners in their success</p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg">
              <CardHeader>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle>Excellence</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">We maintain the highest standards in everything we do</p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg">
              <CardHeader>
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-orange-600" />
                </div>
                <CardTitle>Reliability</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">We deliver on our promises, on time and within budget</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our diverse team of experts brings together years of experience in software development, design, and
              project management
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center border-0 shadow-lg overflow-hidden">
                <div className="relative">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    width={300}
                    height={300}
                    className="w-full h-64 object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{member.name}</CardTitle>
                  <CardDescription className="text-blue-600 font-medium">{member.role}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-white">Ready to Work Together?</h2>
            <p className="text-xl text-blue-100">
              Let's discuss your project and see how we can help bring your vision to life.
            </p>
            <Button size="lg" variant="secondary" asChild className="text-lg px-8 py-6">
              <Link href="/contact">
                Start Your Project <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
