const DemoVideo = () => {
  return (
    <section id="demo-video" className="py-24 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            See <span className="text-primary">BlueBot</span> in Action
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Watch how BlueBot autonomously collects waste, converts it to energy, 
            and monitors water quality in real-time.
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto animate-scale-in">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-card">
            <video
              className="w-full h-auto"
              controls
              autoPlay
              muted
              loop
            >
              <source src="/video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoVideo;
