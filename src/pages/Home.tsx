import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  GraduationCap, 
  BookOpen, 
  Users, 
  Award,
  Calendar,
  ArrowRight,
  MapPin,
  Phone,
  Mail,
  Clock
} from 'lucide-react';
import heroImage from '@/assets/hero-image.jpg';

const Home = () => {
  const academicPrograms = [
    {
      title: "Elementary School",
      description: "Grades K-5: Building strong foundations in literacy, numeracy, and character development.",
      icon: BookOpen,
      ages: "Ages 5-11"
    },
    {
      title: "Middle School", 
      description: "Grades 6-8: Preparing students for high school with advanced academics and leadership opportunities.",
      icon: Users,
      ages: "Ages 11-14"
    },
    {
      title: "High School",
      description: "Grades 9-12: College preparatory curriculum with AP courses and university guidance.",
      icon: GraduationCap,
      ages: "Ages 14-18"
    }
  ];

  const quickFacts = [
    {
      title: "Founded",
      value: "2000",
      description: "Over 20 years of educational excellence"
    },
    {
      title: "Students",
      value: "100+",
      description: "Diverse learning community"
    },
    {
      title: "Class Size",
      value: "16:1",
      description: "Average student-teacher ratio"
    }
  ];

  const upcomingEvents = [
    {
      date: "Sept 15",
      title: "Open House",
      time: "9:00 AM - 12:00 PM"
    },
    {
      date: "Sept 22", 
      title: "Parent Information Session",
      time: "7:00 PM - 8:30 PM"
    },
    {
      date: "Oct 1",
      title: "Fall Festival",
      time: "3:00 PM - 6:00 PM"
    }
  ];

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative py-20 bg-primary text-primary-foreground">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImage}
            alt="Students learning at Winsome-Forte School"
            className="w-full h-full object-cover opacity-20"
          />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-display font-bold leading-tight">
              Welcome to
              <span className="block text-accent">
                Winsome-Forte School
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-primary-foreground/90 font-medium max-w-3xl mx-auto">
              A premier independent school dedicated to academic excellence, character development, 
              and preparing students for success in college and beyond.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
              <Link to="/admissions">
                <Button className="btn-accent text-lg px-8 py-4 group">
                  Apply for Admission
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              
              <Link to="/facilities">
                <Button variant="outline" className="text-lg px-8 py-4 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 rounded-xl">
                  Schedule a Tour
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Facts */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {quickFacts.map((fact, index) => (
              <div key={fact.title} className="text-center space-y-2">
                <div className="text-3xl md:text-4xl font-bold text-primary">
                  {fact.value}
                </div>
                <div className="font-semibold text-primary">
                  {fact.title}
                </div>
                <div className="text-sm text-muted-foreground">
                  {fact.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Academic Programs */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-4">
              Academic Programs
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive education programs designed to meet the developmental needs of each age group.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {academicPrograms.map((program, index) => (
              <Card key={program.title} className="card-modern group">
                <CardContent className="p-8 text-center space-y-6">
                  <div className="w-16 h-16 mx-auto rounded-full bg-secondary flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    <program.icon className="h-8 w-8" />
                  </div>
                  <div>
                    <h3 className="text-xl font-display font-bold text-primary mb-2">
                      {program.title}
                    </h3>
                    <div className="text-accent font-semibold mb-4">
                      {program.ages}
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {program.description}
                    </p>
                  </div>
                  <div className="flex items-center justify-center text-accent group-hover:text-primary transition-colors">
                    <span className="text-sm font-semibold">Learn More</span>
                    <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* News & Events */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Latest News */}
            <div>
              <h2 className="text-3xl font-display font-bold text-primary mb-8">
                Latest News
              </h2>
              <div className="space-y-6">
                <Card className="card-modern">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                        <Award className="h-6 w-6 text-primary-foreground" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-primary mb-2">
                          Students Excel in State Science Competition
                        </h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          Our high school team placed first in the state science olympiad, 
                          demonstrating excellence in STEM education.
                        </p>
                        <div className="text-xs text-accent font-medium mt-3">
                          September 8, 2024
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="card-modern">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 rounded-full bg-school flex items-center justify-center flex-shrink-0">
                        <BookOpen className="h-6 w-6 text-school-foreground" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-primary mb-2">
                          New Library and Learning Commons Opens
                        </h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          Our new state-of-the-art library features collaborative learning spaces 
                          and advanced technology resources.
                        </p>
                        <div className="text-xs text-accent font-medium mt-3">
                          September 1, 2024
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Upcoming Events */}
            <div>
              <h2 className="text-3xl font-display font-bold text-primary mb-8">
                Upcoming Events
              </h2>
              <div className="space-y-4">
                {upcomingEvents.map((event, index) => (
                  <Card key={index} className="card-modern">
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4">
                        <div className="text-center flex-shrink-0">
                          <div className="w-12 h-12 rounded-xl bg-accent text-accent-foreground flex items-center justify-center">
                            <Calendar className="h-6 w-6" />
                          </div>
                          <div className="text-xs font-semibold text-accent mt-2">
                            {event.date}
                          </div>
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-primary mb-1">
                            {event.title}
                          </h3>
                          <div className="flex items-center text-sm text-muted-foreground">
                            <Clock className="h-4 w-4 mr-1" />
                            {event.time}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="mt-8">
                <Link to="/events">
                  <Button variant="outline" className="w-full">
                    View All Events
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-4">
              Visit Our Campus
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We welcome prospective families to visit our campus and experience 
              the Winsome-Forte School community firsthand.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="card-modern text-center">
              <CardContent className="p-8 space-y-4">
                <div className="w-12 h-12 mx-auto rounded-full bg-primary text-primary-foreground flex items-center justify-center">
                  <MapPin className="h-6 w-6" />
                </div>
                <h3 className="font-semibold text-primary">Address</h3>
                <div className="text-muted-foreground">
                  <p>123 Education Drive</p>
                  <p>Learning City, LC 12345</p>
                </div>
              </CardContent>
            </Card>

            <Card className="card-modern text-center">
              <CardContent className="p-8 space-y-4">
                <div className="w-12 h-12 mx-auto rounded-full bg-school text-school-foreground flex items-center justify-center">
                  <Phone className="h-6 w-6" />
                </div>
                <h3 className="font-semibold text-primary">Phone</h3>
                <div className="text-muted-foreground">
                  <p>(555) 123-4567</p>
                  <p className="text-sm">Monday - Friday, 8 AM - 4 PM</p>
                </div>
              </CardContent>
            </Card>

            <Card className="card-modern text-center">
              <CardContent className="p-8 space-y-4">
                <div className="w-12 h-12 mx-auto rounded-full bg-accent text-accent-foreground flex items-center justify-center">
                  <Mail className="h-6 w-6" />
                </div>
                <h3 className="font-semibold text-primary">Email</h3>
                <div className="text-muted-foreground">
                  <p>info@winsomeforteschool.edu</p>
                  <p className="text-sm">We'll respond within 24 hours</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Link to="/admissions">
              <Button className="btn-primary text-lg px-8 py-4">
                Schedule Your Visit
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;