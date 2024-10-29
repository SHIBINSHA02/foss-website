import { Code2, Users, Lock, Github, Heart, Coffee } from 'lucide-react';
import Navbar from './components/Navbar';
import FeatureCard from './components/FeatureCard';
import Background from './components/Background';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-black">
      <Background />
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Empowering Innovation Through
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"> Open Source</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Join a global community of developers building the future of software, together.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#learn-more" className="px-8 py-3 bg-purple-600 text-white rounded-full font-semibold hover:bg-purple-700 transition-colors duration-300 flex items-center gap-2">
              <Github className="w-5 h-5" />
              Get Started
            </a>
            <a href="#contribute" className="px-8 py-3 bg-white/10 text-white rounded-full font-semibold hover:bg-white/20 transition-colors duration-300 flex items-center gap-2">
              <Heart className="w-5 h-5" />
              Contribute
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4" id="learn-more">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
            Why Choose Free & Open Source Software?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              Icon={Code2}
              title="Open Source Code"
              description="Access, study, and modify the source code freely. Build upon existing solutions and contribute back to the community."
            />
            <FeatureCard
              Icon={Users}
              title="Community Driven"
              description="Join a vibrant community of developers, designers, and enthusiasts working together to create better software."
            />
            <FeatureCard
              Icon={Lock}
              title="Freedom & Security"
              description="Transparent code means better security. No vendor lock-in, no hidden costs, complete control over your software."
            />
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-20 px-4 bg-black/30">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            Join Our Growing Community
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Whether you're a developer, designer, or enthusiast, there's a place for you in the FOSS community.
          </p>
          <div className="flex justify-center gap-8 flex-wrap">
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">10K+</div>
              <div className="text-gray-400">Contributors</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">50K+</div>
              <div className="text-gray-400">Projects</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">1M+</div>
              <div className="text-gray-400">Users</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-black/40">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 mb-4 md:mb-0">
            © 2024 FOSS Community. All rights reserved.
          </div>
          <div className="flex gap-6">
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center gap-2">
              <Github className="w-5 h-5" />
              GitHub
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center gap-2">
              <Coffee className="w-5 h-5" />
              Support Us
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;