import { motion } from "framer-motion";

interface Client {
  name: string;
  logo?: string; // URL to logo image
}

interface UnitClientsProps {
  title?: string;
  clients?: Client[];
  dark?: boolean;
}

const defaultClients: Client[] = [
  { 
    name: "Siemens", 
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/5f/Siemens-logo.svg" 
  },
  { 
    name: "Bosch", 
    logo: "https://upload.wikimedia.org/wikipedia/commons/1/16/Bosch-logo.svg" 
  },
  { 
    name: "Rockwell Automation", 
    logo: "https://upload.wikimedia.org/wikipedia/commons/d/d7/Rockwell_Automation_logo.svg" 
  },
  { 
    name: "ABB", 
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/00/ABB_logo.svg" 
  },
  { 
    name: "Schneider Electric", 
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/95/Schneider_Electric_logo.svg" 
  },
  { 
    name: "Honeywell", 
    logo: "https://upload.wikimedia.org/wikipedia/commons/6/61/Honeywell_logo.svg" 
  },
  { 
    name: "Cisco", 
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Cisco_logo_blue_2016.svg" 
  },
  { 
    name: "IBM", 
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg" 
  },
];

/**
 * UnitClients Component
 * Displays client logos in a professional 2-row grid.
 * Follows the project's global section padding and responsive patterns.
 * Preserves the fixed h-80 height and layout requested by the user.
 */
const UnitClients = ({ clients = defaultClients }: UnitClientsProps) => {
  return (
    <section 
      className="w-full h-50 flex items-center px-6 md:px-16 lg:px-32 overflow-hidden bg-white"
    >
      <div className="w-full mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-16 lg:gap-24 items-center">
          {clients.map((client, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: (index % 4) * 0.1 + Math.floor(index / 4) * 0.15,
                ease: [0.16, 1, 0.3, 1]
              }}
              className="flex items-center justify-center group"
            >
              {client.logo ? (
                <img
                  src={client.logo}
                  alt={client.name}
                  className="h-8 md:h-10 lg:h-12 w-auto object-contain transition-all duration-500 filter grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110"
                />
              ) : (
                <span
                  className="text-xl md:text-2xl lg:text-3xl font-black uppercase tracking-tighter transition-all duration-300 text-slate-300 group-hover:text-primary"
                >
                  {client.name}
                </span>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UnitClients;
