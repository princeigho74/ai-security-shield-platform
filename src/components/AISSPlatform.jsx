import React, { useState, useEffect } from 'react';
import { Shield, AlertTriangle, Camera, Radio, Activity, MapPin, Users, TrendingUp, Globe, DollarSign, Target, Zap, Check, ChevronRight, Menu, X, Play, Pause, User, Mail, Phone, Facebook, Linkedin, Twitter, Github } from 'lucide-react';

const AISSPlatform = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [threatSimulation, setThreatSimulation] = useState(false);
  const [statsAnimated, setStatsAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting && entry.target.id === 'stats-section') {
            setStatsAnimated(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    const statsElement = document.getElementById('stats-section');
    if (statsElement) observer.observe(statsElement);

    return () => observer.disconnect();
  }, []);

  const sections = [
    { id: 'home', label: 'Home', icon: Shield },
    { id: 'problem', label: 'Problem', icon: AlertTriangle },
    { id: 'solution', label: 'Solution', icon: Zap },
    { id: 'features', label: 'Features', icon: Activity },
    { id: 'market', label: 'Market', icon: TrendingUp },
    { id: 'business', label: 'Business', icon: DollarSign },
    { id: 'founder', label: 'Founder', icon: User },
  ];

  const threats = [
    'Kidnapping Attempts',
    'Bandit Attacks',
    'School Invasions',
    'Religious Center Assaults',
    'Vehicle Hijackings',
    'Armed Robberies',
    'Transport Ambushes'
  ];

  const features = [
    { icon: Activity, title: 'Predictive Security', desc: 'AI learns attack patterns and flags early risks before incidents occur' },
    { icon: Camera, title: 'Plug-and-Play', desc: 'Works with existing cameras - no expensive new infrastructure needed' },
    { icon: Radio, title: 'Multi-Sensor Fusion', desc: 'Combines video, audio, motion, and GPS for 99% accuracy' },
    { icon: Zap, title: 'Edge AI Processing', desc: 'Offline capability for rural areas with limited connectivity' },
    { icon: Globe, title: 'Universal Deployment', desc: 'Schools, churches, vehicles, estates, markets, and transport hubs' },
    { icon: MapPin, title: 'Real-time Alerts', desc: 'Instant notifications to security teams, police, and community responders' }
  ];

  const useCases = [
    { icon: '🏫', title: 'Schools', desc: 'Detects intruders 50-150m away, alerts admin, security & parents instantly' },
    { icon: '⛪', title: 'Religious Centers', desc: 'Monitors entrances for suspicious approaches, vehicles, or objects' },
    { icon: '🚌', title: 'Transport', desc: 'Prevents hijacking, monitors for ambushes, detects tailing vehicles' },
    { icon: '🏘️', title: 'Estates & Markets', desc: '24/7 intelligent perimeter protection with predictive alerts' }
  ];

  const stats = [
    { value: '$2.5B', label: 'Private Security Market', animated: true },
    { value: '28M', label: 'Unprotected Households', animated: true },
    { value: '450K', label: 'Schools Vulnerable', animated: true },
    { value: '750K', label: 'Religious Centers', animated: true }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-950/80 backdrop-blur-lg border-b border-purple-500/20 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-3">
              <div className="relative">
                <img 
                  src="https://i.imgur.com/Xcq5nha.png" 
                  alt="AISS Logo" 
                  className="w-10 h-10 object-contain"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextElementSibling.style.display = 'block';
                  }}
                />
                <Shield className="w-8 h-8 text-cyan-400 hidden" strokeWidth={2} />
                <div className="absolute inset-0 bg-cyan-400 blur-xl opacity-50 animate-pulse"></div>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                AI SECURITY SHIELD
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex gap-6">
              {sections.map(({ id, label, icon: Icon }) => (
                <button
                  key={id}
                  onClick={() => setActiveSection(id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                    activeSection === id
                      ? 'bg-purple-600 text-white shadow-lg shadow-purple-500/50'
                      : 'text-gray-300 hover:text-white hover:bg-slate-800'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {label}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-slate-900 border-t border-purple-500/20">
            {sections.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => {
                  setActiveSection(id);
                  setMobileMenuOpen(false);
                }}
                className={`w-full flex items-center gap-3 px-6 py-3 ${
                  activeSection === id ? 'bg-purple-600' : 'hover:bg-slate-800'
                }`}
              >
                <Icon className="w-5 h-5" />
                {label}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* Main Content */}
      <div className="pt-16">
        {/* HOME SECTION */}
        {activeSection === 'home' && (
          <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0 opacity-30">
              <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl animate-pulse"></div>
              <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>

            <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
              {/* Rainbow Animated Heading */}
              <div className="mb-8">
                <h1 className="text-5xl sm:text-7xl font-black mb-4 leading-tight">
                  <span className="inline-block animate-gradient bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 bg-clip-text text-transparent bg-[length:200%_auto]">
                    AI SECURITY
                  </span>
                  <br />
                  <span className="inline-block animate-gradient bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 bg-clip-text text-transparent bg-[length:200%_auto]" style={{ animationDelay: '0.5s' }}>
                    SHIELD
                  </span>
                </h1>
                <style jsx>{`
                  @keyframes gradient {
                    0% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                    100% { background-position: 0% 50%; }
                  }
                  .animate-gradient {
                    animation: gradient 3s ease infinite;
                  }
                `}</style>
              </div>

              <p className="text-2xl sm:text-3xl text-cyan-300 mb-6 font-light">
                AI-Powered Early-Threat Detection for Safer Communities
              </p>

              <p className="text-lg text-gray-300 mb-12 max-w-2xl mx-auto">
                Nigeria's first predictive security platform that detects threats before they happen—protecting schools, churches, transport, and communities with intelligent AI surveillance.
              </p>

              <div className="flex flex-wrap gap-4 justify-center mb-16">
                <button
                  onClick={() => setActiveSection('solution')}
                  className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-semibold text-lg shadow-lg shadow-purple-500/50 hover:shadow-xl hover:shadow-purple-500/70 transition-all transform hover:scale-105 flex items-center gap-2"
                >
                  See Solution <ChevronRight className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setThreatSimulation(!threatSimulation)}
                  className="px-8 py-4 bg-slate-800 border-2 border-cyan-500 rounded-full font-semibold text-lg hover:bg-slate-700 transition-all flex items-center gap-2"
                >
                  {threatSimulation ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                  {threatSimulation ? 'Pause Demo' : 'Live Demo'}
                </button>
              </div>

              {/* Threat Detection Simulation */}
              {threatSimulation && (
                <div className="bg-slate-800/50 backdrop-blur-lg border border-purple-500/30 rounded-2xl p-8 max-w-3xl mx-auto">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="relative">
                      <Activity className="w-6 h-6 text-red-500 animate-pulse" />
                      <div className="absolute inset-0 bg-red-500 blur-lg opacity-50"></div>
                    </div>
                    <h3 className="text-xl font-bold">Real-Time Threat Simulation</h3>
                  </div>
                  <div className="space-y-3">
                    {threats.map((threat, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-3 p-3 bg-slate-900/50 rounded-lg border border-red-500/20 animate-pulse"
                        style={{ animationDelay: `${i * 0.2}s` }}
                      >
                        <AlertTriangle className="w-5 h-5 text-yellow-500" />
                        <span className="text-sm">{threat} - Detecting...</span>
                        <span className="ml-auto text-green-400 text-xs font-mono">ACTIVE</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* PROBLEM SECTION */}
        {activeSection === 'problem' && (
          <div className="min-h-screen py-20 px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
                  Nigeria's Security Crisis
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Traditional CCTV cameras only record crime—they don't detect, predict, or prevent it. Security agencies lack early-warning systems to sense danger before attacks occur.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                {threats.map((threat, i) => (
                  <div
                    key={i}
                    className="bg-gradient-to-br from-red-900/20 to-orange-900/20 border border-red-500/30 rounded-xl p-6 hover:border-red-400 transition-all hover:shadow-lg hover:shadow-red-500/20"
                  >
                    <AlertTriangle className="w-8 h-8 text-red-400 mb-4" />
                    <h3 className="text-lg font-semibold mb-2">{threat}</h3>
                    <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-red-500 to-orange-500 animate-pulse" style={{ width: '85%' }}></div>
                    </div>
                    <p className="text-sm text-gray-400 mt-2">High Risk</p>
                  </div>
                ))}
              </div>

              <div className="bg-slate-800/50 backdrop-blur-lg border border-purple-500/30 rounded-2xl p-8 text-center">
                <h3 className="text-3xl font-bold mb-4 text-red-400">The Biggest Gap</h3>
                <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                  Institutions lack early-warning systems. By the time traditional security responds, it's often too late. AISS changes this with predictive AI that detects threats before they escalate.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* SOLUTION SECTION */}
        {activeSection === 'solution' && (
          <div className="min-h-screen py-20 px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  The AISS Solution
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  A cross-platform AI system that monitors environments through multiple sensors and detects threats in real-time with instant alerts.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 border border-purple-500/30 rounded-2xl p-8">
                  <Camera className="w-12 h-12 text-cyan-400 mb-4" />
                  <h3 className="text-2xl font-bold mb-4">What We Detect</h3>
                  <ul className="space-y-3">
                    {[
                      'Suspicious movement patterns',
                      'Unusual crowd behavior',
                      'Weapons and dangerous objects',
                      'Unknown vehicles approaching',
                      'Aggressive motion patterns',
                      'Forced entry attempts',
                      'Kidnapping cues',
                      'Shots & explosive sounds',
                      'After-hours intrusions'
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <Check className="w-5 h-5 text-green-400" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-cyan-900/30 to-blue-900/30 border border-cyan-500/30 rounded-2xl p-8">
                  <Radio className="w-12 h-12 text-purple-400 mb-4" />
                  <h3 className="text-2xl font-bold mb-4">Who Gets Alerted</h3>
                  <ul className="space-y-3">
                    {[
                      'School management & staff',
                      'Religious institution leaders',
                      'Estate security teams',
                      'Transport company operators',
                      'Police response units',
                      'Community vigilantes',
                      'Emergency services',
                      'Family members (opt-in)'
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <Users className="w-5 h-5 text-cyan-400" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* FEATURES SECTION */}
        {activeSection === 'features' && (
          <div className="min-h-screen py-20 px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
                  Revolutionary Features
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  What makes AISS truly innovative and market-creating
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                {features.map((feature, i) => (
                  <div
                    key={i}
                    className="bg-slate-800/50 backdrop-blur-lg border border-purple-500/30 rounded-xl p-6 hover:border-cyan-400 transition-all hover:shadow-lg hover:shadow-cyan-500/20 group"
                  >
                    <div className="relative mb-4">
                      <feature.icon className="w-10 h-10 text-cyan-400 group-hover:scale-110 transition-transform" />
                      <div className="absolute inset-0 bg-cyan-400 blur-xl opacity-0 group-hover:opacity-50 transition-opacity"></div>
                    </div>
                    <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                    <p className="text-gray-400">{feature.desc}</p>
                  </div>
                ))}
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {useCases.map((useCase, i) => (
                  <div
                    key={i}
                    className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 border border-purple-500/30 rounded-xl p-6 text-center hover:scale-105 transition-transform"
                  >
                    <div className="text-4xl mb-3">{useCase.icon}</div>
                    <h3 className="text-xl font-bold mb-2">{useCase.title}</h3>
                    <p className="text-sm text-gray-400">{useCase.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* MARKET SECTION */}
        {activeSection === 'market' && (
          <div className="min-h-screen py-20 px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                  Massive Market Opportunity
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Nigeria's first AI preventive-security platform for Africa
                </p>
              </div>

              <div id="stats-section" className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                {stats.map((stat, i) => (
                  <div
                    key={i}
                    className="bg-gradient-to-br from-yellow-900/20 to-orange-900/20 border border-yellow-500/30 rounded-xl p-8 text-center hover:border-yellow-400 transition-all"
                  >
                    <div className="text-4xl font-black mb-2 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                      {statsAnimated ? stat.value : '...'}
                    </div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </div>
                ))}
              </div>

              <div className="bg-slate-800/50 backdrop-blur-lg border border-purple-500/30 rounded-2xl p-8 mb-8">
                <h3 className="text-3xl font-bold mb-6 text-center">Continental Scalability</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  {[
                    { country: '🇳🇬 Nigeria', market: 'Primary Market - $2.5B+' },
                    { country: '🇰🇪 Kenya', market: 'East Africa Hub' },
                    { country: '🇿🇦 South Africa', market: 'Southern Africa Leader' },
                    { country: '🇬🇭 Ghana', market: 'West Africa Growth' },
                    { country: '🇺🇬 Uganda', market: 'Emerging Market' },
                    { country: '🇨🇲 Cameroon', market: 'Central Africa Entry' }
                  ].map((region, i) => (
                    <div key={i} className="bg-slate-900/50 border border-cyan-500/20 rounded-lg p-4">
                      <div className="text-2xl mb-2">{region.country}</div>
                      <div className="text-sm text-gray-400">{region.market}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="text-center bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8">
                <h3 className="text-3xl font-bold mb-4">🎯 Competitive Advantage</h3>
                <p className="text-lg mb-4">First-to-market AI preventive security for African communities</p>
                <ul className="text-left max-w-2xl mx-auto space-y-2">
                  {[
                    'Solving Nigeria\'s #1 national security challenge',
                    'Works with low-cost hardware & existing infrastructure',
                    'Designed for schools, communities, not just enterprises',
                    'Strong social impact: Safety, peace, economic stability'
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <Check className="w-5 h-5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* BUSINESS MODEL SECTION */}
        {activeSection === 'business' && (
          <div className="min-h-screen py-20 px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                  Revenue Model
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Multiple revenue streams for sustainable growth
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8 mb-12">
                <div className="bg-gradient-to-br from-green-900/30 to-emerald-900/30 border border-green-500/30 rounded-2xl p-8 hover:scale-105 transition-transform">
                  <Target className="w-12 h-12 text-green-400 mb-4" />
                  <h3 className="text-2xl font-bold mb-4">Subscription (SaaS)</h3>
                  <div className="text-3xl font-black text-green-400 mb-2">₦10K - ₦50K</div>
                  <p className="text-gray-400 mb-4">Monthly per site/device</p>
                  <ul className="space-y-2 text-sm">
                    <li>• Schools & religious centers</li>
                    <li>• Residential estates</li>
                    <li>• Small businesses</li>
                    <li>• Individual vehicles</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-blue-900/30 to-indigo-900/30 border border-blue-500/30 rounded-2xl p-8 hover:scale-105 transition-transform">
                  <DollarSign className="w-12 h-12 text-blue-400 mb-4" />
                  <h3 className="text-2xl font-bold mb-4">Enterprise</h3>
                  <div className="text-3xl font-black text-blue-400 mb-2">Custom Pricing</div>
                  <p className="text-gray-400 mb-4">Large-scale installations</p>
                  <ul className="space-y-2 text-sm">
                    <li>• Banks & financial institutions</li>
                    <li>• Shopping malls</li>
                    <li>• Airports & transport hubs</li>
                    <li>• Manufacturing facilities</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 border border-purple-500/30 rounded-2xl p-8 hover:scale-105 transition-transform">
                  <Globe className="w-12 h-12 text-purple-400 mb-4" />
                  <h3 className="text-2xl font-bold mb-4">Government</h3>
                  <div className="text-3xl font-black text-purple-400 mb-2">Partnerships</div>
                  <p className="text-gray-400 mb-4">Public sector programs</p>
                  <ul className="space-y-2 text-sm">
                    <li>• Safe-school initiatives</li>
                    <li>• State security trust funds</li>
                    <li>• Public infrastructure</li>
                    <li>• Smart city projects</li>
                  </ul>
                </div>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-lg border border-purple-500/30 rounded-2xl p-8 text-center">
                <h3 className="text-3xl font-bold mb-6">📊 Financial Projections</h3>
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div>
                    <div className="text-2xl font-bold text-cyan-400 mb-2">Year 1</div>
                    <div className="text-lg text-gray-400">Market Entry</div>
                    <div className="text-xl font-semibold mt-2">1,000 Sites</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-purple-400 mb-2">Year 3</div>
                    <div className="text-lg text-gray-400">Scale-up Phase</div>
                    <div className="text-xl font-semibold mt-2">50,000 Sites</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-pink-400 mb-2">Year 5</div>
                    <div className="text-lg text-gray-400">Regional Leader</div>
                    <div className="text-xl font-semibold mt-2">500,000 Sites</div>
                  </div>
                </div>

                <button className="px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
                  Download Full Pitch Deck
                </button>
              </div>
            </div>
          </div>
        )}

        {/* FOUNDER SECTION */}
        {activeSection === 'founder' && (
          <div className="min-h-screen py-20 px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Meet the Founder
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Visionary leader driving innovation in AI-powered security solutions
                </p>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-lg border border-purple-500/30 rounded-3xl p-8 md:p-12">
                <div className="flex flex-col md:flex-row gap-8 items-center md:items-start mb-8">
                  {/* Profile Section */}
                  <div className="flex-shrink-0 text-center">
                    <div className="relative inline-block mb-4">
                      <div className="w-48 h-48 rounded-2xl overflow-hidden border-4 border-purple-500 shadow-2xl">
                        <img 
                          src="https://i.imgur.com/Cr8MgYI.png" 
                          alt="Happy Igho Umukoro" 
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            e.currentTarget.style.display = 'none';
                            e.currentTarget.nextElementSibling.style.display = 'flex';
                          }}
                        />
                        <div className="w-full h-full bg-gradient-to-br from-cyan-500 via-purple-500 to-pink-500 hidden items-center justify-center">
                          <User className="w-32 h-32 text-white" />
                        </div>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-2xl blur-2xl opacity-50 animate-pulse"></div>
                    </div>
                    
                    {/* Logo */}
                    <div className="flex justify-center mb-4">
                      <img 
                        src="https://i.imgur.com/Xcq5nha.png" 
                        alt="AISS Logo" 
                        className="w-24 h-24 object-contain"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                        }}
                      />
                    </div>
                  </div>

                  {/* Info Section */}
                  <div className="flex-1">
                    <h3 className="text-4xl font-bold mb-2 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                      Happy Igho Umukoro
                    </h3>
                    <p className="text-xl text-purple-400 mb-6">CEO & Founder, AISS</p>
                    
                    <div className="space-y-4 mb-8">
                      <div className="flex items-center gap-3 text-gray-300">
                        <Phone className="w-5 h-5 text-cyan-400" />
                        <a href="tel:+2348065292102" className="hover:text-cyan-400 transition-colors">
                          +234 806 529 2102
                        </a>
                      </div>
                      
                      <div className="flex items-center gap-3 text-gray-300">
                        <Mail className="w-5 h-5 text-cyan-400" />
                        <a href="mailto:smartxpress74@gmail.com" className="hover:text-cyan-400 transition-colors">
                          smartxpress74@gmail.com
                        </a>
                      </div>
                    </div>

                    {/* Social Links */}
                    <div className="flex flex-wrap gap-4">
                      <a
                        href="https://www.facebook.com/share/1AjNFfVGfw/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-all transform hover:scale-105"
                      >
                        <Facebook className="w-5 h-5" />
                        <span>Facebook</span>
                      </a>

                      <a
                        href="https://www.linkedin.com/in/happy-umukoro-lslt-nislt-b62b07129"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-blue-700 hover:bg-blue-800 rounded-lg transition-all transform hover:scale-105"
                      >
                        <Linkedin className="w-5 h-5" />
                        <span>LinkedIn</span>
                      </a>

                      <a
                        href="https://x.com/PrinceIgho4?t=4fZM43SUjNmTYvQ1hdgB0g&s=09"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-slate-700 hover:bg-slate-800 rounded-lg transition-all transform hover:scale-105"
                      >
                        <Twitter className="w-5 h-5" />
                        <span>Twitter/X</span>
                      </a>

                      <a
                        href="https://github.com/princeigho74"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-900 rounded-lg transition-all transform hover:scale-105"
                      >
                        <Github className="w-5 h-5" />
                        <span>GitHub</span>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Vision Statement */}
                <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 border border-purple-500/30 rounded-xl p-6">
                  <h4 className="text-2xl font-bold mb-4 text-center">Vision & Mission</h4>
                  <p className="text-gray-300 text-center text-lg leading-relaxed">
                    "Building Africa's first AI-powered preventive security platform to protect communities, 
                    schools, religious institutions, and transport systems from threats before they occur. 
                    Through innovation and technology, we're creating safer environments where people can 
                    thrive without fear."
                  </p>
                </div>

                {/* Call to Action */}
                <div className="mt-8 text-center">
                  <h4 className="text-xl font-semibold mb-4">Let's Build a Safer Africa Together</h4>
                  <div className="flex flex-wrap justify-center gap-4">
                    <a
                      href="mailto:smartxpress74@gmail.com?subject=AISS Partnership Inquiry"
                      className="px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
                    >
                      Partner With Us
                    </a>
                    <a
                      href="mailto:smartxpress74@gmail.com?subject=AISS Investment Inquiry"
                      className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
                    >
                      Invest in AISS
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="bg-slate-950 border-t border-purple-500/20 py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <img 
              src="https://i.imgur.com/Xcq5nha.png" 
              alt="AISS Logo" 
              className="w-8 h-8 object-contain"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextElementSibling.style.display = 'block';
              }}
            />
            <Shield className="w-6 h-6 text-cyan-400 hidden" />
            <span className="text-lg font-bold">AI Security Shield (AISS)</span>
          </div>
          <p className="text-gray-400 mb-4">Building safer communities across Africa</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500 mb-4">
            <span>smartxpress74@gmail.com</span>
            <span>•</span>
            <span>+234 806 529 2102</span>
          </div>
          <p className="text-xs text-gray-600">
            © 2026 AI Security Shield. Founded by Happy Igho Umukoro
          </p>
        </div>
      </footer>
    </div>
  );
};

export default AISSPlatform;
