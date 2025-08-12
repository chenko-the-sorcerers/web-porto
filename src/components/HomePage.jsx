import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent } from '@/components/ui/card.jsx'
import { 
  Brain, 
  Eye, 
  Shield, 
  ArrowRight, 
  Sparkles,
  Code,
  Database,
  Cpu
} from 'lucide-react'
import chenPortrait from '../assets/chen-portrait.png'

const HomePage = () => {
  const expertiseAreas = [
    {
      icon: Brain,
      title: "AI untuk Healthcare",
      description: "Mengembangkan solusi AI untuk diagnosis medis dan analisis genomik",
      color: "text-blue-400"
    },
    {
      icon: Eye,
      title: "AI untuk Manufacturing",
      description: "Sistem deteksi cacat otomatis dan optimasi proses produksi",
      color: "text-purple-400"
    },
    {
      icon: Shield,
      title: "System Security",
      description: "Implementasi keamanan sistem dan deteksi ancaman berbasis AI",
      color: "text-cyan-400"
    }
  ]

  const houses = [
    { name: "Bioinformatics", color: "#4A90E2", specialty: "Analisis Data Biologis" },
    { name: "Computer Vision", color: "#9B59B6", specialty: "Penglihatan Mesin" },
    { name: "Competition Team", color: "#E74C3C", specialty: "Kompetisi AI" },
    { name: "Data Engineer", color: "#F39C12", specialty: "Infrastruktur Data" },
    { name: "Data Science", color: "#2ECC71", specialty: "Sains Data" },
    { name: "Expert System", color: "#34495E", specialty: "Sistem Pakar" },
    { name: "Generative AI", color: "#FF6B6B", specialty: "AI Generatif" },
    { name: "Machine Learning", color: "#3498DB", specialty: "Pembelajaran Mesin" },
    { name: "Natural Language Processing", color: "#9B59B6", specialty: "Pemrosesan Bahasa" },
    { name: "UI and UX", color: "#E67E22", specialty: "Desain Antarmuka" }
  ]

  return (
    <div className="castle-bg min-h-screen relative">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4">
        <div className="absolute inset-0 bg-black/40" />
        
        <div className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center md:text-left"
          >
            <motion.h1 
              className="text-5xl md:text-7xl font-cinzel font-bold mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <span className="magical-text">Selamat Datang</span>
              <br />
              <span className="text-white">di Kastil</span>
              <br />
              <span className="magical-text">Data Sorcerers</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-gray-300 mb-8 font-inter"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Dipimpin oleh <span className="text-accent font-semibold">Marchel Shevchenko (Chen)</span>
              <br />
              <span className="magical-text">Grand Sorcerer of Data & AI</span>
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button 
                size="lg" 
                className="glow-on-hover bg-primary hover:bg-primary/80 text-white font-inter"
              >
                <Sparkles className="mr-2 h-5 w-5" />
                Jelajahi Kastil
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="glow-on-hover border-accent text-accent hover:bg-accent hover:text-black font-inter"
              >
                <Code className="mr-2 h-5 w-5" />
                Lihat Mantra AI
              </Button>
            </motion.div>
          </motion.div>
          
          {/* Portrait */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex justify-center"
          >
            <div className="relative">
              <motion.img
                src={chenPortrait}
                alt="Marchel Shevchenko - Data Sorcerer"
                className="w-80 h-80 md:w-96 md:h-96 object-cover rounded-full border-4 border-accent shadow-2xl floating"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              />
              <motion.div
                className="absolute -inset-4 rounded-full border-2 border-primary/50"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Expertise Areas */}
      <section className="py-20 px-4 bg-black/60">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-4xl md:text-5xl font-cinzel font-bold text-center mb-16 magical-text"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Keahlian Sihir AI
          </motion.h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {expertiseAreas.map((area, index) => {
              const Icon = area.icon
              return (
                <motion.div
                  key={area.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <Card className="magical-card h-full">
                    <CardContent className="p-6 text-center">
                      <Icon className={`h-16 w-16 mx-auto mb-4 ${area.color}`} />
                      <h3 className="text-xl font-cinzel font-semibold mb-3 text-white">
                        {area.title}
                      </h3>
                      <p className="text-gray-300 font-inter">
                        {area.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Houses Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-4xl md:text-5xl font-cinzel font-bold text-center mb-4 magical-text"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            10 Houses of Data Sorcerers
          </motion.h2>
          
          <motion.p 
            className="text-xl text-center text-gray-300 mb-16 font-inter"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Setiap House memiliki keahlian magis yang unik dalam dunia AI
          </motion.p>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {houses.map((house, index) => (
              <motion.div
                key={house.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="group cursor-pointer"
              >
                <Card className="magical-card text-center h-full">
                  <CardContent className="p-4">
                    <div 
                      className="w-12 h-12 rounded-full mx-auto mb-3 flex items-center justify-center"
                      style={{ backgroundColor: house.color }}
                    >
                      <Database className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="font-cinzel font-semibold text-sm mb-2 text-white group-hover:text-accent transition-colors">
                      {house.name}
                    </h3>
                    <p className="text-xs text-gray-400 font-inter">
                      {house.specialty}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 bg-gradient-to-t from-black/80 to-transparent">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            className="text-4xl md:text-5xl font-cinzel font-bold mb-8 magical-text"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Siap Menjelajahi Dunia Sihir AI?
          </motion.h2>
          
          <motion.p 
            className="text-xl text-gray-300 mb-12 font-inter"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Temukan mantra-mantra AI yang telah diciptakan dan bergabunglah dalam petualangan teknologi yang menakjubkan
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button 
              size="lg" 
              className="glow-on-hover bg-accent text-black hover:bg-accent/80 font-inter"
            >
              <ArrowRight className="mr-2 h-5 w-5" />
              Mulai Petualangan
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="glow-on-hover border-primary text-primary hover:bg-primary hover:text-white font-inter"
            >
              <Cpu className="mr-2 h-5 w-5" />
              Lihat Proyek
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default HomePage

