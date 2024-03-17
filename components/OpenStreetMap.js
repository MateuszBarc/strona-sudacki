import { useEffect, useRef } from 'react';
import 'leaflet/dist/leaflet.css'; // uzycie bibloteki do mapy

const OpenStreetMap = ({ center, zoom }) => {
    const mapRef = useRef(null);

    useEffect(() => {
        if (typeof window !== 'undefined' && mapRef.current) {
            import('leaflet').then(L => {
                const map = L.map(mapRef.current).setView([center.lat, center.lng], zoom);

                //Tutaj jest warstwa kafelkow na mape 
                L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                }).addTo(map);
            });
        }
    }, [center, zoom]);

    return <div ref={mapRef} style={{ width: '400px', height: '400px', borderRadius: '250px' }} />; // Rozmiar mapki w px 
};

export default OpenStreetMap;
