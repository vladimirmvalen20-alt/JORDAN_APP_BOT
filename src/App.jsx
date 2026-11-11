import React, { useState } from 'react';
import { 
  Menu, X, ShoppingBag, MessageSquare, User, ChevronLeft, 
  ChevronRight, Send, CheckCircle2, AlertTriangle, ShieldCheck, 
  Sparkles, Flame, LogIn, LogOut, ArrowRight, RefreshCw, FileText, CreditCard, DollarSign, Award, Package, Truck, Lock 
} from 'lucide-react';

// --- BASE DE DATOS DE PRODUCTOS JORDAN ---
const jordanData = {
  sneakers: [
    { id: 1, name: "Air Jordan 1 Retro High OG 'Chicago'", price: 3800, stock: 5, gender: "unisex", img: "https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&q=80&w=600" },
    { id: 2, name: "Air Jordan 11 Retro 'Gamma Blue'", price: 4800, stock: 3, gender: "unisex", img: "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&q=80&w=600" },
    { id: 3, name: "Air Jordan 11 Retro 'Cool Grey'", price: 4600, stock: 4, gender: "unisex", img: "https://images.unsplash.com/photo-1607522370275-f14206abe5d3?auto=format&fit=crop&q=80&w=600" },
    { id: 4, name: "Air Jordan 4 Retro 'Black Cat'", price: 5500, stock: 2, gender: "unisex", img: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&q=80&w=600" },
    { id: 5, name: "Air Jordan 4 Retro 'Cool Grey'", price: 4300, stock: 3, gender: "unisex", img: "https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?auto=format&fit=crop&q=80&w=600" },
    { id: 6, name: "Air Jordan 4 Retro 'Military Black'", price: 4700, stock: 5, gender: "unisex", img: "https://images.unsplash.com/photo-1556906781-9a412961c28c?auto=format&fit=crop&q=80&w=600" },
    { id: 7, name: "Air Jordan 4 Retro 'Military Blue'", price: 4500, stock: 4, gender: "unisex", img: "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?auto=format&fit=crop&q=80&w=600" },
    { id: 8, name: "Air Jordan 4 Retro 'Red Thunder'", price: 4600, stock: 3, gender: "unisex", img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=600" },
    { id: 9, name: "Air Jordan 4 Retro 'Yellow Thunder'", price: 4400, stock: 4, gender: "unisex", img: "https://images.unsplash.com/photo-1512374382149-233c42b6a83b?auto=format&fit=crop&q=80&w=600" },
    { id: 10, name: "Air Jordan 3 Retro 'Black Cat'", price: 4200, stock: 3, gender: "unisex", img: "https://images.unsplash.com/photo-1579338559194-a162d19bf842?auto=format&fit=crop&q=80&w=600" },
    { id: 11, name: "Air Jordan 3 Retro 'Red Cement'", price: 4100, stock: 6, gender: "unisex", img: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&q=80&w=600" }
  ],
  apparel: {
    male: [
      { id: "m1", name: "Hoodie Jordan Flight Fleece Black", price: 1800, type: "hoodie", stock: 8, img: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&q=80&w=600" },
      { id: "m2", name: "Jogger Jordan Essentials Red", price: 1500, type: "pants", stock: 3, img: "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?auto=format&fit=crop&q=80&w=600" },
      { id: "m3", name: "Jersey Jordan Sport Dri-FIT", price: 1200, type: "shirt", stock: 10, img: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?auto=format&fit=crop&q=80&w=600" },
      { id: "m4", name: "Chamarra Jordan Winterized Utility", price: 2800, type: "hoodie", stock: 5, img: "https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&q=80&w=600" }
    ],
    female: [
      { id: "f1", name: "Top Jordan Brooklyn Fleece Cropped", price: 1100, type: "shirt", stock: 6, img: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&q=80&w=600" },
      { id: "f2", name: "Leggings Jordan Air High-Waisted", price: 1400, type: "pants", stock: 4, img: "https://images.unsplash.com/photo-1506152983158-b4a74a01c721?auto=format&fit=crop&q=80&w=600" },
      { id: "f3", name: "Chamarra Bomber Jordan Stadium", price: 2600, type: "hoodie", stock: 1, img: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&q=80&w=600" },
      { id: "f4", name: "Hoodie Oversized Jordan Flight WMNS", price: 1750, type: "hoodie", stock: 5, img: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=600" }
    ]
  }
};

export default function App() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [loginError, setLoginError] = useState('');

  const [userGender, setUserGender] = useState('male');
  const [currentSneakerIndex, setCurrentSneakerIndex] = useState(0);
  const [selectedOutfit, setSelectedOutfit] = useState({
    sneaker: jordanData.sneakers[0],
    top: null,
    pants: null
  });

  const [paymentMethod, setPaymentMethod] = useState('');
  const [paymentStatus, setPaymentStatus] = useState(null); 
  const [needsInvoice, setNeedsInvoice] = useState(false);
  const [invoiceData, setInvoiceData] = useState({
    rfc: '',
    razonSocial: '',
    usoCfdi: 'G03',
    correo: ''
  });
  const [ticketGenerated, setTicketGenerated] = useState(false);

  // Chatbot inteligente
  const [chatMessages, setChatMessages] = useState([
    { sender: 'bot', text: '¡Hola! Bienvenido a Jordan Business Bot 🤖⚡. ¿Qué te gustaría consultar hoy? (Tenemos colecciones de sneakers Jordan 3, 4 y 11, ropa, precios o facturación).' }
  ]);
  const [chatInput, setChatInput] = useState('');

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    setLoginError('');

    if (!loginEmail || !loginPassword) {
      setLoginError('Por favor completa todos los campos.');
      return;
    }

    if (loginPassword.length < 6) {
      setLoginError('La contraseña debe tener al menos 6 caracteres.');
      return;
    }

    setCurrentUser({
      name: loginEmail.split('@')[0].toUpperCase(),
      email: loginEmail,
      role: loginEmail.includes('admin') ? 'Administrador' : 'Cliente VIP'
    });
    
    setIsLoginOpen(false);
    setLoginEmail('');
    setLoginPassword('');
  };

  const handleLogout = () => {
    setCurrentUser(null);
  };

  const nextSneaker = () => {
    const nextIdx = (currentSneakerIndex + 1) % jordanData.sneakers.length;
    setCurrentSneakerIndex(nextIdx);
    setSelectedOutfit(prev => ({ ...prev, sneaker: jordanData.sneakers[nextIdx] }));
  };

  const prevSneaker = () => {
    const prevIdx = (currentSneakerIndex - 1 + jordanData.sneakers.length) % jordanData.sneakers.length;
    setCurrentSneakerIndex(prevIdx);
    setSelectedOutfit(prev => ({ ...prev, sneaker: jordanData.sneakers[prevIdx] }));
  };

  const handleAddPieceToOutfit = (piece) => {
    if (piece.type === 'hoodie' || piece.type === 'shirt') {
      setSelectedOutfit(prev => ({ ...prev, top: piece }));
    } else if (piece.type === 'pants') {
      setSelectedOutfit(prev => ({ ...prev, pants: piece }));
    }
  };

  const calculateTotal = () => {
    let total = selectedOutfit.sneaker ? selectedOutfit.sneaker.price : 0;
    if (selectedOutfit.top) total += selectedOutfit.top.price;
    if (selectedOutfit.pants) total += selectedOutfit.pants.price;
    return total;
  };

  const handleProcessPayment = (method) => {
    setPaymentMethod(method);
    setPaymentStatus('processing');
    
    setTimeout(() => {
      if (method) {
        setPaymentStatus('success');
        setTicketGenerated(true);
      } else {
        setPaymentStatus('error');
      }
    }, 1200);
  };

  // --- LÓGICA DE INTELIGENCIA CONVERSACIONAL CORREGIDA Y MEJORADA ---
  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!chatInput.trim()) return;

    const userText = chatInput.toLowerCase().trim();
    const newMessages = [...chatMessages, { sender: 'user', text: chatInput }];
    setChatMessages(newMessages);
    setChatInput('');

    setTimeout(() => {
      let botReply = "Interesante pregunta. En Jordan Business manejamos calzado retro original, ropa exclusiva, pagos seguros y facturación fiscal. ¿Te gustaría armar un outfit en el menú principal?";

      // 1. Saludos
      if (userText.includes('hola') || userText.includes('buenos días') || userText.includes('buenas tardes') || userText.includes('que tal')) {
        botReply = "¡Hola! 🏀 Qué gusto saludarte. ¿En qué te puedo apoyar hoy? Puedes preguntarme por modelos Jordan, precios, colecciones o métodos de pago.";
      } 
      // 2. Preguntas sobre colecciones / qué tienes
      else if (userText.includes('coleccion') || userText.includes('colección') || userText.includes('tienes') || userText.includes('ofreces') || userText.includes('opciones')) {
        botReply = "Actualmente contamos con colecciones exclusivas de sneakers (Air Jordan 3, 4 y 11), así como hoodies, joggers y jerseys deportivos para hombre y mujer. ¿Te interesa alguna categoría en particular?";
      }
      // 3. Género Hombre
      else if (userText.includes('hombre') || userText.includes('chico') || userText.includes('varon')) {
        setUserGender('male');
        botReply = "¡Perfecto! He seleccionado las colecciones para **Hombre**. Te recomiendo echarle un vistazo a los Air Jordan 4 'Black Cat' combinados con nuestras hoodies de temporada.";
      } 
      // 4. Género Mujer
      else if (userText.includes('mujer') || userText.includes('chica') || userText.includes('dama')) {
        setUserGender('female');
        botReply = "¡Excelente! Perfil ajustado para **Mujer**. Te recomendamos los conjuntos Crop Top y Leggings Air High-Waisted.";
      } 
      // 5. Precios / Costos
      else if (userText.includes('precio') || userText.includes('cuesta') || userText.includes('cuanto') || userText.includes('valen')) {
        botReply = "Los sneakers varían entre $3,800 y $5,500 MXN según la edición (como los Jordan 4 Black Cat o Jordan 11 Gamma Blue). Las prendas de ropa van desde los $950 MXN.";
      } 
      // 6. Modelos Jordan 4 y Black Cat
      else if (userText.includes('jordan 4') || userText.includes('black cat') || userText.includes('military') || userText.includes('thunder')) {
        botReply = "¡Los Air Jordan 4 son legendarios! Tenemos disponibles en versiones Black Cat, Cool Grey, Military Black, Military Blue y Thunder (Red/Yellow). ¿Deseas armar tu outfit con alguno?";
      } 
      // 7. Modelos Jordan 11
      else if (userText.includes('jordan 11') || userText.includes('gamma') || userText.includes('cool grey')) {
        botReply = "Los Jordan 11 'Gamma Blue' y 'Cool Grey' tienen un diseño inigualable y gran amortiguación. Su precio ronda los $4,600 - $4,800 MXN.";
      } 
      // 8. Facturación
      else if (userText.includes('factura') || userText.includes('facturar') || userText.includes('rfc') || userText.includes('ticket')) {
        botReply = "¡Sí! Al finalizar cualquier compra en el apartado 'Arma tu Outfit & Factura', puedes activar la casilla de facturación e ingresar tus datos fiscales (RFC y Razón Social) para obtener tu CFDI.";
      } 
      // 9. Pagos
      else if (userText.includes('pago') || userText.includes('tarjeta') || userText.includes('efectivo')) {
        botReply = "Aceptamos pagos en efectivo y tarjetas de crédito/débito con validación inmediata en nuestra plataforma.";
      } 
      // 10. Agradecimientos
      else if (userText.includes('gracias') || userText.includes('excelente') || userText.includes('perfecto')) {
        botReply = "¡De nada! ⚡ Estoy a tu disposición para cualquier duda sobre tus sneakers favoritos.";
      }

      setChatMessages(prev => [...prev, { sender: 'bot', text: botReply }]);
    }, 800);
  };

  return (
    <div className="min-h-screen bg-jordanDark text-white flex flex-col">
      <header className="bg-black/80 backdrop-blur-md sticky top-0 z-50 border-b border-neutral-800 px-4 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <button onClick={() => setIsSidebarOpen(true)} className="p-2 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-jordanRed transition">
            <Menu size={24} />
          </button>
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-black tracking-wider text-jordanRed italic">JORDAN</span>
            <span className="text-xs bg-jordanRed text-white px-2 py-0.5 rounded font-bold uppercase">Business Bot</span>
          </div>
        </div>

        <div className="flex items-center space-x-3">
          {currentUser ? (
            <div className="flex items-center space-x-3 bg-neutral-900 border border-neutral-800 px-3 py-1.5 rounded-xl">
              <div className="flex items-center space-x-2">
                <div className="w-7 h-7 rounded-full bg-jordanRed flex items-center justify-center font-bold text-xs text-white">
                  {currentUser.name.charAt(0)}
                </div>
                <div className="text-left hidden sm:block">
                  <p className="text-xs font-bold leading-none">{currentUser.name}</p>
                  <span className="text-[10px] text-neutral-400">{currentUser.role}</span>
                </div>
              </div>
              <button onClick={handleLogout} title="Cerrar Sesión" className="p-1.5 text-neutral-400 hover:text-jordanRed transition">
                <LogOut size={16} />
              </button>
            </div>
          ) : (
            <button onClick={() => setIsLoginOpen(true)} className="flex items-center space-x-1.5 bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 px-4 py-2 rounded-lg text-sm font-semibold transition">
              <LogIn size={16} className="text-jordanRed" />
              <span>Iniciar Sesión</span>
            </button>
          )}
        </div>
      </header>

      {isSidebarOpen && (
        <div className="fixed inset-0 z-50 flex">
          <div className="fixed inset-0 bg-black/70 backdrop-blur-sm" onClick={() => setIsSidebarOpen(false)}></div>
          <div className="relative w-80 bg-neutral-950 border-r border-neutral-800 p-6 flex flex-col justify-between shadow-2xl z-10 animate-fade-in">
            <div>
              <div className="flex items-center justify-between mb-8">
                <span className="text-xl font-black text-jordanRed tracking-wider italic">MENÚ JORDAN</span>
                <button onClick={() => setIsSidebarOpen(false)} className="p-2 text-neutral-400 hover:text-white"><X size={22} /></button>
              </div>
              <nav className="space-y-2">
                <button onClick={() => { setActiveTab('dashboard'); setIsSidebarOpen(false); }} className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl font-medium transition ${activeTab === 'dashboard' ? 'bg-jordanRed text-white' : 'text-neutral-400 hover:bg-neutral-900'}`}>
                  <Sparkles size={20} /><span>Dashboard Principal</span>
                </button>
                <button onClick={() => { setActiveTab('outfit-builder'); setIsSidebarOpen(false); }} className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl font-medium transition ${activeTab === 'outfit-builder' ? 'bg-jordanRed text-white' : 'text-neutral-400 hover:bg-neutral-900'}`}>
                  <ShoppingBag size={20} /><span>Arma tu Outfit & Factura</span>
                </button>
                <button onClick={() => { setActiveTab('whatsapp-bot'); setIsSidebarOpen(false); }} className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl font-medium transition ${activeTab === 'whatsapp-bot' ? 'bg-jordanRed text-white' : 'text-neutral-400 hover:bg-neutral-900'}`}>
                  <MessageSquare size={20} /><span>Chatbot WhatsApp</span>
                </button>
              </nav>
            </div>
          </div>
        </div>
      )}

      <main className="flex-1 p-4 md:p-8 max-w-7xl mx-auto w-full space-y-12">
        {activeTab === 'dashboard' && (
          <div className="space-y-12 animate-fade-in">
            <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-neutral-900 via-neutral-900 to-black p-8 md:p-12 border border-neutral-800 flex flex-col md:flex-row items-center justify-between shadow-2xl">
              <div className="max-w-xl space-y-4">
                <div className="inline-flex items-center space-x-2 bg-jordanRed/10 text-jordanRed px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border border-jordanRed/20">
                  <Flame size={14} /> Colección Oficial 2026
                </div>
                <h1 className="text-4xl md:text-5xl font-black tracking-tight uppercase italic">
                  DOMINA EL ASFALTO CON <span className="text-jordanRed">JORDAN</span>
                </h1>
                <p className="text-neutral-400 text-sm md:text-base">
                  Sistema inteligente de recomendación de outfits, pagos seguros y facturación electrónica instantánea.
                </p>
                <div className="flex space-x-4 pt-2">
                  <button onClick={() => setActiveTab('outfit-builder')} className="bg-jordanRed hover:bg-red-700 text-white px-6 py-3 rounded-xl font-bold flex items-center space-x-2 transition shadow-lg shadow-jordanRed/20">
                    <span>Empezar a Armar Outfit</span><ArrowRight size={18} />
                  </button>
                </div>
              </div>
              <div className="mt-6 md:mt-0 w-72 md:w-96">
                <img src={jordanData.sneakers[0].img} alt="Featured" className="rounded-2xl shadow-2xl border border-neutral-800 object-cover h-64 w-full" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-neutral-950 p-6 rounded-3xl border border-neutral-800 space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-jordanRed/10 flex items-center justify-center text-jordanRed border border-jordanRed/20">
                  <Truck size={24} />
                </div>
                <h3 className="text-lg font-bold">Envío Exprés Seguro</h3>
                <p className="text-neutral-400 text-sm">Entregas garantizadas a todo México con seguimiento en tiempo real y protección contra robos.</p>
              </div>
              <div className="bg-neutral-950 p-6 rounded-3xl border border-neutral-800 space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-jordanRed/10 flex items-center justify-center text-jordanRed border border-jordanRed/20">
                  <ShieldCheck size={24} />
                </div>
                <h3 className="text-lg font-bold">100% Originales & Auténticos</h3>
                <p className="text-neutral-400 text-sm">Certificación directa de fábrica con códigos de autenticidad en cada sneaker y prenda.</p>
              </div>
              <div className="bg-neutral-950 p-6 rounded-3xl border border-neutral-800 space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-jordanRed/10 flex items-center justify-center text-jordanRed border border-jordanRed/20">
                  <FileText size={24} />
                </div>
                <h3 className="text-lg font-bold">Facturación Fiscal 4.0</h3>
                <p className="text-neutral-400 text-sm">Genera tus comprobantes fiscales y CFDI automáticamente al finalizar cualquiera de tus compras.</p>
              </div>
            </div>

            <div className="bg-neutral-950 p-8 rounded-3xl border border-neutral-800 space-y-6">
              <div className="flex justify-between items-center">
                <div>
                  <h2 className="text-2xl font-black italic uppercase">Catálogo Completo Jordan</h2>
                  <p className="text-neutral-400 text-sm">Explora las siluetas icónicas Retro Jordan 3, 4 y 11.</p>
                </div>
                <button onClick={() => setActiveTab('outfit-builder')} className="text-jordanRed text-sm font-bold hover:underline flex items-center space-x-1">
                  <span>Armar Outfit Con Un Modelo</span><ArrowRight size={16}/>
                </button>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {jordanData.sneakers.map((sneaker) => (
                  <div key={sneaker.id} className="bg-neutral-900/60 border border-neutral-800 rounded-2xl p-4 flex flex-col justify-between hover:border-jordanRed/50 transition">
                    <div>
                      <img src={sneaker.img} alt={sneaker.name} className="w-full h-44 object-cover rounded-xl mb-3 border border-neutral-800" />
                      <h4 className="font-bold text-sm leading-snug">{sneaker.name}</h4>
                    </div>
                    <div className="mt-4 flex items-center justify-between border-t border-neutral-800/80 pt-3">
                      <span className="text-jordanRed font-black text-base">${sneaker.price} MXN</span>
                      <span className="text-[10px] bg-neutral-800 text-neutral-300 px-2 py-1 rounded font-bold uppercase">Stock: {sneaker.stock}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'outfit-builder' && (
          <div className="space-y-6 animate-fade-in">
            <div className="flex flex-col md:flex-row items-center justify-between bg-neutral-950 p-6 rounded-3xl border border-neutral-800">
              <h1 className="text-3xl font-black italic uppercase">Armador Visual, Pagos y Facturación</h1>
              <div className="flex space-x-3 bg-neutral-900 p-1.5 rounded-xl border border-neutral-800 mt-4 md:mt-0">
                <button onClick={() => setUserGender('male')} className={`px-4 py-2 rounded-lg font-bold text-sm ${userGender === 'male' ? 'bg-jordanRed text-white' : 'text-neutral-400'}`}>Hombre</button>
                <button onClick={() => setUserGender('female')} className={`px-4 py-2 rounded-lg font-bold text-sm ${userGender === 'female' ? 'bg-jordanRed text-white' : 'text-neutral-400'}`}>Mujer</button>
              </div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-6">
                <div className="bg-neutral-950 p-6 rounded-3xl border border-neutral-800">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-bold uppercase">1. Selecciona tu Sneaker ({currentSneakerIndex + 1}/{jordanData.sneakers.length})</h3>
                    <div className="flex space-x-2">
                      <button onClick={prevSneaker} className="p-2 rounded-lg bg-neutral-900 border border-neutral-700 hover:bg-neutral-800"><ChevronLeft size={18}/></button>
                      <button onClick={nextSneaker} className="p-2 rounded-lg bg-neutral-900 border border-neutral-700 hover:bg-neutral-800"><ChevronRight size={18}/></button>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 bg-neutral-900/60 p-4 rounded-2xl border border-neutral-800">
                    <img src={selectedOutfit.sneaker.img} alt="Sneaker" className="w-28 h-28 object-cover rounded-xl border border-neutral-700" />
                    <div>
                      <p className="font-bold text-lg">{selectedOutfit.sneaker.name}</p>
                      <p className="text-jordanRed font-black text-xl">${selectedOutfit.sneaker.price} MXN</p>
                      <span className="text-xs text-neutral-400">Stock disponible: {selectedOutfit.sneaker.stock} pares</span>
                    </div>
                  </div>
                </div>

                <div className="bg-neutral-950 p-6 rounded-3xl border border-neutral-800 space-y-4">
                  <h3 className="text-lg font-bold uppercase">2. Elige Prendas Complementarias</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {jordanData.apparel[userGender].map((piece) => (
                      <div key={piece.id} className="bg-neutral-900/60 border border-neutral-800 rounded-2xl p-4 flex flex-col justify-between">
                        <div>
                          <img src={piece.img} alt={piece.name} className="w-full h-36 object-cover rounded-xl mb-3" />
                          <h4 className="font-bold text-sm">{piece.name}</h4>
                          <p className="text-jordanRed font-black mt-1">${piece.price} MXN</p>
                        </div>
                        <button onClick={() => handleAddPieceToOutfit(piece)} className="mt-4 bg-neutral-800 hover:bg-jordanRed text-white py-2 rounded-xl text-xs font-bold transition">
                          Agregar al Outfit
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-neutral-950 p-6 rounded-3xl border border-neutral-800 space-y-6">
                  <h3 className="text-xl font-black italic uppercase">Tu Outfit</h3>
                  <div className="space-y-4">
                    <div className="bg-neutral-900 p-3 rounded-xl">
                      <p className="text-xs text-jordanRed font-bold">CALZADO</p>
                      <p className="text-sm font-semibold">{selectedOutfit.sneaker?.name}</p>
                    </div>
                    <div className="bg-neutral-900 p-3 rounded-xl">
                      <p className="text-xs text-jordanRed font-bold">TOP</p>
                      <p className="text-sm font-semibold">{selectedOutfit.top?.name || 'Ninguno seleccionado'}</p>
                    </div>
                    <div className="bg-neutral-900 p-3 rounded-xl">
                      <p className="text-xs text-jordanRed font-bold">PANTS</p>
                      <p className="text-sm font-semibold">{selectedOutfit.pants?.name || 'Ninguno seleccionado'}</p>
                    </div>
                  </div>
                  <div className="border-t border-neutral-800 pt-4 flex justify-between font-black text-lg">
                    <span>Total a Pagar:</span>
                    <span className="text-jordanRed">${calculateTotal()} MXN</span>
                  </div>

                  <div className="border-t border-neutral-800 pt-4 space-y-3">
                    <p className="text-xs text-neutral-400 font-bold uppercase">Selecciona Forma de Pago</p>
                    <div className="grid grid-cols-2 gap-2">
                      <button onClick={() => handleProcessPayment('Efectivo')} className="bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 p-2.5 rounded-xl text-xs font-bold flex items-center justify-center space-x-1">
                        <DollarSign size={14} className="text-emerald-400"/><span>Efectivo</span>
                      </button>
                      <button onClick={() => handleProcessPayment('Tarjeta')} className="bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 p-2.5 rounded-xl text-xs font-bold flex items-center justify-center space-x-1">
                        <CreditCard size={14} className="text-jordanRed"/><span>Tarjeta Crédito</span>
                      </button>
                    </div>

                    {paymentStatus === 'processing' && (
                      <p className="text-xs text-amber-400 text-center animate-pulse">Validando pasarela de pago...</p>
                    )}
                    {paymentStatus === 'success' && (
                      <div className="bg-emerald-950/40 border border-emerald-800 text-emerald-400 p-3 rounded-xl text-xs flex items-center space-x-2">
                        <CheckCircle2 size={16}/><span>¡Pago procesado con éxito! Ticket generado.</span>
                      </div>
                    )}
                    {paymentStatus === 'error' && (
                      <div className="bg-red-950/40 border border-red-800 text-red-400 p-3 rounded-xl text-xs flex items-center space-x-2">
                        <AlertTriangle size={16}/><span>Error en pago, seleccione método válido.</span>
                      </div>
                    )}
                  </div>

                  {ticketGenerated && (
                    <div className="border-t border-neutral-800 pt-4 space-y-3 animate-fade-in">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-jordanRed uppercase flex items-center space-x-1">
                          <FileText size={14}/><span>¿Deseas Facturar tu Compra?</span>
                        </span>
                        <input type="checkbox" checked={needsInvoice} onChange={(e) => setNeedsInvoice(e.target.checked)} className="accent-jordanRed w-4 h-4" />
                      </div>

                      {needsInvoice && (
                        <div className="bg-neutral-900 p-4 rounded-2xl space-y-3 border border-neutral-800">
                          <p className="text-xs text-neutral-400">Complete su información fiscal:</p>
                          <input type="text" placeholder="RFC (Ej. XAXX010101000)" value={invoiceData.rfc} onChange={(e) => setInvoiceData({...invoiceData, rfc: e.target.value})} className="w-full bg-neutral-950 border border-neutral-800 rounded-xl p-2.5 text-xs text-white" />
                          <input type="text" placeholder="Razón Social / Nombre" value={invoiceData.razonSocial} onChange={(e) => setInvoiceData({...invoiceData, razonSocial: e.target.value})} className="w-full bg-neutral-950 border border-neutral-800 rounded-xl p-2.5 text-xs text-white" />
                          <input type="email" placeholder="Correo Electrónico" value={invoiceData.correo} onChange={(e) => setInvoiceData({...invoiceData, correo: e.target.value})} className="w-full bg-neutral-950 border border-neutral-800 rounded-xl p-2.5 text-xs text-white" />
                          
                          <button onClick={() => alert(`¡Factura generada y enviada a ${invoiceData.correo || 'su correo'} exitosamente!`)} className="w-full bg-jordanRed text-white text-xs font-bold py-2.5 rounded-xl transition hover:bg-red-700">
                            Timbrar y Descargar Factura PDF/XML
                          </button>
                        </div>
                      )}
                    </div>
                  )}

                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'whatsapp-bot' && (
          <div className="max-w-2xl mx-auto bg-neutral-950 border border-neutral-800 rounded-3xl overflow-hidden shadow-2xl animate-fade-in">
            <div className="bg-neutral-900 p-4 border-b border-neutral-800 flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-emerald-600 flex items-center justify-center font-bold text-white"><MessageSquare size={20} /></div>
              <div><h3 className="font-bold">Jordan Business Bot</h3><span className="text-xs text-emerald-400">En línea</span></div>
            </div>
            <div className="p-6 h-96 overflow-y-auto space-y-4 flex flex-col">
              {chatMessages.map((msg, index) => (
                <div key={index} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-xs md:max-w-md p-4 rounded-2xl text-sm ${msg.sender === 'user' ? 'bg-jordanRed text-white' : 'bg-neutral-900 border border-neutral-800 text-neutral-200'}`}>
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>
            <form onSubmit={handleSendMessage} className="p-4 bg-neutral-900 border-t border-neutral-800 flex space-x-2">
              <input type="text" value={chatInput} onChange={(e) => setChatInput(e.target.value)} placeholder="Pregunta por modelos, precios o di 'Hombre' / 'Mujer'..." className="flex-1 bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none" />
              <button type="submit" className="bg-jordanRed text-white p-3 rounded-xl"><Send size={18} /></button>
            </form>
          </div>
        )}
      </main>

      {isLoginOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="fixed inset-0 bg-black/70 backdrop-blur-sm" onClick={() => setIsLoginOpen(false)}></div>
          <div className="relative bg-neutral-950 border border-neutral-800 p-8 rounded-3xl w-full max-w-md z-10 space-y-6 shadow-2xl animate-fade-in">
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-2">
                <Lock size={20} className="text-jordanRed" />
                <span className="text-xl font-black text-jordanRed italic">INICIAR SESIÓN</span>
              </div>
              <button onClick={() => setIsLoginOpen(false)} className="text-neutral-400 hover:text-white"><X size={20}/></button>
            </div>

            <form onSubmit={handleLoginSubmit} className="space-y-4">
              {loginError && (
                <div className="bg-red-950/40 border border-red-800 text-red-400 p-3 rounded-xl text-xs flex items-center space-x-2">
                  <AlertTriangle size={16}/><span>{loginError}</span>
                </div>
              )}
              <div className="space-y-1">
                <label className="text-xs text-neutral-400 font-bold uppercase">Correo Electrónico</label>
                <input 
                  type="email" 
                  placeholder="usuario@jordan.com" 
                  value={loginEmail} 
                  onChange={(e) => setLoginEmail(e.target.value)} 
                  className="w-full bg-neutral-900 border border-neutral-800 rounded-xl p-3 text-sm text-white focus:outline-none focus:border-jordanRed transition"
                />
              </div>
              <div className="space-y-1">
                <label className="text-xs text-neutral-400 font-bold uppercase">Contraseña</label>
                <input 
                  type="password" 
                  placeholder="••••••••" 
                  value={loginPassword} 
                  onChange={(e) => setLoginPassword(e.target.value)} 
                  className="w-full bg-neutral-900 border border-neutral-800 rounded-xl p-3 text-sm text-white focus:outline-none focus:border-jordanRed transition"
                />
              </div>
              <button type="submit" className="w-full bg-jordanRed text-white font-bold py-3 rounded-xl transition hover:bg-red-700 shadow-lg shadow-jordanRed/20">
                Acceder al Sistema
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}