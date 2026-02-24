import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/layout/Layout";
import { Home } from "./../pages/Home";
import { MusicPage } from "./../pages/MusicPage";
import { VideosPage } from "./../pages/VideosPage";
import { GalleryPage } from "./../pages/GalleryPage";
import { AboutPage } from "./../pages/AboutPage";
import { BookingPage } from "./../pages/BookingPage";
import "../styles/fonts.css";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="music" element={<MusicPage />} />
          <Route path="videos" element={<VideosPage />} />
          <Route path="gallery" element={<GalleryPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="booking" element={<BookingPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}