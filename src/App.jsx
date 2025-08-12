import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Home, 
  BookOpen, 
  Scroll, 
  FolderOpen, 
  Gamepad2, 
  Award, 
  Wand2, 
  Mail,
  Menu,
  X
} from 'lucide-react'
import { Button } from '@/components/ui/button.jsx'
import './App.css'

// Import page components
import HomePage from './components/HomePage'
import ChroniclesPage from './components/ChroniclesPage'
import ArutalaPage from './components/ArutalaPage'
import ProjectsPage from './components/ProjectsPage'
import CNNArenaPage from './components/CNNArenaPage'
import AchievementsPage from './components/AchievementsPage'
import SkillsPage from './components/SkillsPage'
import ContactPage from './components/ContactPage'

// Navigation items
const navItems = [
  { path: '/', label: 'Beranda', icon: Home },
  { path: '/chronicles', label: 'Chronicles', icon: BookOpen },
  { path: '/arutala', label: 'Mantra Arutala', icon: Scroll },
  { path: '/projects', label: 'Gulungan Proyek', icon: FolderOpen },
  { path: '/cnn-arena', label: 'Arena CNN', icon: Gamepad2 },
  { path: '/achievements', label: 'Pencapaian', icon: Award },
  { path: '/skills', label: 'Perkakas Sihir', icon: Wand2 },
  { path: '/contact', label: 'Hubungi', icon: Mail },
]

// Floating particles component
const FloatingParticles = () => {
  const [particles, setParticles] = useState([])

  useEffect(() => {
    const newParticles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 3,
      duration: 3 + Math.random() * 2,
    }))
    setParticles(newParticles)
  }, [])

  return (
    <div className="particles">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="particle"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
          }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  )
}

// Navigation component
const Navigation = ({ isOpen, setIsOpen }) => {
  const location = useLocation()

  return (
    <>
      {/* Mobile menu button */}
      <Button
        variant="ghost"
        size="icon"
        className="fixed top-4 left-4 z-50 md:hidden glow-on-hover"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </Button>

      {/* Navigation */}
      <motion.nav
        className={`fixed top-0 left-0 h-full w-64 bg-card/90 backdrop-blur-lg border-r border-border z-40 transform transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } md:translate-x-0`}
        initial={{ x: -256 }}
        animate={{ x: isOpen ? 0 : -256 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        <div className="p-6">
          <motion.h1 
            className="text-2xl font-cinzel font-bold magical-text mb-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Data Sorcerers
          </motion.h1>
          
          <div className="space-y-2">
            {navItems.map((item, index) => {
              const Icon = item.icon
              const isActive = location.pathname === item.path
              
              return (
                <motion.div
                  key={item.path}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * index }}
                >
                  <Link
                    to={item.path}
                    className={`nav-item flex items-center space-x-3 w-full text-left ${
                      isActive ? 'active' : ''
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    <Icon className="h-5 w-5" />
                    <span className="font-inter">{item.label}</span>
                  </Link>
                </motion.div>
              )
            })}
          </div>
        </div>
      </motion.nav>

      {/* Overlay for mobile */}
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black/50 z-30 md:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  )
}

// Page wrapper with animations
const PageWrapper = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="min-h-screen"
    >
      {children}
    </motion.div>
  )
}

function App() {
  const [isNavOpen, setIsNavOpen] = useState(false)

  return (
    <Router>
      <div className="magical-bg min-h-screen text-foreground">
        <FloatingParticles />
        
        <Navigation isOpen={isNavOpen} setIsOpen={setIsNavOpen} />
        
        <main className="md:ml-64 relative z-10">
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={
                <PageWrapper>
                  <HomePage />
                </PageWrapper>
              } />
              <Route path="/chronicles" element={
                <PageWrapper>
                  <ChroniclesPage />
                </PageWrapper>
              } />
              <Route path="/arutala" element={
                <PageWrapper>
                  <ArutalaPage />
                </PageWrapper>
              } />
              <Route path="/projects" element={
                <PageWrapper>
                  <ProjectsPage />
                </PageWrapper>
              } />
              <Route path="/cnn-arena" element={
                <PageWrapper>
                  <CNNArenaPage />
                </PageWrapper>
              } />
              <Route path="/achievements" element={
                <PageWrapper>
                  <AchievementsPage />
                </PageWrapper>
              } />
              <Route path="/skills" element={
                <PageWrapper>
                  <SkillsPage />
                </PageWrapper>
              } />
              <Route path="/contact" element={
                <PageWrapper>
                  <ContactPage />
                </PageWrapper>
              } />
            </Routes>
          </AnimatePresence>
        </main>
      </div>
    </Router>
  )
}

export default App

