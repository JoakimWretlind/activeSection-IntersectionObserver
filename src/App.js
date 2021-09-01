import { useState, useMemo, useEffect } from 'react';
import { GlobalStyle } from './globalStyle';
import { Home, About, Work, Contact, Navbar } from './components/index';
const sections = document.querySelectorAll("section");
const navList = document.querySelectorAll(".navlink");

function App() {
  const [isVisible, setIsVisible] = useState(false);

  const options = useMemo(() => ({
    root: null,
    rootMargin: '0px',
    threshold: 0.6
  }), [])


  const callback = entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        setIsVisible(true)
        navList.forEach((link) => {
          link.classList.remove("active");
          if (entry.target.id === link.dataset.nav) {
            link.classList.add("active");
          }
        })
      }
    });
  }

  const optionsMemo = useMemo(() => {
    return options
  }, [options]);

  useEffect(() => {
    const observer = new IntersectionObserver(callback, optionsMemo);
    sections.forEach(section => {
      observer.observe(section);
    })
    return
  }, [isVisible, optionsMemo])

  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Home />
      <About />
      <Work />
      <Contact />
    </>
  );
}

export default App;
