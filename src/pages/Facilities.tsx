import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { 
  Play, 
  ArrowRight, 
  BookOpen, 
  Microscope, 
  Palette, 
  Trophy, 
  Users,
  Lightbulb,
  X,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import facilitiesLab from '@/assets/facilities-lab.jpg';
import facilitiesLibrary from '@/assets/facilities-library.jpg';

const Facilities = () => {
  const [selectedGallery, setSelectedGallery] = useState<string | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const facilityCategories = [
    {
      title: "Academic Spaces",
      description: "Modern classrooms and learning environments",
      icon: BookOpen,
      color: "text-primary"
    },
    {
      title: "Science Labs", 
      description: "State-of-the-art research facilities",
      icon: Microscope,
      color: "text-accent"
    },
    {
      title: "Arts & Culture",
      description: "Creative studios and performance venues", 
      icon: Palette,
      color: "text-gold"
    },
    {
      title: "Sports & Fitness",
      description: "Athletic facilities and wellness centers",
      icon: Trophy,
      color: "text-primary"
    },
    {
      title: "Library & Resources",
      description: "Comprehensive learning resource center",
      icon: Users,
      color: "text-accent"
    },
    {
      title: "Innovation Hub",
      description: "Technology and maker spaces",
      icon: Lightbulb,
      color: "text-gold"
    }
  ];

  const facilityDetails = [
    {
      id: "science-labs",
      title: "Science Laboratories", 
      description: "Our cutting-edge science laboratories provide students with hands-on learning experiences in chemistry, physics, biology, and environmental science.",
      features: [
        "Advanced digital microscopy equipment",
        "Fume hoods and safety systems", 
        "Interactive whiteboards and displays",
        "Collaborative workstations for group projects"
      ],
      images: [facilitiesLab, facilitiesLab, facilitiesLab],
      mainImage: facilitiesLab
    },
    {
      id: "library",
      title: "Learning Resource Center",
      description: "A modern library designed as a hub for research, collaboration, and independent study with extensive digital and physical collections.",
      features: [
        "Over 50,000 books and digital resources",
        "Quiet study zones and collaboration areas",
        "Research assistance and tutoring support", 
        "Maker space with 3D printers and tools"
      ],
      images: [facilitiesLibrary, facilitiesLibrary, facilitiesLibrary],
      mainImage: facilitiesLibrary
    },
    {
      id: "classrooms",
      title: "Smart Classrooms",
      description: "[FACILITY_PLACEHOLDER: Modern, technology-equipped classrooms that foster interactive and engaging learning experiences.]",
      features: [
        "[FEATURE_PLACEHOLDER: Interactive smartboards in every room]",
        "[FEATURE_PLACEHOLDER: Flexible seating arrangements]",
        "[FEATURE_PLACEHOLDER: High-speed internet connectivity]",
        "[FEATURE_PLACEHOLDER: Climate-controlled environment]"
      ],
      images: ["[CLASSROOM_IMG_1]", "[CLASSROOM_IMG_2]", "[CLASSROOM_IMG_3]"],
      mainImage: "[CLASSROOM_MAIN_IMG]"
    },
    {
      id: "arts-center",
      title: "Arts & Performance Center", 
      description: "[FACILITY_PLACEHOLDER: Inspiring spaces for visual arts, music, drama, and creative expression.]",
      features: [
        "[FEATURE_PLACEHOLDER: Professional-grade art studios]",
        "[FEATURE_PLACEHOLDER: 400-seat auditorium with full lighting]",
        "[FEATURE_PLACEHOLDER: Music practice rooms and recording studio]",
        "[FEATURE_PLACEHOLDER: Gallery space for student exhibitions]"
      ],
      images: ["[ARTS_IMG_1]", "[ARTS_IMG_2]", "[ARTS_IMG_3]"],
      mainImage: "[ARTS_MAIN_IMG]"
    }
  ];

  const openGallery = (facilityId: string, imageIndex: number = 0) => {
    setSelectedGallery(facilityId);
    setCurrentImageIndex(imageIndex);
  };

  const closeGallery = () => {
    setSelectedGallery(null);
    setCurrentImageIndex(0);
  };

  const navigateGallery = (direction: 'prev' | 'next') => {
    if (!selectedGallery) return;
    
    const facility = facilityDetails.find(f => f.id === selectedGallery);
    if (!facility) return;

    if (direction === 'next') {
      setCurrentImageIndex((prev) => (prev + 1) % facility.images.length);
    } else {
      setCurrentImageIndex((prev) => (prev - 1 + facility.images.length) % facility.images.length);
    }
  };

  const selectedFacility = facilityDetails.find(f => f.id === selectedGallery);

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-display font-semibold text-white mb-6">
              Campus & Facilities
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-2xl mx-auto">
              Explore our state-of-the-art facilities designed to inspire learning, 
              creativity, and personal growth.
            </p>
          </div>
        </div>
      </section>

      {/* Facility Categories Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-semibold text-primary mb-4">
              World-Class Learning Spaces
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Every space at WFS is thoughtfully designed to enhance the educational experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facilityCategories.map((category, index) => (
              <Card key={category.title} className="card-elevated group hover:scale-105 transition-all duration-300">
                <CardContent className="p-8 text-center space-y-4">
                  <div className={`w-16 h-16 mx-auto rounded-full bg-secondary flex items-center justify-center ${category.color} group-hover:scale-110 transition-transform duration-300`}>
                    <category.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-display font-semibold text-primary">
                    {category.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {category.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Video Tour Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-4xl font-display font-semibold text-primary">
              Virtual Campus Tour
            </h2>
            <p className="text-xl text-muted-foreground">
              Take a comprehensive look at our campus with our guided video tour.
            </p>

            {/* Video Placeholder */}
            <div className="relative aspect-video bg-primary rounded-2xl overflow-hidden shadow-elegant group cursor-pointer">
              <div className="absolute inset-0 bg-gradient-hero opacity-90" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors duration-300">
                    <Play className="h-10 w-10 text-white ml-1" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-display font-semibold text-white mb-2">
                      Campus Video Tour
                    </h3>
                    <p className="text-blue-100">
                      [FACILITY_TOUR_VIDEO.mp4]
                    </p>
                    <Badge variant="secondary" className="mt-2">
                      15 minutes
                    </Badge>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-muted-foreground">
              Experience our campus virtually, featuring guided tours of all major facilities, 
              student testimonials, and behind-the-scenes looks at daily life at WFS.
            </p>
          </div>
        </div>
      </section>

      {/* Detailed Facility Sections */}
      <section className="py-20">
        <div className="container mx-auto px-4 space-y-20">
          {facilityDetails.map((facility, index) => (
            <div key={facility.id} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12`}>
              {/* Content */}
              <div className="lg:w-1/2 space-y-6">
                <h3 className="text-3xl font-display font-semibold text-primary">
                  {facility.title}
                </h3>
                <p className="text-lg text-muted-foreground">
                  {facility.description}
                </p>

                <div className="space-y-3">
                  <h4 className="font-semibold text-primary">Key Features:</h4>
                  <ul className="space-y-2">
                    {facility.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-muted-foreground">
                        <ArrowRight className="h-4 w-4 text-accent mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <Button 
                  onClick={() => openGallery(facility.id)}
                  className="btn-primary group"
                >
                  View Gallery
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>

              {/* Image */}
              <div className="lg:w-1/2">
                <Card className="card-elevated overflow-hidden group cursor-pointer"
                      onClick={() => openGallery(facility.id)}>
                  <div className="aspect-video">
                    {facility.mainImage.startsWith('[') ? (
                      <div className="w-full h-full bg-secondary flex items-center justify-center">
                        <span className="text-muted-foreground">
                          {facility.mainImage}
                        </span>
                      </div>
                    ) : (
                      <img 
                        src={facility.mainImage}
                        alt={facility.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    )}
                  </div>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Gallery Lightbox */}
      {selectedGallery && selectedFacility && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center">
          <div className="relative max-w-4xl max-h-full p-4">
            {/* Close Button */}
            <Button
              onClick={closeGallery}
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4 z-10 text-white hover:bg-white/20"
            >
              <X className="h-6 w-6" />
            </Button>

            {/* Navigation Buttons */}
            <Button
              onClick={() => navigateGallery('prev')}
              variant="ghost"
              size="icon"
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 text-white hover:bg-white/20"
            >
              <ChevronLeft className="h-8 w-8" />
            </Button>

            <Button
              onClick={() => navigateGallery('next')}
              variant="ghost"
              size="icon"
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 text-white hover:bg-white/20"
            >
              <ChevronRight className="h-8 w-8" />
            </Button>

            {/* Image */}
            <div className="aspect-video bg-secondary rounded-lg overflow-hidden">
              {selectedFacility.images[currentImageIndex].startsWith('[') ? (
                <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                  {selectedFacility.images[currentImageIndex]}
                </div>
              ) : (
                <img 
                  src={selectedFacility.images[currentImageIndex]}
                  alt={`${selectedFacility.title} - Image ${currentImageIndex + 1}`}
                  className="w-full h-full object-cover"
                />
              )}
            </div>

            {/* Image Counter */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-4 py-2 rounded-full text-sm">
              {currentImageIndex + 1} / {selectedFacility.images.length}
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-4xl font-display font-semibold">
              Experience Our Campus
            </h2>
            <p className="text-xl text-primary-foreground/90">
              The best way to appreciate our facilities is to visit in person. 
              Schedule a campus tour and see how our spaces inspire learning.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Link to="/admissions">
                <Button className="btn-gold text-lg px-8 py-4 group">
                  Schedule a Visit
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/about">
                <Button variant="outline" className="text-lg px-8 py-4 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                  Learn About Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Facilities;