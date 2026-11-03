import React from 'react';
import {
  Layers,
  Car,
  Shield,
  Cpu,
  Zap,
  Bot,
  Anchor,
  CheckCircle2,
  Settings2,
  FlaskConical,
  Globe2,
  TrendingUp,
  BarChart3,
  Briefcase,
  Leaf,
  FolderOpen
} from 'lucide-react';

interface CategoryIconProps {
  name: string;
  className?: string;
}

export const CategoryIcon: React.FC<CategoryIconProps> = ({ name, className = 'w-5 h-5' }) => {
  switch (name) {
    case 'Layers':
      return <Layers className={className} />;
    case 'Car':
      return <Car className={className} />;
    case 'Shield':
      return <Shield className={className} />;
    case 'Cpu':
      return <Cpu className={className} />;
    case 'Zap':
      return <Zap className={className} />;
    case 'Bot':
      return <Bot className={className} />;
    case 'Anchor':
      return <Anchor className={className} />;
    case 'CheckCircle2':
      return <CheckCircle2 className={className} />;
    case 'Settings2':
      return <Settings2 className={className} />;
    case 'FlaskConical':
      return <FlaskConical className={className} />;
    case 'Globe2':
      return <Globe2 className={className} />;
    case 'TrendingUp':
      return <TrendingUp className={className} />;
    case 'BarChart3':
      return <BarChart3 className={className} />;
    case 'Briefcase':
      return <Briefcase className={className} />;
    case 'Leaf':
      return <Leaf className={className} />;
    default:
      return <FolderOpen className={className} />;
  }
};
