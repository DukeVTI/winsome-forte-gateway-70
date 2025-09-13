import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import wfsLogo from '@/assets/wfs-logo.jpg';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Facilities', href: '/facilities' },
    { name: 'Admissions', href: '/admissions' },
  ];

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: '#', label: 'Follow us on Facebook' },
    { name: 'Twitter', icon: Twitter, href: '#', label: 'Follow us on Twitter' },
    { name: 'Instagram', icon: Instagram, href: '#', label: 'Follow us on Instagram' },
    { name: 'LinkedIn', icon: Linkedin, href: '#', label: 'Connect with us on LinkedIn' },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* School Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-primary-foreground/20">
                <img 
                  src={wfsLogo} 
                  alt="WFS Logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-xl font-display font-semibold">
                  Winsome-Forte School
                </h3>
                <p className="text-primary-foreground/80 text-sm">
                  Excellence in Education
                </p>
              </div>
            </div>
            <p className="text-primary-foreground/90 text-sm leading-relaxed">
              [SCHOOL_DESCRIPTION_PLACEHOLDER: "Shaping tomorrow's leaders through academic excellence, character development, and innovative learning experiences."]
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-display font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-display font-semibold">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-primary-foreground/60" />
                <span className="text-primary-foreground/80 text-sm">
                  123 Education Lane, Learning City, LC 12345
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-primary-foreground/60" />
                <span className="text-primary-foreground/80 text-sm">
                  +1 (555) 123-4567
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-primary-foreground/60" />
                <span className="text-primary-foreground/80 text-sm">
                  admissions@winsomeforteschool.com
                </span>
              </div>
            </div>
          </div>

          {/* Social & Map */}
          <div className="space-y-4">
            <h4 className="text-lg font-display font-semibold">Follow Us</h4>
            <div className="flex space-x-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-primary-foreground/10 hover:bg-primary-foreground/20 rounded-lg flex items-center justify-center transition-colors duration-200"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
            
            {/* Map Placeholder */}
            <div className="mt-6">
              <div className="w-full h-24 bg-primary-foreground/10 rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground/60 text-sm">
                  Ogun State, Nigeria.
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/20">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <div className="text-primary-foreground/80 text-sm">
              © 2024 Winsome-Forte School. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-200">
                Terms of Service
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-200">
                Accessibility
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;