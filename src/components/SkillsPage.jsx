import { useState } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card.jsx'
import { Button } from '@/components/ui/button.jsx'
import { 
  Code, 
  Database, 
  Brain, 
  Wrench,
  Star,
  Zap,
  Eye,
  MessageSquare,
  BarChart3,
  Shield,
  Cloud,
  Cpu,
  GitBranch,
  Container,
  Settings
} from 'lucide-react'

const SkillsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const skillCategories = [
    { id: 'all', label: 'Semua Mantra', icon: Star },
    { id: 'programming', label: 'Programming Languages', icon: Code },
    { id: 'hard-skills', label: 'Hard Skills', icon: Brain },
    { id: 'tools', label: 'Tools & Frameworks', icon: Wrench },
    { id: 'others', label: 'Others', icon: Settings }
  ]

  const skills = [
    // Programming Languages
    {
      name: "Python",
      category: "programming",
      level: 95,
      icon: Code,
      color: "#3776AB",
      description: "Bahasa utama untuk AI/ML development, data science, dan automation",
      experience: "5+ years",
      projects: ["CNN Arena", "Arutala Aksara", "Data Analysis"]
    },
    {
      name: "SQL",
      category: "programming",
      level: 90,
      icon: Database,
      color: "#336791",
      description: "Database querying, optimization, dan data manipulation",
      experience: "4+ years",
      projects: ["Data Pipeline", "Analytics Dashboard", "ETL Processes"]
    },
    {
      name: "JavaScript",
      category: "programming",
      level: 85,
      icon: Code,
      color: "#F7DF1E",
      description: "Frontend development dan web applications",
      experience: "3+ years",
      projects: ["Portfolio Website", "Interactive Demos", "Web Apps"]
    },
    {
      name: "R",
      category: "programming",
      level: 80,
      icon: BarChart3,
      color: "#276DC3",
      description: "Statistical analysis dan data visualization",
      experience: "3+ years",
      projects: ["Genomic Analysis", "Statistical Modeling", "Research"]
    },

    // Hard Skills
    {
      name: "Computer Vision",
      category: "hard-skills",
      level: 95,
      icon: Eye,
      color: "#FF6B6B",
      description: "Image processing, object detection, dan pattern recognition",
      experience: "4+ years",
      projects: ["Defect Detection", "Aksara Recognition", "Medical Imaging"]
    },
    {
      name: "Natural Language Processing",
      category: "hard-skills",
      level: 88,
      icon: MessageSquare,
      color: "#4ECDC4",
      description: "Text analysis, sentiment analysis, dan language models",
      experience: "3+ years",
      projects: ["Chatbot Development", "Text Classification", "Language Models"]
    },
    {
      name: "Machine Learning",
      category: "hard-skills",
      level: 92,
      icon: Brain,
      color: "#45B7D1",
      description: "Supervised/unsupervised learning, model optimization",
      experience: "4+ years",
      projects: ["Recommendation System", "Predictive Analytics", "AutoML"]
    },
    {
      name: "Deep Learning",
      category: "hard-skills",
      level: 90,
      icon: Cpu,
      color: "#96CEB4",
      description: "Neural networks, CNN, RNN, dan transformer architectures",
      experience: "3+ years",
      projects: ["CNN Arena", "Image Classification", "Sequence Modeling"]
    },

    // Tools & Frameworks
    {
      name: "TensorFlow",
      category: "tools",
      level: 90,
      icon: Brain,
      color: "#FF6F00",
      description: "Deep learning framework untuk production-ready models",
      experience: "3+ years",
      projects: ["CNN Models", "Computer Vision", "Neural Networks"]
    },
    {
      name: "Docker",
      category: "tools",
      level: 85,
      icon: Container,
      color: "#2496ED",
      description: "Containerization untuk deployment dan scalability",
      experience: "2+ years",
      projects: ["Model Deployment", "Microservices", "CI/CD Pipeline"]
    },
    {
      name: "Kubernetes",
      category: "tools",
      level: 80,
      icon: Settings,
      color: "#326CE5",
      description: "Container orchestration dan cluster management",
      experience: "2+ years",
      projects: ["Scalable ML Services", "Production Deployment", "Auto-scaling"]
    },
    {
      name: "Git",
      category: "tools",
      level: 88,
      icon: GitBranch,
      color: "#F05032",
      description: "Version control dan collaborative development",
      experience: "4+ years",
      projects: ["All Projects", "Team Collaboration", "Code Management"]
    },

    // Others
    {
      name: "ETL Pipeline",
      category: "others",
      level: 87,
      icon: Database,
      color: "#8E44AD",
      description: "Data extraction, transformation, dan loading processes",
      experience: "3+ years",
      projects: ["Data Warehousing", "Analytics Pipeline", "Data Integration"]
    },
    {
      name: "MLOps",
      category: "others",
      level: 85,
      icon: Cloud,
      color: "#27AE60",
      description: "ML model lifecycle management dan production deployment",
      experience: "2+ years",
      projects: ["Model Monitoring", "Automated Training", "Production ML"]
    },
    {
      name: "DDoS Protection",
      category: "others",
      level: 82,
      icon: Shield,
      color: "#E74C3C",
      description: "Network security dan distributed denial-of-service mitigation",
      experience: "2+ years",
      projects: ["Security Infrastructure", "Network Protection", "Threat Detection"]
    }
  ]

  const filteredSkills = selectedCategory === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === selectedCategory)

  const getSkillLevelColor = (level) => {
    if (level >= 90) return 'text-green-400'
    if (level >= 80) return 'text-blue-400'
    if (level >= 70) return 'text-yellow-400'
    return 'text-gray-400'
  }

  const getSkillLevelText = (level) => {
    if (level >= 90) return 'Expert'
    if (level >= 80) return 'Advanced'
    if (level >= 70) return 'Intermediate'
    return 'Beginner'
  }

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-cinzel font-bold mb-6 magical-text">
            Perkakas Sihir & Mantra
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 font-inter max-w-4xl mx-auto">
            Arsenal lengkap mantra teknologi dan perkakas sihir yang dikuasai untuk menciptakan solusi AI yang powerful
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {skillCategories.map((category) => {
            const Icon = category.icon
            return (
              <Button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                variant={selectedCategory === category.id ? "default" : "outline"}
                className={`glow-on-hover ${
                  selectedCategory === category.id 
                    ? 'bg-accent text-black' 
                    : 'border-accent text-accent hover:bg-accent hover:text-black'
                }`}
              >
                <Icon className="mr-2 h-4 w-4" />
                {category.label}
              </Button>
            )
          })}
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filteredSkills.map((skill, index) => {
            const Icon = skill.icon
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                layout
              >
                <Card className="magical-card h-full group hover:scale-105 transition-transform duration-300">
                  <CardContent className="p-6">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div 
                          className="w-10 h-10 rounded-lg flex items-center justify-center"
                          style={{ backgroundColor: skill.color + '20' }}
                        >
                          <Icon 
                            className="h-5 w-5" 
                            style={{ color: skill.color }}
                          />
                        </div>
                        <div>
                          <h3 className="text-lg font-cinzel font-semibold text-white">
                            {skill.name}
                          </h3>
                          <div className="flex items-center space-x-2">
                            <span className={`text-sm font-inter ${getSkillLevelColor(skill.level)}`}>
                              {getSkillLevelText(skill.level)}
                            </span>
                            <span className="text-gray-400 text-sm">•</span>
                            <span className="text-gray-400 text-sm font-inter">
                              {skill.experience}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Progress Bar */}
                    <div className="mb-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm text-gray-400 font-inter">Proficiency</span>
                        <span className="text-sm font-inter text-accent font-semibold">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <motion.div
                          className="h-2 rounded-full"
                          style={{ backgroundColor: skill.color }}
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: index * 0.1 }}
                        />
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-300 font-inter text-sm mb-4 leading-relaxed">
                      {skill.description}
                    </p>

                    {/* Projects */}
                    <div>
                      <h4 className="text-xs font-cinzel font-semibold text-accent mb-2">
                        Used in Projects:
                      </h4>
                      <div className="flex flex-wrap gap-1">
                        {skill.projects.map((project, projectIndex) => (
                          <span
                            key={projectIndex}
                            className="px-2 py-1 bg-muted text-muted-foreground rounded text-xs font-inter"
                          >
                            {project}
                          </span>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>

        {/* Skill Summary */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <Card className="magical-card">
            <CardContent className="p-8 md:p-12">
              <h2 className="text-3xl md:text-4xl font-cinzel font-bold text-center mb-12 magical-text">
                Ringkasan Keahlian
              </h2>
              
              <div className="grid md:grid-cols-4 gap-8">
                <div className="text-center">
                  <Code className="h-12 w-12 text-accent mx-auto mb-4" />
                  <div className="text-2xl font-cinzel font-bold text-white mb-2">
                    4+
                  </div>
                  <div className="text-gray-300 font-inter">
                    Programming Languages
                  </div>
                </div>
                
                <div className="text-center">
                  <Brain className="h-12 w-12 text-primary mx-auto mb-4" />
                  <div className="text-2xl font-cinzel font-bold text-white mb-2">
                    10+
                  </div>
                  <div className="text-gray-300 font-inter">
                    AI/ML Specializations
                  </div>
                </div>
                
                <div className="text-center">
                  <Wrench className="h-12 w-12 text-secondary mx-auto mb-4" />
                  <div className="text-2xl font-cinzel font-bold text-white mb-2">
                    15+
                  </div>
                  <div className="text-gray-300 font-inter">
                    Tools & Frameworks
                  </div>
                </div>
                
                <div className="text-center">
                  <Star className="h-12 w-12 text-accent mx-auto mb-4" />
                  <div className="text-2xl font-cinzel font-bold text-white mb-2">
                    5+
                  </div>
                  <div className="text-gray-300 font-inter">
                    Years Experience
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.section>

        {/* Learning Philosophy */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Card className="magical-card">
            <CardContent className="p-8 md:p-12 text-center">
              <Zap className="h-16 w-16 text-accent mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-cinzel font-bold mb-6 magical-text">
                Filosofi Pembelajaran
              </h2>
              <p className="text-lg text-gray-300 font-inter leading-relaxed max-w-4xl mx-auto mb-8">
                "Setiap teknologi baru adalah mantra yang harus dipelajari dengan dedikasi. 
                Dalam dunia AI yang terus berkembang, seorang Data Sorcerer harus selalu 
                siap untuk menguasai perkakas baru dan menyempurnakan mantra yang sudah ada. 
                Pembelajaran adalah kunci untuk tetap relevan dalam sihir teknologi."
              </p>
              <Button 
                size="lg" 
                className="glow-on-hover bg-accent text-black hover:bg-accent/80 font-inter"
              >
                <Brain className="mr-2 h-5 w-5" />
                Explore Learning Path
              </Button>
            </CardContent>
          </Card>
        </motion.section>
      </div>
    </div>
  )
}

export default SkillsPage

