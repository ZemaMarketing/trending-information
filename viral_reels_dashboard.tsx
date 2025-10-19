import React, { useState } from 'react';
import { TrendingUp, Award, Copy, RefreshCw, Lock } from 'lucide-react';

export default function ViralReelsDashboard() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [niche, setNiche] = useState('');
  const [error, setError] = useState('');
  
  // Simple password (change this to your desired password)
  const CORRECT_PASSWORD = 'contentmaster123';
  
  const handleLogin = () => {
    if (password === CORRECT_PASSWORD) {
      setIsAuthenticated(true);
      setError('');
    } else {
      setError('Incorrect password');
    }
  };
  
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleLogin();
    }
  };
  
  // Sample data - this would be replaced by your automation backend
  const emergingTrends = [
    {
      hook: "POV: You just realized...",
      engagementRate: "8.2%",
      timeframe: "Last 24h",
      views: "45K avg"
    },
    {
      hook: "The way I RAN to tell you this...",
      engagementRate: "9.1%",
      timeframe: "Last 48h",
      views: "62K avg"
    },
    {
      hook: "Nobody's talking about this but...",
      engagementRate: "7.5%",
      timeframe: "Last 24h",
      views: "38K avg"
    }
  ];
  
  const provenWinners = [
    {
      hook: "If you're struggling with [problem], watch this",
      engagementRate: "12.4%",
      totalViews: "2.3M",
      saves: "45K"
    },
    {
      hook: "I tried [trend] for 30 days and...",
      engagementRate: "11.8%",
      totalViews: "1.8M",
      saves: "38K"
    },
    {
      hook: "Things I wish I knew before [topic]",
      engagementRate: "10.9%",
      totalViews: "1.5M",
      saves: "32K"
    }
  ];
  
  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-300 via-orange-400 to-orange-500 relative overflow-hidden">
        <div className="absolute top-20 left-20 w-96 h-96 bg-orange-400 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-red-400 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-yellow-400 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse"></div>
        
        <div className="relative z-10 backdrop-blur-sm bg-white/10 p-12 rounded-3xl shadow-2xl border border-white/20 max-w-md w-full mx-4">
          <div className="flex justify-center mb-6">
            <Lock className="w-12 h-12 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-white text-center mb-8">Content Dashboard</h1>
          <div className="space-y-4">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Enter password"
              className="w-full px-6 py-4 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 text-lg"
            />
            {error && <p className="text-red-200 text-center text-sm">{error}</p>}
            <button
              onClick={handleLogin}
              className="w-full py-4 rounded-full bg-white/30 backdrop-blur-md border border-white/40 text-white font-semibold hover:bg-white/40 transition-all duration-300 text-lg"
            >
              Access Dashboard
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-300 via-orange-400 to-orange-500 relative overflow-hidden">
      <div className="absolute top-20 left-20 w-96 h-96 bg-orange-400 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-red-400 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-yellow-400 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse"></div>
      
      <div className="relative z-10 p-8">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-white mb-4">Need content ideas?</h1>
          <div className="max-w-xl mx-auto">
            <input
              type="text"
              value={niche}
              onChange={(e) => setNiche(e.target.value)}
              placeholder="Enter niche or category"
              className="w-full px-8 py-4 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 text-lg"
            />
            <button className="mt-4 px-8 py-3 rounded-full bg-white/30 backdrop-blur-md border border-white/40 text-white font-semibold hover:bg-white/40 transition-all duration-300 flex items-center gap-2 mx-auto">
              <RefreshCw className="w-5 h-5" />
              Find Ideas
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          <div className="backdrop-blur-md bg-white/10 rounded-3xl p-8 border border-white/20 shadow-2xl">
            <div className="flex items-center gap-3 mb-6">
              <TrendingUp className="w-8 h-8 text-white" />
              <h2 className="text-3xl font-bold text-white">Emerging Trends</h2>
            </div>
            <p className="text-white/80 mb-6">Fresh patterns spotted in the last 48 hours</p>
            
            <div className="space-y-4">
              {emergingTrends.map((trend, idx) => (
                <div key={idx} className="backdrop-blur-sm bg-white/20 rounded-2xl p-6 border border-white/30 hover:bg-white/30 transition-all duration-300">
                  <div className="flex justify-between items-start mb-3">
                    <p className="text-white font-semibold text-lg flex-1">{trend.hook}</p>
                    <button 
                      onClick={() => copyToClipboard(trend.hook)}
                      className="ml-2 p-2 rounded-full bg-white/20 hover:bg-white/30 transition-all"
                    >
                      <Copy className="w-4 h-4 text-white" />
                    </button>
                  </div>
                  <div className="flex gap-4 text-sm text-white/80">
                    <span>📈 {trend.engagementRate}</span>
                    <span>⏱️ {trend.timeframe}</span>
                    <span>👁️ {trend.views}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="backdrop-blur-md bg-white/10 rounded-3xl p-8 border border-white/20 shadow-2xl">
            <div className="flex items-center gap-3 mb-6">
              <Award className="w-8 h-8 text-white" />
              <h2 className="text-3xl font-bold text-white">Proven Winners</h2>
            </div>
            <p className="text-white/80 mb-6">High-performing hooks with 100K+ views</p>
            
            <div className="space-y-4">
              {provenWinners.map((winner, idx) => (
                <div key={idx} className="backdrop-blur-sm bg-white/20 rounded-2xl p-6 border border-white/30 hover:bg-white/30 transition-all duration-300">
                  <div className="flex justify-between items-start mb-3">
                    <p className="text-white font-semibold text-lg flex-1">{winner.hook}</p>
                    <button 
                      onClick={() => copyToClipboard(winner.hook)}
                      className="ml-2 p-2 rounded-full bg-white/20 hover:bg-white/30 transition-all"
                    >
                      <Copy className="w-4 h-4 text-white" />
                    </button>
                  </div>
                  <div className="flex gap-4 text-sm text-white/80">
                    <span>🔥 {winner.engagementRate}</span>
                    <span>👁️ {winner.totalViews}</span>
                    <span>💾 {winner.saves}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}