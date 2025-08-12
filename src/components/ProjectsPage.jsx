import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent } from '@/components/ui/card.jsx'
import { 
  Filter, 
  ExternalLink, 
  Github, 
  Award,
  Cpu,
  Heart,
  Factory,
  Dna,
  Wind,
  Eye,
  Brain,
  Database,
  BarChart3
} from 'lucide-react'

const ProjectsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const categories = [
    { id: 'all', label: 'Semua Gulungan', icon: Filter },
    { id: 'healthcare', label: 'Healthcare', icon: Heart },
    { id: 'manufacturing', label: 'Manufacturing', icon: Factory },
    { id: 'genomics', label: 'Genomics', icon: Dna },
    { id: 'optimization', label: 'Optimization', icon: BarChart3 }
  ]

  const projects = [
    {
      id: 1,
      title: "Deteksi Cacat Kemasan Aluminium",
      subtitle: "PT. Kalbe Farma",
      category: "manufacturing",
      description: "Sistem otomasi deteksi cacat pada kemasan aluminium menggunakan Computer Vision untuk meningkatkan quality control di lini produksi farmasi.",
      technologies: ["Computer Vision", "Deep Learning", "OpenCV", "TensorFlow", "Python"],
      results: [
        "Akurasi deteksi 98.5%",
        "Mengurangi cacat produk 85%",
        "Efisiensi inspeksi meningkat 300%"
      ],
      status: "Completed",
      icon: Eye,
      color: "from-blue-500 to-purple-600",
      year: "2023"
    },
    {
      id: 2,
      title: "Sistem Rekomendasi Gaya Hidup Sehat",
      subtitle: "Turnamen Nasional",
      category: "healthcare",
      description: "Platform AI yang memberikan rekomendasi personal untuk gaya hidup sehat berdasarkan data kesehatan, aktivitas, dan preferensi pengguna.",
      technologies: ["Machine Learning", "Recommendation System", "Flask", "React", "MongoDB"],
      results: [
        "Juara dalam turnamen nasional",
        "10,000+ pengguna aktif",
        "Rating kepuasan 4.8/5"
      ],
      status: "Live",
      icon: Heart,
      color: "from-green-500 to-teal-600",
      year: "2023"
    },
    {
      id: 3,
      title: "Analisis Data Genomik NutrigenMe",
      subtitle: "Solusi Kesehatan Personal",
      category: "genomics",
      description: "Platform analisis genomik untuk memberikan rekomendasi nutrisi dan kesehatan yang dipersonalisasi berdasarkan profil genetik individu.",
      technologies: ["Bioinformatics", "Python", "R", "Genomic Analysis", "Machine Learning"],
      results: [
        "Analisis 50+ marker genetik",
        "Rekomendasi nutrisi personal",
        "Integrasi dengan lab partner"
      ],
      status: "In Development",
      icon: Dna,
      color: "from-purple-500 to-pink-600",
      year: "2024"
    },
    {
      id: 4,
      title: "Optimasi Energi Spray Dryer",
      subtitle: "CFD & Machine Learning",
      category: "optimization",
      description: "Strategi optimasi energi untuk mesin spray dryer menggunakan Computational Fluid Dynamics dan Machine Learning untuk efisiensi maksimal.",
      technologies: ["CFD", "Machine Learning", "ANSYS Fluent", "Python", "Optimization"],
      results: [
        "Penghematan energi 25%",
        "Optimasi parameter operasi",
        "Model prediktif akurat"
      ],
      status: "Research",
      icon: Wind,
      color: "from-orange-500 to-red-600",
      year: "2024"
    }
  ]

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory)

  const getStatusColor = (status) => {
    switch (status) {
      case 'Completed': return 'text-green-400'
      case 'Live': return 'text-blue-400'
      case 'In Development': return 'text-yellow-400'
      case 'Research': return 'text-purple-400'
      default: return 'text-gray-400'
    }
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
            Gulungan Proyek Ajaib
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 font-inter max-w-4xl mx-auto">
            Koleksi mantra-mantra AI yang telah diciptakan untuk memecahkan berbagai tantangan dunia nyata
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => {
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

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => {
            const Icon = project.icon
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                layout
              >
                <Card className="magical-card h-full group hover:scale-105 transition-transform duration-300">
                  <CardContent className="p-0">
                    {/* Header with gradient */}
                    <div className={`bg-gradient-to-r ${project.color} p-6 rounded-t-lg`}>
                      <div className="flex items-start justify-between">
                        <div className="flex items-center space-x-3">
                          <Icon className="h-8 w-8 text-white" />
                          <div>
                            <h3 className="text-xl font-cinzel font-bold text-white">
                              {project.title}
                            </h3>
                            <p className="text-white/80 font-inter">
                              {project.subtitle}
                            </p>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className={`text-sm font-inter font-semibold ${getStatusColor(project.status)}`}>
                            {project.status}
                          </div>
                          <div className="text-white/60 text-sm font-inter">
                            {project.year}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 space-y-6">
                      {/* Description */}
                      <p className="text-gray-300 font-inter leading-relaxed">
                        {project.description}
                      </p>

                      {/* Technologies */}
                      <div>
                        <h4 className="text-sm font-cinzel font-semibold text-accent mb-3">
                          Teknologi Sihir:
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-xs font-inter"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Results */}
                      <div>
                        <h4 className="text-sm font-cinzel font-semibold text-accent mb-3">
                          Hasil Pencapaian:
                        </h4>
                        <ul className="space-y-2">
                          {project.results.map((result, resultIndex) => (
                            <li key={resultIndex} className="flex items-center text-sm font-inter text-gray-300">
                              <Award className="h-4 w-4 text-accent mr-2 flex-shrink-0" />
                              {result}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Actions */}
                      <div className="flex gap-3 pt-4 border-t border-border">
                        <Button 
                          size="sm" 
                          className="flex-1 glow-on-hover bg-primary hover:bg-primary/80"
                        >
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Detail
                        </Button>
                        <Button 
                          size="sm" 
                          variant="outline"
                          className="border-accent text-accent hover:bg-accent hover:text-black"
                        >
                          <Github className="mr-2 h-4 w-4" />
                          Code
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>

        {/* Stats Section */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <Card className="magical-card">
            <CardContent className="p-8 md:p-12">
              <h2 className="text-3xl md:text-4xl font-cinzel font-bold text-center mb-12 magical-text">
                Statistik Keseluruhan Proyek
              </h2>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-cinzel font-bold text-accent mb-2">
                    20+
                  </div>
                  <div className="text-gray-300 font-inter">
                    Total Proyek
                  </div>
                </div>
                
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-cinzel font-bold text-primary mb-2">
                    95%
                  </div>
                  <div className="text-gray-300 font-inter">
                    Success Rate
                  </div>
                </div>
                
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-cinzel font-bold text-secondary mb-2">
                    15+
                  </div>
                  <div className="text-gray-300 font-inter">
                    Teknologi
                  </div>
                </div>
                
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-cinzel font-bold text-accent mb-2">
                    5
                  </div>
                  <div className="text-gray-300 font-inter">
                    Industri
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.section>

        {/* Call to Action */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-cinzel font-bold mb-6 magical-text">
            Tertarik dengan Proyek Tertentu?
          </h2>
          <p className="text-xl text-gray-300 mb-8 font-inter">
            Hubungi kami untuk diskusi lebih lanjut atau kolaborasi proyek
          </p>
          <Button 
            size="lg" 
            className="glow-on-hover bg-accent text-black hover:bg-accent/80 font-inter"
          >
            <Brain className="mr-2 h-5 w-5" />
            Diskusi Proyek
          </Button>
        </motion.section>
      </div>
    </div>
  )
}

export default ProjectsPage

