/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Gallery } from './components/Gallery';
import { Team } from './components/Team';
import { Contact } from './components/Contact';

export default function App() {
  return (
    <main className="bg-[#111] min-h-screen">
      <Hero />
      <About />
      <Projects />
      <Gallery />
      <Team />
      <Contact />
    </main>
  );
}
