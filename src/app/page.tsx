"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import HeroSplitKpi from '@/components/sections/hero/HeroSplitKpi';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import MediaGridAbout from '@/components/sections/about/MediaGridAbout';
import FeatureCardFifteen from '@/components/sections/feature/FeatureCardFifteen';
import TestimonialCardTwelve from '@/components/sections/testimonial/TestimonialCardTwelve';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import ContactFaq from '@/components/sections/contact/ContactFaq';
import FooterSocial from '@/components/sections/footer/FooterSocial';
import { Facebook, Instagram, Twitter, Youtube, Mail } from 'lucide-react';

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-magnetic"
      defaultTextAnimation="reveal-blur"
      borderRadius="sharp"
      contentWidth="small"
      sizing="largeSizeExtraLargeSpacing"
      background="noiseDiagonalGradient"
      cardStyle="noise-gradient"
      primaryButtonStyle="flat"
      secondaryButtonStyle="outline"
      headingFontWeight="normal"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleCentered
          navItems={[
            { name: "Home", id: "hero" },
            { name: "Shop", id: "products" },
            { name: "About", id: "about" },
            { name: "FAQ", id: "faq" },
            { name: "Contact", id: "contact" }
          ]}
          button={{ text: "Shop Now", href: "products" }}
          brandName="Child"
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroSplitKpi
          title="Premium Toys for Every Child"
          description="Discover our carefully curated collection of safe, educational, and fun toys that bring joy to children and peace of mind to parents."
          kpis={[
            { value: "50k+", label: "Happy Families" },
            { value: "4.9★", label: "Customer Rating" },
            { value: "48hrs", label: "Fast Delivery" }
          ]}
          tag="Trusted by Parents"
          buttons={[
            { text: "Shop Collection", href: "products" },
            { text: "Learn More", href: "about" }
          ]}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1766063997037-kqvszyxc.jpg"
          imageAlt="Colorful toy collection display"
          imagePosition="right"
        />
      </div>

      <div id="products" data-section="products">
        <ProductCardTwo
          title="Popular Toys"
          description="Best-selling toys loved by children and recommended by parents"
          tag="Top Sellers"
          textboxLayout="default"
          animationType="slide-up"
          useInvertedBackground="noInvert"
          gridVariant="three-columns-all-equal-width"
          containerStyle="default"
          products={[
            {
              id: "1",
              brand: "Child Classics",
              name: "Wooden Building Blocks Set",
              price: "$34.99",
              rating: 5,
              reviewCount: "2.8k",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1766064022679-fp75yiaj.jpg",
              imageAlt: "Wooden building blocks toy"
            },
            {
              id: "2",
              brand: "Child Tech",
              name: "Remote Control Racing Car",
              price: "$49.99",
              rating: 5,
              reviewCount: "1.9k",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1766064024214-ppbqta7u.jpg",
              imageAlt: "RC toy car for kids"
            },
            {
              id: "3",
              brand: "Child Comfort",
              name: "Premium Stuffed Animal Collection",
              price: "$24.99",
              rating: 5,
              reviewCount: "3.2k",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1766064025674-htyp3vmo.jpg",
              imageAlt: "Plush toy animals"
            }
          ]}
        />
      </div>

      <div id="about" data-section="about">
        <MediaGridAbout
          title="Why Parents Choose Child"
          description="We believe every child deserves safe, engaging toys that spark creativity and imagination. Our mission is to provide parents with premium-quality, carefully tested toys that bring happiness to children while exceeding safety standards."
          useInvertedBackground="noInvert"
          imagePosition="right"
          mediaItems={[
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1766064013640-cd0ftp75.jpg",
              imageAlt: "Happy children playing with toys"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1766063998903-w1z9r4uk.jpg",
              imageAlt: "Educational wooden blocks"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1766064003064-r4vn2i5z.jpg",
              imageAlt: "Collection of toy cars"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1766064004073-a179uvl3.jpg",
              imageAlt: "Children enjoying doll play"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1766064006956-3w2zoo6a.jpg",
              imageAlt: "Educational puzzle toys"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1766064009607-6yw90z60.jpg",
              imageAlt: "Cuddly teddy bear toy"
            }
          ]}
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardFifteen
          title="Toy Collections"
          description="Explore our diverse range of toys organized by age, interest, and development stage"
          textboxLayout="default"
          animationType="slide-up"
          useInvertedBackground="noInvert"
          features={[
            {
              id: "1",
              title: "Infants & Toddlers",
              description: "Soft, colorful toys designed for sensory development",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1766064009607-6yw90z60.jpg",
              imageAlt: "Cuddly teddy bear toy"
            },
            {
              id: "2",
              title: "Preschool Fun",
              description: "Educational toys that encourage learning through play",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1766063998903-w1z9r4uk.jpg",
              imageAlt: "Educational wooden blocks"
            },
            {
              id: "3",
              title: "Action & Adventure",
              description: "Exciting toys for imaginative outdoor and indoor play",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1766064010834-n5zbkcnr.jpg",
              imageAlt: "Action figures and toy characters"
            },
            {
              id: "4",
              title: "Building & Construction",
              description: "Creative sets that develop problem-solving skills",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1766064006956-3w2zoo6a.jpg",
              imageAlt: "Educational puzzle toys"
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardTwelve
          cardTitle="Thousands of parents trust Child for safe, quality toys that bring real joy to their children"
          cardTag="What parents are saying"
          useInvertedBackground="noInvert"
          testimonials={[
            {
              id: "1",
              name: "Sarah Johnson",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1766064014634-2zi3c996.jpg"
            },
            {
              id: "2",
              name: "Michael Chen",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1766064015853-i37fu7m3.jpg"
            },
            {
              id: "3",
              name: "Emma Davis",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1766064017197-rgiv0rp3.jpg"
            },
            {
              id: "4",
              name: "James Wilson",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1766064018626-g1br4t1t.jpg"
            }
          ]}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqSplitMedia
          title="Frequently Asked Questions"
          description="Find answers to common questions about our toys, shipping, and safety standards"
          textboxLayout="default"
          useInvertedBackground="noInvert"
          mediaPosition="left"
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1766064019835-wsrdf4dp.jpg"
          imageAlt="Safety testing and quality control"
          faqs={[
            {
              id: "1",
              title: "Are your toys safe for children?",
              content: "Yes, all our toys exceed international safety standards including CE and ASTM certifications. We rigorously test every product for safety, durability, and age-appropriateness."
            },
            {
              id: "2",
              title: "What is your return policy?",
              content: "We offer a 30-day hassle-free return policy. If you're not completely satisfied with your purchase, simply return it for a full refund or exchange."
            },
            {
              id: "3",
              title: "How long does shipping take?",
              content: "Most orders ship within 24 hours and arrive within 2-3 business days. Free shipping is available on orders over $50."
            },
            {
              id: "4",
              title: "Do you offer gift wrapping?",
              content: "Yes! We offer free gift wrapping for all orders. Select the gift wrap option during checkout to make your present extra special."
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactFaq
          ctaTitle="Get in Touch"
          ctaDescription="Have questions about our toys or need help? Our friendly team is here to assist you."
          ctaButton={{ text: "Contact Us", href: "mailto:hello@childtoys.com" }}
          ctaIcon={Mail}
          useInvertedBackground="noInvert"
          animationType="slide-up"
          faqs={[
            {
              id: "1",
              title: "What age group is this toy suitable for?",
              content: "All our products have clear age recommendations on the packaging and product page. We categorize toys by developmental stage to help you find the perfect match."
            },
            {
              id: "2",
              title: "Can I purchase toys in bulk for schools?",
              content: "Absolutely! We offer special bulk discounts for schools, daycares, and organizations. Contact our sales team for custom quotes."
            },
            {
              id: "3",
              title: "Do you have a loyalty program?",
              content: "Yes, join our Child Rewards program to earn points on every purchase and enjoy exclusive deals and early access to new collections."
            }
          ]}
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterSocial
          logoText="Child"
          copyrightText="© Child Toys, Inc. 2025. All rights reserved."
          columns={[
            {
              title: "Shop",
              items: [
                { label: "All Toys", href: "products" },
                { label: "By Age", href: "products" },
                { label: "Best Sellers", href: "products" },
                { label: "New Arrivals", href: "products" }
              ]
            },
            {
              title: "Company",
              items: [
                { label: "About Us", href: "about" },
                { label: "Blog", href: "#" },
                { label: "Careers", href: "#" },
                { label: "Press", href: "#" }
              ]
            },
            {
              title: "Support",
              items: [
                { label: "Contact Us", href: "contact" },
                { label: "FAQ", href: "faq" },
                { label: "Shipping Info", href: "#" },
                { label: "Returns", href: "#" }
              ]
            },
            {
              title: "Legal",
              items: [
                { label: "Privacy Policy", href: "#" },
                { label: "Terms of Service", href: "#" },
                { label: "Safety Standards", href: "#" }
              ]
            }
          ]}
          socialLinks={[
            { icon: Facebook, href: "https://facebook.com", ariaLabel: "Facebook" },
            { icon: Instagram, href: "https://instagram.com", ariaLabel: "Instagram" },
            { icon: Twitter, href: "https://twitter.com", ariaLabel: "Twitter" },
            { icon: Youtube, href: "https://youtube.com", ariaLabel: "YouTube" }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}