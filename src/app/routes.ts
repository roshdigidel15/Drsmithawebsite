import { createBrowserRouter } from 'react-router';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import OurWorkPage from './pages/OurWorkPage';
import NewsEventsPage from './pages/NewsEventsPage';
import HealthCarePage from './pages/HealthCarePage';
import ElderlyCarePage from './pages/ElderlyCarePage';
import OrphanSupportPage from './pages/OrphanSupportPage';
import JoinUsPage from './pages/JoinUsPage';
import ContactPage from './pages/ContactPage';
import GalleryPage from './pages/GalleryPage';
import NotFoundPage from './pages/NotFoundPage';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Layout,
    children: [
      { index: true, Component: HomePage },
      { path: 'about', Component: AboutPage },
      { path: 'our-work', Component: OurWorkPage },
      { path: 'news-events', Component: NewsEventsPage },
      { path: 'cause/healthcare', Component: HealthCarePage },
      { path: 'cause/elderly-care', Component: ElderlyCarePage },
      { path: 'cause/orphan-support', Component: OrphanSupportPage },
      { path: 'join-us', Component: JoinUsPage },
      { path: 'contact', Component: ContactPage },
      { path: 'gallery', Component: GalleryPage },
      { path: '*', Component: NotFoundPage },
    ],
  },
]);
