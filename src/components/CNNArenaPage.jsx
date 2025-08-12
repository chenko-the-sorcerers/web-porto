import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent } from '@/components/ui/card.jsx'
import { 
  Upload, 
  Play, 
  Pause, 
  RotateCcw, 
  Eye, 
  Layers,
  Zap,
  Target,
  Award,
  Info,
  ChevronRight,
  Image as ImageIcon
} from 'lucide-react'

const CNNArenaPage = () => {
  const [uploadedImage, setUploadedImage] = useState(null)
  const [currentStep, setCurrentStep] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [gameScore, setGameScore] = useState(0)
  const [completedSteps, setCompletedSteps] = useState([])
  const fileInputRef = useRef(null)

  const cnnLayers = [
    {
      name: "Input Layer",
      description: "Gambar asli yang akan diproses oleh jaringan neural",
      color: "#4A90E2",
      icon: ImageIcon,
      explanation: "Layer input menerima gambar dalam bentuk matriks pixel dengan nilai RGB.",
      visualization: "Original image with pixel values"
    },
    {
      name: "Convolution Layer",
      description: "Mendeteksi fitur-fitur seperti garis, sudut, dan pola",
      color: "#9B59B6",
      icon: Layers,
      explanation: "Filter konvolusi bergerak melintasi gambar untuk mendeteksi fitur lokal.",
      visualization: "Feature maps showing detected edges and patterns"
    },
    {
      name: "ReLU Activation",
      description: "Menambahkan non-linearitas dengan menghilangkan nilai negatif",
      color: "#E74C3C",
      icon: Zap,
      explanation: "Fungsi ReLU mengubah semua nilai negatif menjadi nol, mempertahankan yang positif.",
      visualization: "Activated feature maps with enhanced positive features"
    },
    {
      name: "Pooling Layer",
      description: "Mengurangi ukuran data sambil mempertahankan informasi penting",
      color: "#F39C12",
      icon: Target,
      explanation: "Max pooling mengambil nilai maksimum dari setiap region untuk mengurangi dimensi.",
      visualization: "Downsampled feature maps with reduced dimensions"
    },
    {
      name: "Fully Connected",
      description: "Menggabungkan semua fitur untuk klasifikasi final",
      color: "#2ECC71",
      icon: Eye,
      explanation: "Layer ini menghubungkan semua neuron untuk membuat prediksi akhir.",
      visualization: "Final classification probabilities"
    }
  ]

  const achievements = [
    { name: "First Steps", description: "Menyelesaikan tutorial pertama", points: 100 },
    { name: "Layer Master", description: "Memahami semua layer CNN", points: 250 },
    { name: "Feature Detective", description: "Berhasil mengidentifikasi fitur", points: 150 },
    { name: "Neural Architect", description: "Menyelesaikan semua latihan", points: 500 }
  ]

  const handleImageUpload = (event) => {
    const file = event.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        setUploadedImage(e.target.result)
        setCurrentStep(0)
        setCompletedSteps([])
      }
      reader.readAsDataURL(file)
    }
  }

  const startVisualization = () => {
    if (!uploadedImage) return
    
    setIsPlaying(true)
    setCurrentStep(0)
    
    const interval = setInterval(() => {
      setCurrentStep(prev => {
        if (prev >= cnnLayers.length - 1) {
          setIsPlaying(false)
          setGameScore(prev => prev + 50)
          setCompletedSteps(prev => [...prev, prev])
          clearInterval(interval)
          return prev
        }
        return prev + 1
      })
    }, 2000)
  }

  const resetArena = () => {
    setUploadedImage(null)
    setCurrentStep(0)
    setIsPlaying(false)
    setCompletedSteps([])
    if (fileInputRef.current) {
      fileInputRef.current.value = ''
    }
  }

  const nextStep = () => {
    if (currentStep < cnnLayers.length - 1) {
      setCurrentStep(prev => prev + 1)
      setCompletedSteps(prev => [...prev, currentStep])
      setGameScore(prev => prev + 25)
    }
  }

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1)
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
            Arena Latihan CNN
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 font-inter max-w-4xl mx-auto">
            Arena interaktif untuk memahami cara kerja Convolutional Neural Network secara visual
          </p>
        </motion.div>

        {/* Game Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center mb-8"
        >
          <Card className="magical-card">
            <CardContent className="p-4 flex items-center space-x-6">
              <div className="text-center">
                <div className="text-2xl font-cinzel font-bold text-accent">{gameScore}</div>
                <div className="text-sm text-gray-400 font-inter">Score</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-cinzel font-bold text-primary">{completedSteps.length}</div>
                <div className="text-sm text-gray-400 font-inter">Completed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-cinzel font-bold text-secondary">{cnnLayers.length}</div>
                <div className="text-sm text-gray-400 font-inter">Total Layers</div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Main Arena */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Upload & Control Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-6"
          >
            <Card className="magical-card">
              <CardContent className="p-6">
                <h3 className="text-xl font-cinzel font-bold mb-4 magical-text">
                  Upload Gambar
                </h3>
                
                <div className="border-2 border-dashed border-accent/50 rounded-lg p-6 text-center hover:border-accent transition-colors mb-4">
                  {!uploadedImage ? (
                    <div>
                      <Upload className="h-12 w-12 mx-auto mb-3 text-accent" />
                      <p className="text-gray-300 font-inter mb-3">
                        Pilih gambar untuk dianalisis
                      </p>
                      <input
                        ref={fileInputRef}
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                        className="hidden"
                        id="arena-image-upload"
                      />
                      <label htmlFor="arena-image-upload">
                        <Button className="glow-on-hover bg-accent text-black hover:bg-accent/80">
                          <ImageIcon className="mr-2 h-4 w-4" />
                          Pilih Gambar
                        </Button>
                      </label>
                    </div>
                  ) : (
                    <div>
                      <img
                        src={uploadedImage}
                        alt="Uploaded for CNN analysis"
                        className="max-w-full h-32 object-contain mx-auto mb-3 rounded"
                      />
                      <p className="text-sm text-gray-400 font-inter">
                        Gambar siap untuk dianalisis
                      </p>
                    </div>
                  )}
                </div>

                <div className="flex gap-2">
                  <Button
                    onClick={startVisualization}
                    disabled={!uploadedImage || isPlaying}
                    className="flex-1 glow-on-hover bg-primary hover:bg-primary/80"
                  >
                    {isPlaying ? (
                      <>
                        <Pause className="mr-2 h-4 w-4" />
                        Processing...
                      </>
                    ) : (
                      <>
                        <Play className="mr-2 h-4 w-4" />
                        Start
                      </>
                    )}
                  </Button>
                  <Button
                    onClick={resetArena}
                    variant="outline"
                    className="border-accent text-accent hover:bg-accent hover:text-black"
                  >
                    <RotateCcw className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Layer Navigation */}
            <Card className="magical-card">
              <CardContent className="p-6">
                <h3 className="text-xl font-cinzel font-bold mb-4 magical-text">
                  Layer Navigation
                </h3>
                
                <div className="space-y-2">
                  {cnnLayers.map((layer, index) => {
                    const Icon = layer.icon
                    const isActive = index === currentStep
                    const isCompleted = completedSteps.includes(index)
                    
                    return (
                      <motion.div
                        key={index}
                        className={`p-3 rounded-lg cursor-pointer transition-all ${
                          isActive 
                            ? 'bg-accent/20 border border-accent' 
                            : isCompleted
                            ? 'bg-primary/20 border border-primary'
                            : 'bg-muted/20 border border-transparent hover:border-muted'
                        }`}
                        onClick={() => uploadedImage && setCurrentStep(index)}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <div className="flex items-center space-x-3">
                          <Icon 
                            className={`h-5 w-5 ${
                              isActive ? 'text-accent' : isCompleted ? 'text-primary' : 'text-gray-400'
                            }`} 
                          />
                          <div className="flex-1">
                            <div className={`font-inter font-medium ${
                              isActive ? 'text-accent' : isCompleted ? 'text-primary' : 'text-gray-300'
                            }`}>
                              {layer.name}
                            </div>
                            <div className="text-xs text-gray-400">
                              Step {index + 1}
                            </div>
                          </div>
                          {isCompleted && <Award className="h-4 w-4 text-primary" />}
                        </div>
                      </motion.div>
                    )
                  })}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Visualization Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-2"
          >
            <Card className="magical-card h-full">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-cinzel font-bold magical-text">
                    CNN Visualization
                  </h3>
                  <div className="flex gap-2">
                    <Button
                      onClick={prevStep}
                      disabled={currentStep === 0}
                      size="sm"
                      variant="outline"
                      className="border-accent text-accent hover:bg-accent hover:text-black"
                    >
                      ←
                    </Button>
                    <Button
                      onClick={nextStep}
                      disabled={currentStep >= cnnLayers.length - 1}
                      size="sm"
                      variant="outline"
                      className="border-accent text-accent hover:bg-accent hover:text-black"
                    >
                      →
                    </Button>
                  </div>
                </div>

                <AnimatePresence mode="wait">
                  {uploadedImage ? (
                    <motion.div
                      key={currentStep}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                      className="space-y-6"
                    >
                      {/* Current Layer Info */}
                      <div className="text-center">
                        <div 
                          className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center"
                          style={{ backgroundColor: cnnLayers[currentStep].color }}
                        >
                          {React.createElement(cnnLayers[currentStep].icon, { 
                            className: "h-8 w-8 text-white" 
                          })}
                        </div>
                        <h4 className="text-2xl font-cinzel font-bold text-white mb-2">
                          {cnnLayers[currentStep].name}
                        </h4>
                        <p className="text-gray-300 font-inter">
                          {cnnLayers[currentStep].description}
                        </p>
                      </div>

                      {/* Visualization Area */}
                      <div className="bg-black/30 rounded-lg p-6 min-h-[300px] flex items-center justify-center">
                        <div className="text-center">
                          <div className="relative mb-4">
                            <img
                              src={uploadedImage}
                              alt="CNN Processing"
                              className="max-w-full h-48 object-contain mx-auto rounded-lg"
                              style={{
                                filter: currentStep === 0 ? 'none' : 
                                       currentStep === 1 ? 'contrast(1.5) brightness(1.2)' :
                                       currentStep === 2 ? 'saturate(1.5) contrast(1.3)' :
                                       currentStep === 3 ? 'blur(1px) contrast(1.1)' :
                                       'sepia(0.3) contrast(1.4)'
                              }}
                            />
                            {currentStep > 0 && (
                              <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="absolute inset-0 border-2 border-accent rounded-lg"
                                style={{
                                  boxShadow: `0 0 20px ${cnnLayers[currentStep].color}50`
                                }}
                              />
                            )}
                          </div>
                          <p className="text-sm text-gray-400 font-inter">
                            {cnnLayers[currentStep].visualization}
                          </p>
                        </div>
                      </div>

                      {/* Explanation */}
                      <Card className="bg-muted/20">
                        <CardContent className="p-4">
                          <div className="flex items-start space-x-3">
                            <Info className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                            <p className="text-gray-300 font-inter">
                              {cnnLayers[currentStep].explanation}
                            </p>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ) : (
                    <div className="text-center py-20">
                      <Eye className="h-16 w-16 mx-auto mb-4 text-gray-400" />
                      <p className="text-xl text-gray-400 font-inter">
                        Upload gambar untuk memulai visualisasi CNN
                      </p>
                    </div>
                  )}
                </AnimatePresence>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Achievements */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-cinzel font-bold text-center mb-12 magical-text">
            Arena Achievements
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="magical-card text-center">
                  <CardContent className="p-6">
                    <Award className="h-12 w-12 mx-auto mb-4 text-accent" />
                    <h3 className="text-lg font-cinzel font-semibold text-white mb-2">
                      {achievement.name}
                    </h3>
                    <p className="text-sm text-gray-400 font-inter mb-3">
                      {achievement.description}
                    </p>
                    <div className="text-accent font-inter font-semibold">
                      +{achievement.points} pts
                    </div>
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

export default CNNArenaPage

