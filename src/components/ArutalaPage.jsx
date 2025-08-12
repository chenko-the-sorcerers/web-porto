import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent } from '@/components/ui/card.jsx'
import { 
  Upload, 
  Eye, 
  Cpu, 
  BookOpen, 
  Sparkles,
  Image as ImageIcon,
  Download,
  Play,
  Pause,
  RotateCcw
} from 'lucide-react'

const ArutalaPage = () => {
  const [uploadedImage, setUploadedImage] = useState(null)
  const [isProcessing, setIsProcessing] = useState(false)
  const [result, setResult] = useState(null)

  const handleImageUpload = (event) => {
    const file = event.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        setUploadedImage(e.target.result)
        setResult(null)
      }
      reader.readAsDataURL(file)
    }
  }

  const processImage = () => {
    setIsProcessing(true)
    // Simulate AI processing
    setTimeout(() => {
      setResult({
        character: "ꦲ",
        name: "Ha",
        confidence: 94.7,
        meaning: "Huruf Jawa yang melambangkan kehidupan dan nafas",
        origin: "Aksara Jawa Kuno",
        culturalNote: "Aksara ini sering digunakan sebagai pembuka dalam penulisan tradisional Jawa"
      })
      setIsProcessing(false)
    }, 3000)
  }

  const resetDemo = () => {
    setUploadedImage(null)
    setResult(null)
    setIsProcessing(false)
  }

  const features = [
    {
      icon: Eye,
      title: "Computer Vision",
      description: "Teknologi penglihatan mesin canggih untuk mengenali bentuk dan pola aksara"
    },
    {
      icon: Cpu,
      title: "Deep Learning",
      description: "Neural network yang dilatih dengan ribuan sampel aksara Nusantara"
    },
    {
      icon: BookOpen,
      title: "Cultural Preservation",
      description: "Melestarikan warisan budaya melalui digitalisasi dan dokumentasi"
    }
  ]

  const supportedScripts = [
    { name: "Aksara Jawa", example: "ꦲꦏ꧀ꦱꦫ", region: "Jawa Tengah & Timur" },
    { name: "Aksara Sunda", example: "ᮃᮊ᮪ᮞᮛ", region: "Jawa Barat" },
    { name: "Aksara Batak", example: "ᯀᯂ᯦ᯘᯒᯖ᯲", region: "Sumatera Utara" },
    { name: "Aksara Bali", example: "ᬅᬓ᭄ᬱᬭ", region: "Bali" },
    { name: "Aksara Bugis", example: "ᨕᨘᨁᨗ", region: "Sulawesi Selatan" },
    { name: "Aksara Rejang", example: "ꤰꤶꤾ꥓", region: "Bengkulu" }
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
            Mantra Arutala Aksara
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 font-inter max-w-4xl mx-auto">
            Mantra kuno yang dihidupkan kembali dengan sihir modern untuk melestarikan Aksara Nusantara
          </p>
        </motion.div>

        {/* Project Description */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <Card className="magical-card">
            <CardContent className="p-8 md:p-12">
              <div className="flex items-center mb-6">
                <Sparkles className="h-8 w-8 text-accent mr-4" />
                <h2 className="text-3xl md:text-4xl font-cinzel font-bold magical-text">
                  Tentang Mantra Ini
                </h2>
              </div>
              
              <p className="text-lg text-gray-300 font-inter leading-relaxed mb-6">
                Mantra Arutala Aksara adalah sebuah proyek revolusioner yang menggabungkan kekuatan 
                <span className="text-primary font-semibold"> Computer Vision</span> dengan 
                <span className="text-accent font-semibold"> kearifan budaya Nusantara</span>. 
                Proyek ini bertujuan untuk melestarikan dan mendigitalkan aksara-aksara tradisional 
                Indonesia yang mulai terlupakan oleh generasi modern.
              </p>
              
              <p className="text-lg text-gray-300 font-inter leading-relaxed">
                Dengan menggunakan teknologi AI terdepan, sistem ini dapat mengenali, menganalisis, 
                dan memberikan informasi mendalam tentang berbagai jenis aksara Nusantara, 
                mulai dari Aksara Jawa, Sunda, Batak, hingga Bugis. Setiap karakter yang dikenali 
                tidak hanya diterjemahkan, tetapi juga dijelaskan makna budaya dan sejarahnya.
              </p>
            </CardContent>
          </Card>
        </motion.section>

        {/* Features */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-cinzel font-bold text-center mb-12 magical-text">
            Komponen Sihir
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <Card className="magical-card h-full text-center">
                    <CardContent className="p-6">
                      <Icon className="h-16 w-16 mx-auto mb-4 text-accent" />
                      <h3 className="text-xl font-cinzel font-semibold mb-3 text-white">
                        {feature.title}
                      </h3>
                      <p className="text-gray-300 font-inter">
                        {feature.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </motion.section>

        {/* Interactive Demo */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <Card className="magical-card">
            <CardContent className="p-8">
              <h2 className="text-3xl font-cinzel font-bold text-center mb-8 magical-text">
                Demo Interaktif Mantra
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                {/* Upload Section */}
                <div className="space-y-6">
                  <div className="border-2 border-dashed border-accent/50 rounded-lg p-8 text-center hover:border-accent transition-colors">
                    {!uploadedImage ? (
                      <div>
                        <Upload className="h-16 w-16 mx-auto mb-4 text-accent" />
                        <p className="text-lg font-inter text-gray-300 mb-4">
                          Unggah gambar aksara Nusantara
                        </p>
                        <input
                          type="file"
                          accept="image/*"
                          onChange={handleImageUpload}
                          className="hidden"
                          id="image-upload"
                        />
                        <label htmlFor="image-upload">
                          <Button className="glow-on-hover bg-accent text-black hover:bg-accent/80">
                            <ImageIcon className="mr-2 h-5 w-5" />
                            Pilih Gambar
                          </Button>
                        </label>
                      </div>
                    ) : (
                      <div>
                        <img
                          src={uploadedImage}
                          alt="Uploaded aksara"
                          className="max-w-full h-48 object-contain mx-auto mb-4 rounded-lg"
                        />
                        <div className="flex gap-2 justify-center">
                          <Button
                            onClick={processImage}
                            disabled={isProcessing}
                            className="glow-on-hover bg-primary hover:bg-primary/80"
                          >
                            {isProcessing ? (
                              <>
                                <Pause className="mr-2 h-5 w-5 animate-spin" />
                                Memproses...
                              </>
                            ) : (
                              <>
                                <Play className="mr-2 h-5 w-5" />
                                Jalankan Mantra
                              </>
                            )}
                          </Button>
                          <Button
                            onClick={resetDemo}
                            variant="outline"
                            className="border-accent text-accent hover:bg-accent hover:text-black"
                          >
                            <RotateCcw className="mr-2 h-5 w-5" />
                            Reset
                          </Button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Result Section */}
                <div className="space-y-6">
                  {isProcessing && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="text-center"
                    >
                      <div className="animate-spin h-16 w-16 border-4 border-accent border-t-transparent rounded-full mx-auto mb-4" />
                      <p className="text-lg font-inter text-accent">
                        Mantra sedang bekerja...
                      </p>
                    </motion.div>
                  )}

                  {result && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5 }}
                      className="space-y-4"
                    >
                      <Card className="magical-card">
                        <CardContent className="p-6">
                          <div className="text-center mb-4">
                            <div className="text-6xl mb-2">{result.character}</div>
                            <h3 className="text-2xl font-cinzel font-bold text-accent">
                              {result.name}
                            </h3>
                          </div>
                          
                          <div className="space-y-3">
                            <div className="flex justify-between">
                              <span className="font-inter text-gray-300">Confidence:</span>
                              <span className="font-inter text-accent font-semibold">
                                {result.confidence}%
                              </span>
                            </div>
                            
                            <div>
                              <span className="font-inter text-gray-300">Asal:</span>
                              <p className="font-inter text-white">{result.origin}</p>
                            </div>
                            
                            <div>
                              <span className="font-inter text-gray-300">Makna:</span>
                              <p className="font-inter text-white">{result.meaning}</p>
                            </div>
                            
                            <div>
                              <span className="font-inter text-gray-300">Catatan Budaya:</span>
                              <p className="font-inter text-white">{result.culturalNote}</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  )}

                  {!uploadedImage && !isProcessing && !result && (
                    <div className="text-center text-gray-400 font-inter">
                      <BookOpen className="h-16 w-16 mx-auto mb-4" />
                      <p>Hasil analisis akan muncul di sini</p>
                    </div>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.section>

        {/* Supported Scripts */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-cinzel font-bold text-center mb-12 magical-text">
            Aksara yang Didukung
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {supportedScripts.map((script, index) => (
              <motion.div
                key={script.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="magical-card h-full">
                  <CardContent className="p-6 text-center">
                    <div className="text-4xl mb-4">{script.example}</div>
                    <h3 className="text-lg font-cinzel font-semibold text-white mb-2">
                      {script.name}
                    </h3>
                    <p className="text-sm text-gray-400 font-inter">
                      {script.region}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  )
}

export default ArutalaPage

