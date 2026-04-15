import React from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import { MapPin, Mail, ArrowRight, Plus, Minus } from "lucide-react";
import logo from "../assets/images/logo.svg";

// Import Leaflet CSS
import "leaflet/dist/leaflet.css";

const position: [number, number] = [22.2530, 73.1931]; // Ashtamangal Industrial Park, Vadodara

const customIcon = L.divIcon({
  className: "custom-div-icon",
  html: `
    <div style="display: flex; flex-direction: column; align-items: center; width: 56px; height: 72px;">
      <div style="width: 56px; height: 56px; background: white; border-radius: 50%; padding: 8px; box-shadow: 0 10px 30px rgba(0,0,0,0.3); border: 4px solid #010080; display: flex; align-items: center; justify-content: center; overflow: hidden;">
        <img src="${logo}" alt="ANK" style="width: 100%; height: auto;" />
      </div>
      <div style="width: 0; height: 0; border-left: 10px solid transparent; border-right: 10px solid transparent; border-top: 15px solid #010080; margin-top: -4px;"></div>
    </div>
  `,
  iconSize: [56, 72],
  iconAnchor: [28, 72],
});

const Label = ({
  children,
  color = "var(--color-primary-hover)",
}: {
  children: React.ReactNode;
  color?: string;
}) => (
  <p
    className="text-[10px] font-black tracking-[0.3em] uppercase mb-5 flex items-center gap-3 font-sans"
    style={{ color }}
  >
    <span className="w-6 h-px" style={{ backgroundColor: color }} />
    {children}
  </p>
);

const ZoomButtons = () => {
  const map = useMap();
  
  return (
    <div className="absolute bottom-10 right-10 z-[1000] flex flex-col gap-2">
      <button 
        onClick={() => map.zoomIn()}
        className="w-12 h-12 bg-white rounded-sm shadow-2xl flex items-center justify-center text-slate-900 hover:bg-primary hover:text-white transition-all duration-300 border border-black/5"
        title="Zoom In"
      >
        <Plus size={20} />
      </button>
      <button 
        onClick={() => map.zoomOut()}
        className="w-12 h-12 bg-white rounded-sm shadow-2xl flex items-center justify-center text-slate-900 hover:bg-primary hover:text-white transition-all duration-300 border border-black/5"
        title="Zoom Out"
      >
        <Minus size={20} />
      </button>
    </div>
  );
};

const MapSection = () => {
  return (
    <section className="border-t border-black/4 bg-white">
      {/* 
        Container: 
        - Flex column on mobile (Address box then Map)
        - Block/Relative on desktop (Map takes background, Address box floats)
      */}
      <div className="flex flex-col lg:relative lg:h-[700px] w-full bg-slate-100 overflow-hidden">
        
        {/* Address Card */}
        <div className="relative lg:absolute lg:top-1/2 lg:left-10 xl:left-24 lg:-translate-y-1/2 z-[1001] p-8 lg:p-12 rounded-sm lg:max-w-sm pointer-events-auto shadow-2xl bg-white/95 backdrop-blur-md border border-black/5 m-6 lg:m-0">
          <Label>Office Headquarters</Label>
          <h3 className="text-[24px] font-black text-slate-900 uppercase mb-8 font-sans leading-tight">
            Vadodara, <br/>Gujarat
          </h3>
          
          <div className="space-y-8 mb-10">
            <div className="flex gap-5 items-start">
              <div className="w-10 h-10 rounded-sm bg-primary/5 flex items-center justify-center shrink-0 border border-primary/10">
                <MapPin size={18} className="text-primary" />
              </div>
              <div>
                <p className="text-[9px] font-black text-slate-400 uppercase tracking-[0.2em] mb-2">Location Address</p>
                <p className="text-[14px] text-slate-800 leading-relaxed font-black uppercase tracking-tight">
                  A6, Ashtamangal Industrial Park, 485-486, Makarpura GIDC, Makarpura, Vadodara, Gujarat 390002
                </p>
              </div>
            </div>
            
            <div className="flex gap-5 items-center">
              <div className="w-10 h-10 rounded-sm bg-primary/5 flex items-center justify-center shrink-0 border border-primary/10">
                <Mail size={18} className="text-primary" />
              </div>
              <div>
                <p className="text-[9px] font-black text-slate-400 uppercase tracking-[0.2em] mb-1">Technical Support</p>
                <p className="text-[14px] text-slate-800 font-black tracking-tight">
                  enquiry@ankautomation.in
                </p>
              </div>
            </div>
          </div>

          <a 
            href="https://maps.app.goo.gl/u2ec4e3d64" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full py-5 rounded-sm text-[11px] font-black tracking-[0.3em] text-white uppercase transition-all shadow-xl bg-primary hover:bg-primary-hover flex items-center justify-center gap-3 group"
          >
            Open in Google Maps <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Map Instance */}
        <div className="h-[450px] md:h-[550px] lg:h-full w-full relative z-0">
          <MapContainer
            center={position}
            zoom={16}
            scrollWheelZoom={false}
            style={{ height: "100%", width: "100%" }}
            zoomControl={false}
          >
            {/* Using OpenStreetMap as primary tile source for reliability */}
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            
            <Marker position={position} icon={customIcon}>
              <Popup className="custom-popup">
                <div className="text-center font-sans p-2">
                  <p className="font-black uppercase text-[10px] tracking-widest text-[#010080] mb-1">ANK Design & Automation</p>
                  <p className="text-[11px] font-bold text-slate-600 uppercase">Ashtamangal Industrial Park</p>
                </div>
              </Popup>
            </Marker>

            <ZoomButtons />
          </MapContainer>
        </div>

      </div>
    </section>
  );
};

export default MapSection;
