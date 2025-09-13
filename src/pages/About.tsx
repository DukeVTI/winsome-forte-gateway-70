import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Calendar, Award, Users, Globe, ArrowRight } from 'lucide-react';
import leaderPlaceholder from '@/assets/leader-placeholder.jpg';

const About = () => {
  const milestones = [
    {
      year: "2000",
      title: "Founded",
      description: "[MILESTONE_PLACEHOLDER: 'Established with a vision to provide exceptional education']"
    },
    {
      year: "[YEAR_PLACEHOLDER: 1995]", 
      title: "Accreditation",
      description: "[MILESTONE_PLACEHOLDER: 'Received national accreditation and recognition']"
    },
    {
      year: "[YEAR_PLACEHOLDER: 2005]",
      title: "Campus Expansion", 
      description: "[MILESTONE_PLACEHOLDER: 'Expanded facilities with state-of-the-art laboratories']"
    },
    {
      year: "[YEAR_PLACEHOLDER: 2015]",
      title: "Global Programs",
      description: "[MILESTONE_PLACEHOLDER: 'Launched international exchange and partnerships']"
    },
    {
      year: "[YEAR_PLACEHOLDER: 2023]",
      title: "Innovation Hub",
      description: "[MILESTONE_PLACEHOLDER: 'Opened cutting-edge STEM and innovation center']"
    }
  ];

  const leadership = [
    {
      name: "[HEAD_NAME_PLACEHOLDER: Dr. Sarah Mitchell]",
      title: "Head of School",
      bio: "[BIO_PLACEHOLDER: 'With over 20 years in educational leadership, Dr. Mitchell brings a passion for academic excellence and character development to WFS.']",
      image: leaderPlaceholder
    },
    {
      name: "[CHAIR_NAME_PLACEHOLDER: James Richardson]", 
      title: "Board Chairman",
      bio: "[BIO_PLACEHOLDER: 'A successful entrepreneur and education advocate, James has been instrumental in guiding WFS strategic vision.']",
      image: leaderPlaceholder
    },
    {
      name: "[PRINCIPAL_NAME_PLACEHOLDER: Dr. Maria Santos]",
      title: "Academic Principal", 
      bio: "[BIO_PLACEHOLDER: 'Dr. Santos oversees curriculum development and ensures our academic programs meet the highest standards.']",
      image: leaderPlaceholder
    },
    {
      name: "[CFO_NAME_PLACEHOLDER: Robert Chen]",
      title: "Chief Financial Officer",
      bio: "[BIO_PLACEHOLDER: 'Robert brings financial expertise and operational excellence to support the school mission.']", 
      image: leaderPlaceholder
    }
  ];

  const achievements = [
    {
      icon: Award,
      title: "Top 1% Nationally",
      description: "[ACHIEVEMENT_PLACEHOLDER: 'Consistently ranked among the top 1% of schools nationwide']"
    },
    {
      icon: Users,
      title: "98% University Acceptance",
      description: "[ACHIEVEMENT_PLACEHOLDER: 'Graduate acceptance rate to top-tier universities']"
    },
    {
      icon: Globe,
      title: "International Recognition", 
      description: "[ACHIEVEMENT_PLACEHOLDER: 'Partnerships with leading schools across 5 continents']"
    }
  ];

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-display font-semibold text-white mb-6">
              About Winsome-Forte School
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-2xl mx-auto">
              Discover our rich history, dedicated leadership, and commitment to 
              educational excellence that spans over two decades.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-display font-semibold text-primary">
                Our Story
              </h2>
              <div className="space-y-4 text-lg text-muted-foreground">
                <p>
                  [STORY_PLACEHOLDER: "Founded in 2000, Winsome-Forte School began as a small institution with a big vision: to create an educational environment where academic rigor meets character development."]
                </p>
                <p>
                  [STORY_PLACEHOLDER: "Over the decades, we have grown from a modest beginning to become one of the region's most respected educational institutions, while never losing sight of our core mission to nurture the whole child."]
                </p>
                <p>
                  [STORY_PLACEHOLDER: "Today, WFS serves over 100 students from diverse backgrounds, united by a shared commitment to excellence, integrity, and service to others."]
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <Card key={achievement.title} className="card-elevated">
                  <CardContent className="p-6 text-center space-y-4">
                    <div className="w-12 h-12 mx-auto rounded-full bg-accent flex items-center justify-center text-accent-foreground">
                      <achievement.icon className="h-6 w-6" />
                    </div>
                    <h3 className="font-display font-semibold text-primary">
                      {achievement.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {achievement.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-12">
            <h2 className="text-4xl font-display font-semibold text-primary">
              Mission & Vision
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="card-elevated">
                <CardContent className="p-8 text-center space-y-4">
                  <h3 className="text-2xl font-display font-semibold text-primary">
                    Our Mission
                  </h3>
                  <p className="text-muted-foreground">
                    [MISSION_PLACEHOLDER: "To provide exceptional education that challenges students academically, develops character, and prepares them to be thoughtful leaders and engaged citizens in a global community."]
                  </p>
                </CardContent>
              </Card>
              
              <Card className="card-elevated">
                <CardContent className="p-8 text-center space-y-4">
                  <h3 className="text-2xl font-display font-semibold text-primary">
                    Our Vision
                  </h3>
                  <p className="text-muted-foreground">
                    [VISION_PLACEHOLDER: "To be the premier educational institution that shapes confident, compassionate, and capable individuals who positively impact the world around them."]
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-semibold text-primary mb-4">
              Leadership & Governance
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Meet the dedicated leaders who guide Winsome-Forte School's mission and vision.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {leadership.map((leader, index) => (
              <Card key={leader.name} className="card-elevated group">
                <CardContent className="p-6 text-center space-y-4">
                  <div className="w-24 h-24 mx-auto rounded-full overflow-hidden border-4 border-primary/20 group-hover:border-primary/40 transition-all duration-300">
                    <img 
                      src={leader.image}
                      alt={`${leader.name}, ${leader.title}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-primary text-lg">
                      {leader.name}
                    </h3>
                    <p className="text-accent font-medium text-sm">
                      {leader.title}
                    </p>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    {leader.bio}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-semibold text-primary mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Key milestones in the history of Winsome-Forte School.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
              {milestones.map((milestone, index) => (
                <Card key={milestone.year} className="card-elevated text-center group hover:scale-105 transition-all duration-300">
                  <CardContent className="p-6 space-y-4">
                    <div className="w-12 h-12 mx-auto rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                      <Calendar className="h-6 w-6" />
                    </div>
                    <div>
                      <div className="text-2xl font-display font-bold text-accent">
                        {milestone.year}
                      </div>
                      <h3 className="font-display font-semibold text-primary mt-2">
                        {milestone.title}
                      </h3>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {milestone.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Academic Philosophy */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-4xl font-display font-semibold text-primary">
              Academic Philosophy
            </h2>
            <p className="text-xl text-muted-foreground">
              [PHILOSOPHY_PLACEHOLDER: "At Winsome-Forte School, we believe that true education goes beyond memorization and test scores. Our approach emphasizes critical thinking, creativity, collaboration, and character development."]
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <Card className="card-elevated">
                <CardContent className="p-6 text-center space-y-4">
                  <h3 className="font-display font-semibold text-primary">
                    Personalized Learning
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    [APPROACH_PLACEHOLDER: "Tailored instruction that meets each student where they are and challenges them to grow."]
                  </p>
                </CardContent>
              </Card>
              
              <Card className="card-elevated">
                <CardContent className="p-6 text-center space-y-4">
                  <h3 className="font-display font-semibold text-primary">
                    Global Perspective
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    [APPROACH_PLACEHOLDER: "Preparing students to be global citizens with understanding of diverse cultures and perspectives."]
                  </p>
                </CardContent>
              </Card>
              
              <Card className="card-elevated">
                <CardContent className="p-6 text-center space-y-4">
                  <h3 className="font-display font-semibold text-primary">
                    Innovation Focus
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    [APPROACH_PLACEHOLDER: "Integrating technology and innovative teaching methods to enhance learning outcomes."]
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-4xl font-display font-semibold">
              Join Our Community
            </h2>
            <p className="text-xl text-primary-foreground/90">
              Experience the difference that passionate educators and a supportive 
              community can make in your child's educational journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Link to="/admissions">
                <Button className="btn-gold text-lg px-8 py-4 group">
                  Start Your Application
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/facilities">
                <Button variant="outline" className="text-lg px-8 py-4 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                  Explore Our Campus
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;