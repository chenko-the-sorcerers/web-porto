import { useState } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card.jsx'
import { Button } from '@/components/ui/button.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Textarea } from '@/components/ui/textarea.jsx'
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send,
  Linkedin,
  Github,
  Twitter,
  Globe,
  Clock,
  MessageCircle,
  Sparkles,
  Zap
} from 'lucide-react'

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const contactMethods = [
    {
      icon: Mail,
      title: "Kirim Pesan Sihir",
      description: "Email langsung ke menara tertinggi",
      value: "marchel.shevchenko@datasorcerers.id",
      action: "mailto:marchel.shevchenko@datasorcerers.id",
      color: "from-blue-500 to-cyan-600"
    },
    {
      icon: Phone,
      title: "Panggilan Kristal",
      description: "Hubungi melalui jalur komunikasi magis",
      value: "+62 812-3456-7890",
      action: "tel:+6281234567890",
      color: "from-green-500 to-teal-600"
    },
    {
      icon: MapPin,
      title: "Lokasi Kastil",
      description: "Kunjungi kastil Data Sorcerers",
      value: "Jakarta, Indonesia",
      action: "#",
      color: "from-purple-500 to-pink-600"
    }
  ]

  const socialLinks = [
    {
      icon: Linkedin,
      name: "LinkedIn",
      url: "https://linkedin.com/in/marchel-shevchenko",
      color: "#0077B5"
    },
    {
      icon: Github,
      name: "GitHub",
      url: "https://github.com/marchel-shevchenko",
      color: "#333"
    },
    {
      icon: Twitter,
      name: "Twitter",
      url: "https://twitter.com/chen_datasorcerer",
      color: "#1DA1F2"
    },
    {
      icon: Globe,
      name: "Website",
      url: "https://datasorcerers.id",
      color: "#FF6B6B"
    }
  ]

  const responseTime = [
    { type: "Email", time: "24 jam", icon: Mail },
    { type: "Phone", time: "Segera", icon: Phone },
    { type: "Project Inquiry", time: "48 jam", icon: MessageCircle }
  ]

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitted(true)
      setFormData({ name: '', email: '', subject: '', message: '' })
    }, 2000)
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
            Hubungi Sang Penyihir
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 font-inter max-w-4xl mx-auto">
            Kirim pesan ke menara tertinggi kastil Data Sorcerers untuk kolaborasi, konsultasi, atau sekadar berbagi ide magis
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Contact Methods */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            {contactMethods.map((method, index) => {
              const Icon = method.icon
              return (
                <motion.div
                  key={method.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                >
                  <Card className="magical-card group hover:scale-105 transition-transform duration-300">
                    <div className={`bg-gradient-to-r ${method.color} p-4 rounded-t-lg`}>
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-lg font-cinzel font-semibold text-white mb-2">
                        {method.title}
                      </h3>
                      <p className="text-gray-400 font-inter text-sm mb-3">
                        {method.description}
                      </p>
                      <a
                        href={method.action}
                        className="text-accent font-inter font-medium hover:text-accent/80 transition-colors"
                      >
                        {method.value}
                      </a>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}

            {/* Response Time */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Card className="magical-card">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Clock className="h-6 w-6 text-accent mr-3" />
                    <h3 className="text-lg font-cinzel font-semibold text-white">
                      Waktu Respons
                    </h3>
                  </div>
                  <div className="space-y-3">
                    {responseTime.map((item, index) => {
                      const Icon = item.icon
                      return (
                        <div key={item.type} className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <Icon className="h-4 w-4 text-gray-400" />
                            <span className="text-gray-300 font-inter text-sm">
                              {item.type}
                            </span>
                          </div>
                          <span className="text-accent font-inter text-sm font-medium">
                            {item.time}
                          </span>
                        </div>
                      )
                    })}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-2"
          >
            <Card className="magical-card">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Sparkles className="h-8 w-8 text-accent mr-4" />
                  <h2 className="text-2xl font-cinzel font-bold magical-text">
                    Kirim Pesan Magis
                  </h2>
                </div>

                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <Zap className="h-16 w-16 text-accent mx-auto mb-4" />
                    <h3 className="text-xl font-cinzel font-bold text-white mb-2">
                      Pesan Terkirim!
                    </h3>
                    <p className="text-gray-300 font-inter">
                      Mantra komunikasi telah berhasil dikirim. Chen akan merespons dalam waktu 24 jam.
                    </p>
                    <Button
                      onClick={() => setSubmitted(false)}
                      className="mt-4 glow-on-hover bg-accent text-black hover:bg-accent/80"
                    >
                      Kirim Pesan Lain
                    </Button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-inter font-medium text-gray-300 mb-2">
                          Nama Lengkap
                        </label>
                        <Input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Masukkan nama Anda"
                          required
                          className="bg-muted border-border text-white placeholder-gray-400"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-inter font-medium text-gray-300 mb-2">
                          Email
                        </label>
                        <Input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="email@example.com"
                          required
                          className="bg-muted border-border text-white placeholder-gray-400"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-inter font-medium text-gray-300 mb-2">
                        Subjek
                      </label>
                      <Input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        placeholder="Topik pesan Anda"
                        required
                        className="bg-muted border-border text-white placeholder-gray-400"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-inter font-medium text-gray-300 mb-2">
                        Pesan
                      </label>
                      <Textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tulis pesan Anda di sini..."
                        rows={6}
                        required
                        className="bg-muted border-border text-white placeholder-gray-400 resize-none"
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full glow-on-hover bg-accent text-black hover:bg-accent/80 font-inter"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin h-5 w-5 mr-2 border-2 border-black border-t-transparent rounded-full" />
                          Mengirim Mantra...
                        </>
                      ) : (
                        <>
                          <Send className="mr-2 h-5 w-5" />
                          Kirim Pesan
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Social Links */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-cinzel font-bold text-center mb-12 magical-text">
            Portal Komunikasi Lainnya
          </h2>
          
          <div className="grid md:grid-cols-4 gap-6">
            {socialLinks.map((social, index) => {
              const Icon = social.icon
              return (
                <motion.div
                  key={social.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="magical-card group hover:scale-105 transition-transform duration-300">
                    <CardContent className="p-6 text-center">
                      <div 
                        className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center"
                        style={{ backgroundColor: social.color + '20' }}
                      >
                        <Icon 
                          className="h-8 w-8" 
                          style={{ color: social.color }}
                        />
                      </div>
                      <h3 className="text-lg font-cinzel font-semibold text-white mb-2">
                        {social.name}
                      </h3>
                      <a
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-accent font-inter hover:text-accent/80 transition-colors"
                      >
                        Kunjungi Portal
                      </a>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </motion.section>

        {/* Call to Action */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Card className="magical-card">
            <CardContent className="p-8 md:p-12 text-center">
              <MessageCircle className="h-16 w-16 text-accent mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-cinzel font-bold mb-6 magical-text">
                Mari Berkolaborasi!
              </h2>
              <p className="text-lg text-gray-300 font-inter leading-relaxed max-w-4xl mx-auto mb-8">
                Apakah Anda memiliki proyek menarik yang membutuhkan sentuhan sihir AI? 
                Atau mungkin ingin berdiskusi tentang tren terbaru dalam dunia machine learning? 
                Jangan ragu untuk menghubungi Chen. Setiap pesan adalah awal dari petualangan baru!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="glow-on-hover bg-primary hover:bg-primary/80 font-inter"
                >
                  <Mail className="mr-2 h-5 w-5" />
                  Diskusi Proyek
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-accent text-accent hover:bg-accent hover:text-black font-inter"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Konsultasi Langsung
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.section>
      </div>
    </div>
  )
}

export default ContactPage

