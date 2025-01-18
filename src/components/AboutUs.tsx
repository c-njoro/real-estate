import Image from "next/image";

const AboutUs = () => {
  return (
    <div className="bg-background min-h-screen py-16 font-body">
      {/* Main Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            About Premier Estates
          </h1>
          <p className="text-foreground/80 text-lg max-w-2xl mx-auto">
            Your trusted partner in finding the perfect place to call home since
            2010
          </p>
        </div>

        {/* Vision & Mission */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div className="p-6 rounded-lg border border-foreground/10">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Our Vision
            </h2>
            <p className="text-foreground/80">
              To revolutionize the real estate industry by providing
              unparalleled service and innovative solutions that make property
              transactions seamless and rewarding for all our clients.
            </p>
          </div>
          <div className="p-6 rounded-lg border border-foreground/10">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Our Mission
            </h2>
            <p className="text-foreground/80">
              To help individuals and families find their dream properties while
              delivering exceptional value through professional expertise,
              integrity, and personalized service.
            </p>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          <div className="text-center">
            <div className="text-3xl font-bold text-foreground mb-2">1000+</div>
            <div className="text-foreground/70">Properties Sold</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-foreground mb-2">98%</div>
            <div className="text-foreground/70">Client Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-foreground mb-2">13+</div>
            <div className="text-foreground/70">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-foreground mb-2">24/7</div>
            <div className="text-foreground/70">Support</div>
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">
            Our Core Values
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="text-xl font-semibold text-foreground mb-3">
                Integrity
              </div>
              <p className="text-foreground/80">
                We maintain the highest standards of honesty and transparency in
                all our dealings.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="text-xl font-semibold text-foreground mb-3">
                Excellence
              </div>
              <p className="text-foreground/80">
                We strive for excellence in every aspect of our service
                delivery.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="text-xl font-semibold text-foreground mb-3">
                Innovation
              </div>
              <p className="text-foreground/80">
                We embrace new technologies and methods to enhance our client
                experience.
              </p>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div>
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">
            Our Leadership Team
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="text-center">
              <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-foreground/10">
                <Image
                  src={`https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg`}
                  alt="Profile Picture"
                  width={300}
                  height={300}
                  loading="lazy"
                  className="w-full h-full object-cover rounded-full"
                ></Image>
              </div>
              <div className="text-xl font-semibold text-foreground">
                Sarah Johnson
              </div>
              <div className="text-foreground/70 mb-2">CEO & Founder</div>
            </div>
            {/* Team Member 2 */}
            <div className="text-center">
              <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-foreground/10">
                <Image
                  src={`https://images.pexels.com/photos/2285991/pexels-photo-2285991.jpeg`}
                  alt="Profile Picture"
                  width={300}
                  height={300}
                  loading="lazy"
                  className="w-full h-full object-cover rounded-full"
                ></Image>
              </div>
              <div className="text-xl font-semibold text-foreground">
                Michael Chen
              </div>
              <div className="text-foreground/70 mb-2">Head of Operations</div>
            </div>
            {/* Team Member 3 */}
            <div className="text-center">
              <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-foreground/10">
                <Image
                  src={`https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg`}
                  alt="Profile Picture"
                  width={300}
                  height={300}
                  loading="lazy"
                  className="w-full h-full object-cover rounded-full"
                ></Image>
              </div>
              <div className="text-xl font-semibold text-foreground">
                Emily Rodriguez
              </div>
              <div className="text-foreground/70 mb-2">
                Lead Real Estate Agent
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
