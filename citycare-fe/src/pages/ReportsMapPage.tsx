import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./ReportsMapPage.css";

const ReportsMapPage: React.FC = () => {
    return (
        <MapContainer
            // @ts-ignore
            center={[40.29709305551441, 8.498636830411488]}
            zoom={17}
            style={{ height: "100vh", width: "100%" }}
        >
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                // @ts-ignore
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
        </MapContainer>
    );
};

export default ReportsMapPage;
