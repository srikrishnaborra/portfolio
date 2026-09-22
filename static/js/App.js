import React, {
    useState,
    useEffect
} from 'react';
import {
    motion
} from 'framer-motion';
import {
    ToastContainer
} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./App.css";
import {
    AnimatePresence
} from 'framer-motion';

// Components
import Navbar from './Components/Navbar.jsx';
import Hero from './Components/Hero.jsx';
import About from './Components/About.jsx';
import Experience from './Components/Experience.jsx';
import Education from './Components/Education.jsx';
import Skills from './Components/Skills.jsx';
import Projects from './Components/Projects.jsx';
import Contact from './Components/Contact.jsx';
import Footer from './Components/Footer.jsx';
import Certification from './Components/Certification.jsx';

// Context
import {
    ThemeProvider,
    useTheme
} from './context/ThemeContext';

// MinimalSpinner: a simple, modern spinner
function MinimalSpinner() {
    return ( <
        motion.div initial = {
            {
                rotate: 0
            }
        }
        animate = {
            {
                rotate: 360
            }
        }
        transition = {
            {
                repeat: Infinity,
                duration: 1.2,
                ease: 'linear'
            }
        }
        style = {
            {
                width: 56,
                height: 56,
                border: '5px solid #232b4d',
                borderTop: '5px solid #00eaff',
                borderRadius: '50%',
                marginBottom: 32,
                boxShadow: '0 0 16px #00eaff44',
            }
        }
        />
    );
}

function AppContent() {
    const [isLoading, setIsLoading] = useState(true);
    const {
        isDark
    } = useTheme();

    useEffect(() => {
        // Simulate loading time
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    if (isLoading) {
        return ( <
            div className = "loading-screen"
            style = {
                {
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '100vh',
                    width: '100vw',
                    background: 'radial-gradient(ellipse at 60% 40%, #0a192f 60%, #00111a 100%)',
                }
            } >
            <
            MinimalSpinner / >
            <
            TypingText text = {
                "Building brilliance,\nbyte by byte..."
            }
            glow / >
            <
            /div>
        );
    }

    return ( <
        div className = "App" >
        <
        ToastContainer position = "top-right"
        autoClose = {
            5000
        }
        hideProgressBar = {
            false
        }
        newestOnTop = {
            false
        }
        closeOnClick rtl = {
            false
        }
        pauseOnFocusLoss draggable pauseOnHover theme = {
            isDark ? "dark" : "light"
        }
        />

        <
        Navbar / >

        <
        main >
        <
        Hero / >
        <
        About / >
        <
        Experience / >
        <
        Education / >
        <
        Projects / >
        <
        Skills / >
        <
        Contact / >
        <
        /main>

        <
        Footer / >
        <
        /div>
    );
}

function App() {
    return ( <
        ThemeProvider >
        <
        AppContent / >
        <
        /ThemeProvider>
    );
}

export default App;

// TypingText component for typing effect with glowing cursor
function TypingText({
    text,
    glow
}) {
    const [displayed, setDisplayed] = useState('');
    const [showCursor, setShowCursor] = useState(true);

    useEffect(() => {
        let i = 0;
        setDisplayed('');
        setShowCursor(true);
        const type = () => {
            if (i <= text.length) {
                setDisplayed(text.slice(0, i));
                i++;
                setTimeout(type, 40);
            } else {
                setShowCursor(true);
            }
        };
        type();
        return () => {};
    }, [text]);

    useEffect(() => {
        const blink = setInterval(() => setShowCursor((v) => !v), 500);
        return () => clearInterval(blink);
    }, []);

    // Render newlines as <br />
    const lines = displayed.split('\n');
    return ( <
        span style = {
            {
                color: '#b3c7f9',
                fontWeight: 500,
                fontSize: 22,
                textAlign: 'center',
                fontFamily: 'monospace',
                whiteSpace: 'pre-line',
                textShadow: glow ?
                    '0 0 8px #00eaff, 0 0 16px #00eaff, 0 0 32px #00eaff' :
                    undefined,
                letterSpacing: 1.2,
            }
        } >
        {
            lines.map((line, idx) => ( <
                React.Fragment key = {
                    idx
                } > {
                    line
                } {
                    idx < lines.length - 1 && < br / >
                } <
                /React.Fragment>
            ))
        } <
        span style = {
            {
                opacity: showCursor ? 1 : 0,
                transition: 'opacity 0.2s',
                fontWeight: 700,
                color: '#00eaff',
                textShadow: glow ?
                    '0 0 8px #00eaff, 0 0 16px #00eaff, 0 0 32px #00eaff' :
                    undefined,
            }
        } >
        |
        <
        /span> <
        /span>
    );
}