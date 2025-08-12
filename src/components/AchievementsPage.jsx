import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card.jsx'
import { Button } from '@/components/ui/button.jsx'
import { 
  Award, 
  Trophy, 
  Medal, 
  Star,
  ExternalLink,
  Calendar,
  MapPin,
  Users,
  Target,
  Crown,
  Sparkles
} from 'lucide-react'

const AchievementsPage = () => {
  const majorAwards = [
    {
      title: "ERASMUS+ Exchange Scholarship",
      organization: "European Union",
      year: "2023",
      type: "Scholarship",
      description: "Beasiswa bergengsi untuk program pertukaran pelajar di Eropa, mengakui keunggulan akademik dan potensi kepemimpinan dalam bidang teknologi.",
      icon: Crown,
      color: "from-yellow-500 to-orange-600",
      significance: "International Recognition"
    },
    {
      title: "Runner Up International Big Data Ideathon Competition",
      organization: "Global Tech Consortium",
      year: "2021",
      type: "Competition",
      description: "Meraih posisi runner-up dalam kompetisi ideathon big data tingkat internasional dengan solusi inovatif untuk analisis data kesehatan.",
      icon: Trophy,
      color: "from-blue-500 to-purple-600",
      significance: "Global Achievement"
    }
  ]

  const certifications = [
    {
      title: "NVIDIA Deep Learning Institute Certificate",
      issuer: "NVIDIA",
      year: "2023",
      category: "Deep Learning",
      description: "Sertifikasi dalam pengembangan dan implementasi model deep learning menggunakan framework NVIDIA",
      credentialId: "DLI-C-001234",
      skills: ["Deep Learning", "CUDA", "TensorFlow", "PyTorch"]
    },
    {
      title: "RapidMiner Certified Data Scientist",
      issuer: "RapidMiner",
      year: "2023",
      category: "Data Science",
      description: "Sertifikasi komprehensif dalam data science dan machine learning menggunakan platform RapidMiner",
      credentialId: "RM-DS-005678",
      skills: ["Data Mining", "Predictive Analytics", "AutoML", "Data Visualization"]
    },
    {
      title: "Advanced Computer Vision Specialist",
      issuer: "Tech Academy",
      year: "2022",
      category: "Computer Vision",
      description: "Spesialisasi lanjutan dalam computer vision dan image processing untuk aplikasi industri",
      credentialId: "TCA-CV-009876",
      skills: ["OpenCV", "Image Processing", "Object Detection", "Neural Networks"]
    },
    {
      title: "Machine Learning Engineering Professional",
      issuer: "AI Institute",
      year: "2022",
      category: "MLOps",
      description: "Sertifikasi profesional dalam engineering dan deployment model machine learning",
      credentialId: "AII-MLE-543210",
      skills: ["MLOps", "Model Deployment", "Docker", "Kubernetes"]
    },
    {
      title: "Cloud AI Solutions Architect",
      issuer: "Cloud Platform",
      year: "2023",
      category: "Cloud Computing",
      description: "Arsitektur solusi AI di cloud dengan fokus pada skalabilitas dan efisiensi",
      credentialId: "CP-AISA-112233",
      skills: ["Cloud Architecture", "AI Services", "Scalability", "Cost Optimization"]
    }
  ]

  const achievements = [
    { metric: "20+", label: "Proyek Diselesaikan", icon: Target },
    { metric: "5", label: "Penghargaan Internasional", icon: Award },
    { metric: "10+", label: "Sertifikasi Profesional", icon: Medal },
    { metric: "3", label: "Publikasi Penelitian", icon: Star }
  ]

  const getCategoryColor = (category) => {
    switch (category) {
      case 'Deep Learning': return 'bg-purple-500'
      case 'Data Science': return 'bg-blue-500'
      case 'Computer Vision': return 'bg-green-500'
      case 'MLOps': return 'bg-orange-500'
      case 'Cloud Computing': return 'bg-cyan-500'
      default: return 'bg-gray-500'
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
            Pencapaian & Sertifikasi
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 font-inter max-w-4xl mx-auto">
            Koleksi medali dan gelar sihir yang telah diraih dalam perjalanan menguasai seni AI
          </p>
        </motion.div>

        {/* Achievement Stats */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon
              return (
                <motion.div
                  key={achievement.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <Card className="magical-card text-center">
                    <CardContent className="p-6">
                      <Icon className="h-12 w-12 text-accent mx-auto mb-4" />
                      <div className="text-4xl md:text-5xl font-cinzel font-bold text-white mb-2">
                        {achievement.metric}
                      </div>
                      <div className="text-gray-300 font-inter text-sm">
                        {achievement.label}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </motion.section>

        {/* Major Awards */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-cinzel font-bold text-center mb-12 magical-text">
            Penghargaan Utama
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {majorAwards.map((award, index) => {
              const Icon = award.icon
              return (
                <motion.div
                  key={award.title}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <Card className="magical-card h-full overflow-hidden">
                    <div className={`bg-gradient-to-r ${award.color} p-6`}>
                      <div className="flex items-center space-x-4">
                        <Icon className="h-12 w-12 text-white" />
                        <div>
                          <div className="text-white/80 text-sm font-inter">
                            {award.significance}
                          </div>
                          <h3 className="text-xl font-cinzel font-bold text-white">
                            {award.title}
                          </h3>
                        </div>
                      </div>
                    </div>
                    
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-2 text-gray-400">
                          <Calendar className="h-4 w-4" />
                          <span className="font-inter text-sm">{award.year}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-gray-400">
                          <Users className="h-4 w-4" />
                          <span className="font-inter text-sm">{award.type}</span>
                        </div>
                      </div>
                      
                      <p className="text-gray-300 font-inter mb-4 leading-relaxed">
                        {award.description}
                      </p>
                      
                      <div className="text-accent font-inter font-semibold">
                        {award.organization}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </motion.section>

        {/* Certifications */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-cinzel font-bold text-center mb-4 magical-text">
            Buku Mantra & Sertifikasi
          </h2>
          <p className="text-xl text-center text-gray-300 mb-12 font-inter">
            Koleksi sertifikasi profesional yang menandai penguasaan berbagai cabang sihir AI
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="magical-card h-full">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className={`w-3 h-3 rounded-full ${getCategoryColor(cert.category)}`} />
                      <div className="text-gray-400 text-sm font-inter">
                        {cert.year}
                      </div>
                    </div>
                    
                    <h3 className="text-lg font-cinzel font-semibold text-white mb-2">
                      {cert.title}
                    </h3>
                    
                    <div className="text-accent font-inter font-medium mb-3">
                      {cert.issuer}
                    </div>
                    
                    <p className="text-gray-300 font-inter text-sm mb-4 leading-relaxed">
                      {cert.description}
                    </p>
                    
                    <div className="mb-4">
                      <div className="text-xs text-gray-400 font-inter mb-2">
                        Skills Covered:
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {cert.skills.map((skill, skillIndex) => (
                          <span
                            key={skillIndex}
                            className="px-2 py-1 bg-muted text-muted-foreground rounded text-xs font-inter"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between pt-4 border-t border-border">
                      <div className="text-xs text-gray-400 font-inter">
                        ID: {cert.credentialId}
                      </div>
                      <Button 
                        size="sm" 
                        variant="outline"
                        className="border-accent text-accent hover:bg-accent hover:text-black"
                      >
                        <ExternalLink className="h-3 w-3 mr-1" />
                        Verify
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Call to Action */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <Card className="magical-card">
            <CardContent className="p-8 md:p-12 text-center">
              <Sparkles className="h-16 w-16 text-accent mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-cinzel font-bold mb-6 magical-text">
                Perjalanan Masih Berlanjut
              </h2>
              <p className="text-lg text-gray-300 font-inter leading-relaxed max-w-4xl mx-auto mb-8">
                Setiap pencapaian adalah langkah menuju penguasaan sihir AI yang lebih tinggi. 
                Dengan dedikasi untuk terus belajar dan berinovasi, perjalanan ini akan terus 
                menghasilkan prestasi-prestasi baru yang membanggakan.
              </p>
              <Button 
                size="lg" 
                className="glow-on-hover bg-accent text-black hover:bg-accent/80 font-inter"
              >
                <Trophy className="mr-2 h-5 w-5" />
                Lihat Proyek Terbaru
              </Button>
            </CardContent>
          </Card>
        </motion.section>
      </div>
    </div>
  )
}

export default AchievementsPage

