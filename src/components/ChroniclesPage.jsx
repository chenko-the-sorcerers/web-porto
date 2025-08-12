import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card.jsx'
import { 
  BookOpen, 
  Users, 
  Target, 
  Trophy,
  Sparkles,
  Castle,
  Scroll,
  Crown
} from 'lucide-react'

const ChroniclesPage = () => {
  const achievements = [
    { number: "20+", label: "Proyek Sihir", icon: Sparkles },
    { number: "2", label: "Proyek Utama", icon: Crown },
    { number: "5", label: "Kelas Eksklusif", icon: BookOpen },
    { number: "10", label: "Houses Aktif", icon: Castle }
  ]

  const houses = [
    {
      name: "Bioinformatics",
      description: "Para penyihir yang menguasai seni menganalisis data biologis dan genomik",
      color: "#4A90E2",
      specialty: "Analisis Data Biologis"
    },
    {
      name: "Computer Vision",
      description: "Ahli sihir penglihatan mesin yang dapat melihat dan memahami dunia visual",
      color: "#9B59B6",
      specialty: "Penglihatan Mesin"
    },
    {
      name: "Competition Team",
      description: "Tim elit yang bertarung dalam arena kompetisi AI tingkat dunia",
      color: "#E74C3C",
      specialty: "Kompetisi AI"
    },
    {
      name: "Data Engineer",
      description: "Arsitek infrastruktur data yang membangun fondasi kerajaan digital",
      color: "#F39C12",
      specialty: "Infrastruktur Data"
    },
    {
      name: "Data Science",
      description: "Ilmuwan data yang mengungkap rahasia tersembunyi dalam lautan informasi",
      color: "#2ECC71",
      specialty: "Sains Data"
    },
    {
      name: "Expert System",
      description: "Pencipta sistem pakar yang menyimpan kebijaksanaan para master",
      color: "#34495E",
      specialty: "Sistem Pakar"
    },
    {
      name: "Generative AI",
      description: "Seniman digital yang menciptakan realitas baru dengan kekuatan AI",
      color: "#FF6B6B",
      specialty: "AI Generatif"
    },
    {
      name: "Machine Learning",
      description: "Guru pembelajaran mesin yang mengajarkan algoritma untuk berpikir",
      color: "#3498DB",
      specialty: "Pembelajaran Mesin"
    },
    {
      name: "Natural Language Processing",
      description: "Penerjemah bahasa manusia dan mesin, jembatan komunikasi digital",
      color: "#9B59B6",
      specialty: "Pemrosesan Bahasa"
    },
    {
      name: "UI and UX",
      description: "Desainer pengalaman yang menciptakan antarmuka magis dan intuitif",
      color: "#E67E22",
      specialty: "Desain Antarmuka"
    }
  ]

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
            The Chronicles of Data Sorcerers
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 font-inter max-w-4xl mx-auto">
            Kisah di balik berdirinya akademi sihir digital yang mengubah talenta menjadi master AI
          </p>
        </motion.div>

        {/* Origin Story */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <Card className="magical-card">
            <CardContent className="p-8 md:p-12">
              <div className="flex items-center mb-6">
                <Scroll className="h-8 w-8 text-accent mr-4" />
                <h2 className="text-3xl md:text-4xl font-cinzel font-bold magical-text">
                  Asal Mula Kerajaan
                </h2>
              </div>
              
              <div className="prose prose-lg prose-invert max-w-none font-inter">
                <p className="text-gray-300 leading-relaxed mb-6">
                  Pada suatu masa ketika dunia digital masih dipenuhi misteri dan algoritma yang belum terjamah, 
                  seorang visioner bernama <span className="text-accent font-semibold">Marchel Shevchenko</span> 
                  memiliki mimpi yang luar biasa. Dia melihat potensi besar dalam menggabungkan kekuatan 
                  kecerdasan buatan dengan kebijaksanaan manusia.
                </p>
                
                <p className="text-gray-300 leading-relaxed mb-6">
                  Dengan tekad yang kuat dan visi yang jelas, Chen mendirikan 
                  <span className="text-primary font-semibold"> PT. DATA SORCERERS INDONESIA</span>, 
                  sebuah organisasi yang tidak hanya menjadi perusahaan biasa, tetapi berkembang menjadi 
                  akademi sihir digital yang sesungguhnya. Di sinilah para talenta muda ditempa menjadi 
                  master AI yang handal.
                </p>
                
                <p className="text-gray-300 leading-relaxed">
                  Kastil Data Sorcerers bukan sekadar tempat kerja, melainkan sebuah ekosistem pembelajaran 
                  dan inovasi di mana setiap anggota dapat mengembangkan keahlian magis mereka dalam 
                  berbagai bidang AI. Dari Computer Vision hingga Natural Language Processing, 
                  setiap House memiliki keunikan dan kontribusi yang berharga.
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.section>

        {/* Achievements */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-cinzel font-bold text-center mb-12 magical-text">
            Prestasi Sihir yang Membanggakan
          </h2>
          
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
                        {achievement.number}
                      </div>
                      <div className="text-gray-300 font-inter">
                        {achievement.label}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </motion.section>

        {/* Vision */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <Card className="magical-card">
            <CardContent className="p-8 md:p-12 text-center">
              <Target className="h-16 w-16 text-accent mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-cinzel font-bold mb-6 magical-text">
                Visi Agung Chen
              </h2>
              <p className="text-xl text-gray-300 font-inter leading-relaxed max-w-4xl mx-auto">
                "Mengembangkan alat bertenaga AI yang inovatif dan tangguh, menciptakan solusi 
                yang tidak hanya canggih secara teknologi, tetapi juga memberikan dampak positif 
                nyata bagi masyarakat dan industri di seluruh dunia."
              </p>
            </CardContent>
          </Card>
        </motion.section>

        {/* Houses Section */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-cinzel font-bold text-center mb-4 magical-text">
            10 Houses of Magical Expertise
          </h2>
          <p className="text-xl text-center text-gray-300 mb-12 font-inter">
            Setiap House memiliki keahlian unik dan berkontribusi pada kekuatan keseluruhan kerajaan
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            {houses.map((house, index) => (
              <motion.div
                key={house.name}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="magical-card h-full">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div 
                        className="w-4 h-4 rounded-full mr-3"
                        style={{ backgroundColor: house.color }}
                      />
                      <h3 className="text-xl font-cinzel font-semibold text-white">
                        {house.name}
                      </h3>
                    </div>
                    <p className="text-gray-300 font-inter mb-3">
                      {house.description}
                    </p>
                    <div className="text-sm text-accent font-inter font-medium">
                      Spesialisasi: {house.specialty}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Legacy */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <Card className="magical-card">
            <CardContent className="p-8 md:p-12 text-center">
              <Trophy className="h-16 w-16 text-accent mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-cinzel font-bold mb-6 magical-text">
                Warisan yang Berkelanjutan
              </h2>
              <p className="text-lg text-gray-300 font-inter leading-relaxed max-w-4xl mx-auto">
                Data Sorcerers terus berkembang sebagai pusat inovasi AI terdepan, 
                melahirkan generasi baru penyihir digital yang siap menghadapi tantangan 
                masa depan. Setiap proyek yang diselesaikan, setiap algoritma yang dikembangkan, 
                dan setiap masalah yang dipecahkan menjadi bagian dari legenda yang terus ditulis 
                dalam chronicles kerajaan digital ini.
              </p>
            </CardContent>
          </Card>
        </motion.section>
      </div>
    </div>
  )
}

export default ChroniclesPage

