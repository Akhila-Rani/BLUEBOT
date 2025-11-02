import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Simulation = () => {
  const navigate = useNavigate();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [gameState, setGameState] = useState({
    submarine: { x: 400, y: 300, angle: 0, targetAngle: 0 },
    trash: [],
    fuel: 100,
    capacity: 0,
    maxCapacity: 100,
    score: 0,
    isConverting: false,
    time: 0
  });
  
  const submarineSpeed = 0.4;
  const rotationSpeed = 0.015;
  const trashSpawnRate = 0.005;
  const conversionDelay = 240; // 4 seconds at ~60fps
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    let animationId: number;
    
    const drawSubmarine = (x: number, y: number, angle: number) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(angle);
      
      // Shadow
      ctx.shadowColor = 'rgba(0, 0, 0, 0.3)';
      ctx.shadowBlur = 15;
      ctx.shadowOffsetX = 5;
      ctx.shadowOffsetY = 5;
      
      // Main body - metallic submarine with BlueBot colors
      const bodyGradient = ctx.createLinearGradient(0, -25, 0, 25);
      bodyGradient.addColorStop(0, '#1e4d7a');
      bodyGradient.addColorStop(0.5, '#2563a0');
      bodyGradient.addColorStop(1, '#14304d');
      ctx.fillStyle = bodyGradient;
      ctx.beginPath();
      ctx.ellipse(0, 0, 45, 22, 0, 0, Math.PI * 2);
      ctx.fill();
      
      // Highlight
      ctx.shadowColor = 'transparent';
      ctx.fillStyle = 'rgba(255, 255, 255, 0.2)';
      ctx.beginPath();
      ctx.ellipse(5, -8, 30, 10, 0, 0, Math.PI * 2);
      ctx.fill();
      
      // Conning tower
      ctx.fillStyle = '#1e4d7a';
      ctx.fillRect(-15, -22, 30, 15);
      const towerGradient = ctx.createLinearGradient(-15, -22, 15, -22);
      towerGradient.addColorStop(0, '#14304d');
      towerGradient.addColorStop(0.5, '#1e4d7a');
      towerGradient.addColorStop(1, '#14304d');
      ctx.fillStyle = towerGradient;
      ctx.fillRect(-15, -22, 30, 15);
      
      // Tail stabilizers
      ctx.fillStyle = '#1e4d7a';
      ctx.beginPath();
      ctx.moveTo(-45, 0);
      ctx.lineTo(-65, -18);
      ctx.lineTo(-55, 0);
      ctx.closePath();
      ctx.fill();
      
      ctx.beginPath();
      ctx.moveTo(-45, 0);
      ctx.lineTo(-65, 18);
      ctx.lineTo(-55, 0);
      ctx.closePath();
      ctx.fill();
      
      // Propeller housing
      ctx.fillStyle = '#14304d';
      ctx.beginPath();
      ctx.arc(-50, 0, 8, 0, Math.PI * 2);
      ctx.fill();
      
      // Windows/Portholes
      for (let i = 0; i < 3; i++) {
        ctx.fillStyle = '#0d1f33';
        ctx.strokeStyle = '#2563a0';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(20 - i * 15, 0, 6, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        
        // Window glare
        ctx.fillStyle = 'rgba(135, 206, 250, 0.4)';
        ctx.beginPath();
        ctx.arc(21 - i * 15, -1, 3, 0, Math.PI * 2);
        ctx.fill();
      }
      
      // Front light
      ctx.fillStyle = 'rgba(255, 255, 150, 0.6)';
      ctx.beginPath();
      ctx.arc(45, 0, 4, 0, Math.PI * 2);
      ctx.fill();
      
      // Light beam
      ctx.fillStyle = 'rgba(255, 255, 150, 0.1)';
      ctx.beginPath();
      ctx.moveTo(45, 0);
      ctx.lineTo(100, -20);
      ctx.lineTo(100, 20);
      ctx.closePath();
      ctx.fill();
      
      ctx.restore();
    };
    
    const drawTrash = (x: number, y: number, type: number) => {
      ctx.save();
      ctx.translate(x, y);
      
      ctx.shadowColor = 'rgba(0, 0, 0, 0.3)';
      ctx.shadowBlur = 8;
      
      if (type === 0) {
        // Plastic bottle
        const bottleGradient = ctx.createLinearGradient(-8, -15, 8, 15);
        bottleGradient.addColorStop(0, '#90EE90');
        bottleGradient.addColorStop(1, '#3cb371');
        ctx.fillStyle = bottleGradient;
        ctx.fillRect(-8, -15, 16, 30);
        ctx.fillStyle = '#228b22';
        ctx.fillRect(-10, -18, 20, 6);
        ctx.fillStyle = 'rgba(255, 255, 255, 0.3)';
        ctx.fillRect(-6, -10, 4, 15);
      } else if (type === 1) {
        // Aluminum can
        const canGradient = ctx.createLinearGradient(-10, -12, 10, 12);
        canGradient.addColorStop(0, '#C0C0C0');
        canGradient.addColorStop(0.5, '#E8E8E8');
        canGradient.addColorStop(1, '#A0A0A0');
        ctx.fillStyle = canGradient;
        ctx.fillRect(-10, -12, 20, 24);
        ctx.fillStyle = '#808080';
        ctx.fillRect(-10, -15, 20, 3);
        ctx.fillRect(-10, 12, 20, 3);
      } else {
        // Plastic bag
        ctx.fillStyle = 'rgba(255, 182, 193, 0.7)';
        ctx.beginPath();
        ctx.moveTo(0, -15);
        ctx.quadraticCurveTo(12, -10, 10, 5);
        ctx.quadraticCurveTo(5, 15, 0, 12);
        ctx.quadraticCurveTo(-5, 15, -10, 5);
        ctx.quadraticCurveTo(-12, -10, 0, -15);
        ctx.fill();
        ctx.strokeStyle = 'rgba(255, 105, 180, 0.5)';
        ctx.lineWidth = 1;
        ctx.stroke();
      }
      
      ctx.restore();
    };
    
    const drawWaterEffects = (time: number) => {
      // Animated water layers
      const gradient1 = ctx.createLinearGradient(0, 0, 0, 600);
      gradient1.addColorStop(0, '#0d2849');
      gradient1.addColorStop(0.5, '#1e3a5f');
      gradient1.addColorStop(1, '#0a1929');
      ctx.fillStyle = gradient1;
      ctx.fillRect(0, 0, 800, 600);
      
      // Caustic light patterns
      ctx.globalAlpha = 0.1;
      for (let i = 0; i < 5; i++) {
        const offset = Math.sin(time * 0.001 + i) * 50;
        const gradient = ctx.createRadialGradient(
          200 + offset + i * 150, 100 + i * 100, 0,
          200 + offset + i * 150, 100 + i * 100, 150
        );
        gradient.addColorStop(0, 'rgba(135, 206, 250, 0.3)');
        gradient.addColorStop(1, 'rgba(135, 206, 250, 0)');
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, 800, 600);
      }
      ctx.globalAlpha = 1;
      
      // Floating particles
      ctx.fillStyle = 'rgba(255, 255, 255, 0.15)';
      for (let i = 0; i < 30; i++) {
        const x = (i * 50 + time * 0.1) % 800;
        const y = (i * 37) % 600;
        const size = Math.sin(time * 0.002 + i) * 1.5 + 2;
        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.fill();
      }
      
      // Rising bubbles
      ctx.fillStyle = 'rgba(255, 255, 255, 0.2)';
      for (let i = 0; i < 15; i++) {
        const x = (i * 60 + Math.sin(time * 0.001 + i) * 30) % 800;
        const y = (600 - (time * 0.3 + i * 40) % 600);
        const size = Math.random() * 4 + 2;
        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.fill();
      }
    };
    
    const distance = (x1: number, y1: number, x2: number, y2: number) => {
      return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
    };
    
    const normalizeAngle = (angle: number) => {
      while (angle > Math.PI) angle -= Math.PI * 2;
      while (angle < -Math.PI) angle += Math.PI * 2;
      return angle;
    };
    
    const gameLoop = () => {
      setGameState(prev => {
        let newState = { ...prev, time: prev.time + 1 };
        
        // Spawn trash randomly
        if (Math.random() < trashSpawnRate && newState.trash.length < 12) {
          newState.trash.push({
            x: Math.random() * 800,
            y: Math.random() * 600,
            type: Math.floor(Math.random() * 3)
          });
        }
        
        // Find nearest trash
        let nearestTrash: any = null;
        let minDist = Infinity;
        newState.trash.forEach((t: any, i: number) => {
          const d = distance(newState.submarine.x, newState.submarine.y, t.x, t.y);
          if (d < minDist) {
            minDist = d;
            nearestTrash = { ...t, index: i };
          }
        });
        
        // Move submarine towards nearest trash with smooth rotation
        if (nearestTrash && newState.fuel > 0) {
          const dx = nearestTrash.x - newState.submarine.x;
          const dy = nearestTrash.y - newState.submarine.y;
          newState.submarine.targetAngle = Math.atan2(dy, dx);
          
          // Smooth rotation
          let angleDiff = normalizeAngle(newState.submarine.targetAngle - newState.submarine.angle);
          newState.submarine.angle += angleDiff * rotationSpeed;
          
          // Move forward
          newState.submarine.x += Math.cos(newState.submarine.angle) * submarineSpeed;
          newState.submarine.y += Math.sin(newState.submarine.angle) * submarineSpeed;
          
          // Consume fuel slowly, but not below 5 to prevent complete shutdown
          newState.fuel = Math.max(5, newState.fuel - 0.02);
          
          // Collect trash if close enough
          if (minDist < 55) {
            newState.trash.splice(nearestTrash.index, 1);
            if (newState.capacity < newState.maxCapacity) {
              newState.capacity += 5;
              newState.score += 10;
            }
          }
        }
        
        // Conversion logic - start after 4 seconds
        if (newState.time >= conversionDelay && newState.capacity > 0) {
          newState.isConverting = true;
          
          // Emergency conversion if fuel is low
          if (newState.fuel < 30) {
            // Fast conversion - push all capacity to fuel
            const conversionAmount = Math.min(newState.capacity, 10);
            newState.capacity = Math.max(0, newState.capacity - conversionAmount);
            newState.fuel = Math.min(100, newState.fuel + conversionAmount * 0.8);
          } else {
            // Normal slow conversion - takes ~45 seconds for full capacity, 2x conversion rate
            newState.capacity = Math.max(0, newState.capacity - 0.037);
            newState.fuel = Math.min(100, newState.fuel + 0.044);
          }
        } else if (newState.capacity === 0) {
          newState.isConverting = false;
        }
        
        // Keep submarine in bounds
        newState.submarine.x = Math.max(70, Math.min(730, newState.submarine.x));
        newState.submarine.y = Math.max(70, Math.min(530, newState.submarine.y));
        
        return newState;
      });
      
      // Draw everything
      drawWaterEffects(gameState.time);
      
      // Draw trash
      gameState.trash.forEach((t: any) => {
        drawTrash(t.x, t.y, t.type);
      });
      
      // Draw submarine
      drawSubmarine(
        gameState.submarine.x,
        gameState.submarine.y,
        gameState.submarine.angle
      );
      
      animationId = requestAnimationFrame(gameLoop);
    };
    
    gameLoop();
    
    return () => cancelAnimationFrame(animationId);
  }, [gameState.submarine.x, gameState.submarine.y, gameState.trash.length, gameState.time]);
  
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-background to-secondary p-6 pt-24">
      <div className="absolute top-6 left-6 z-10">
        <Button
          variant="outline"
          onClick={() => navigate('/')}
          className="gap-2"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Button>
      </div>

      <div className="mb-8 text-center animate-fade-in-up">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="text-primary">BlueBot</span> Live Simulation
        </h1>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Watch BlueBot autonomously navigate, collect ocean waste, and convert it to energy in real-time
        </p>
      </div>
      
      <div className="bg-card border border-border p-6 rounded-2xl shadow-xl animate-scale-in">
        <canvas 
          ref={canvasRef} 
          width={800} 
          height={600}
          className="rounded-xl"
        />
      </div>
      
      <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-4xl animate-fade-in-up">
        <div className="bg-card border border-border p-6 rounded-xl">
          <div className="text-muted-foreground font-semibold text-sm mb-2">FUEL LEVEL</div>
          <div className="text-4xl font-bold text-primary">{Math.round(gameState.fuel)}%</div>
          <div className="mt-3 bg-secondary rounded-full h-2.5 overflow-hidden">
            <div 
              className="bg-primary h-full transition-all duration-300"
              style={{ width: `${gameState.fuel}%` }}
            />
          </div>
        </div>
        
        <div className="bg-card border border-border p-6 rounded-xl">
          <div className="text-muted-foreground font-semibold text-sm mb-2">CAPACITY</div>
          <div className="text-4xl font-bold text-foreground">
            {Math.round(gameState.capacity)}<span className="text-xl text-muted-foreground">/{gameState.maxCapacity}</span>
          </div>
          <div className="mt-3 bg-secondary rounded-full h-2.5 overflow-hidden">
            <div 
              className="bg-primary h-full transition-all duration-300"
              style={{ width: `${(gameState.capacity/gameState.maxCapacity)*100}%` }}
            />
          </div>
        </div>
        
        <div className="bg-card border border-border p-6 rounded-xl">
          <div className="text-muted-foreground font-semibold text-sm mb-2">WASTE COLLECTED</div>
          <div className="text-4xl font-bold text-foreground">{gameState.score}</div>
          <div className="text-xs text-muted-foreground mt-2">+10 points per item</div>
        </div>
        
        <div className="bg-card border border-border p-6 rounded-xl">
          <div className="text-muted-foreground font-semibold text-sm mb-2">SYSTEM STATUS</div>
          <div className="text-2xl font-bold text-primary">
            {gameState.isConverting ? 'CONVERTING' : 'COLLECTING'}
          </div>
          <div className="text-xs text-muted-foreground mt-2">
            {gameState.isConverting ? 'Processing waste' : 'Seeking targets'}
          </div>
        </div>
      </div>
      
      <div className="mt-8 text-center max-w-3xl bg-card p-8 rounded-xl border border-border shadow-sm animate-fade-in-up">
        <h3 className="text-xl font-semibold text-foreground mb-6">How It Works</h3>
        <div className="grid md:grid-cols-3 gap-6 text-sm">
          <div className="space-y-2">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
              <span className="text-2xl font-bold text-primary">1</span>
            </div>
            <strong className="text-foreground block">Autonomous Navigation</strong> 
            <p className="text-muted-foreground">AI-guided submarine automatically seeks and collects ocean waste</p>
          </div>
          <div className="space-y-2">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
              <span className="text-2xl font-bold text-primary">2</span>
            </div>
            <strong className="text-foreground block">Waste-to-Energy Conversion</strong> 
            <p className="text-muted-foreground">After 4 seconds, onboard pyrolysis reactor automatically converts waste to fuel</p>
          </div>
          <div className="space-y-2">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
              <span className="text-2xl font-bold text-primary">3</span>
            </div>
            <strong className="text-foreground block">Self-Sustaining</strong> 
            <p className="text-muted-foreground">+3% fuel per conversion cycle, enabling extended autonomous missions</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Simulation;

