'use client';

import { useState, useEffect } from 'react';
import Peixesvivos from './Page1/_component1/Peixesvivos';
import PainelControle from './Page1/_component1/PainelControle';
import Link from 'next/link';
import Foton from './Page1/_component1/foto.png';
import Peixeobj from './Page1/_component1/PeixeObj.jsx';
import Peixe1 from './Page1/_component1/peixe1.png';
import Peixe2 from './Page1/_component1/peixe2.png';

import dadosIniciais from '../Data/aquarioData.json';

export default function Page() {
  const [agua, setAgua] = useState({
    ...dadosIniciais.agua,
    nitrito: 0.0
  });
  
  const [peixes, setPeixes] = useState(
    dadosIniciais.peixes.map(p => ({ ...p, tempoSemComer: 0 }))
  );
  
  const [podeAlimentar, setPodeAlimentar] = useState(true);
  const [podeMexerTemp, setPodeMexerTemp] = useState(true);
  const [podeMexerAmonia, setPodeMexerAmonia] = useState(true);
  const [podeMexerNitrito, setPodeMexerNitrito] = useState(true);
  const [podeMexerPh, setPodeMexerPh] = useState(true);

  const [amoniaTimeChange, setAmoniaTimeChange] = useState(0);
  const [temperaturaDirecao, setTemperaturaDirecao] = useState(null);

  const getPeixe = (id) => {
    const peixeEncontrado = peixes.find((p) => p.id === id);
    return peixeEncontrado ? peixeEncontrado : { saude: 100, tempoSemComer: 0 };
  };

  // GAME LOOP
  useEffect(() => {
    const timer = setInterval(() => {
      setAgua((prevAgua) => {
        let novaAmonia = prevAgua.amonia;
        let novoPh = prevAgua.ph;
        let novaTemp = prevAgua.temperatura;

        if (amoniaTimeChange > 0) {
          novaAmonia = Number((novaAmonia + amoniaTimeChange).toFixed(3));
        }

        if (amoniaTimeChange > 0) {
          const pHTimeChange = amoniaTimeChange / 4;
          novoPh = Number((novoPh + pHTimeChange).toFixed(2));
        }

        if (!temperaturaDirecao) {
          const evento = Math.random() < 0.5 ? 'subir' : 'descer';
          setTemperaturaDirecao(evento);
        } else {
          if (temperaturaDirecao === 'subir') {
            novaTemp = Number((novaTemp + 0.5).toFixed(1));
          } else {
            novaTemp = Number((novaTemp - 0.5).toFixed(1));
          }
          if (novaTemp >= 32 || novaTemp <= 18) {
            setTemperaturaDirecao(temperaturaDirecao === 'subir' ? 'descer' : 'subir');
          }
        }

        return { ...prevAgua, amonia: novaAmonia, ph: novoPh, temperatura: novaTemp };
      });

      setPeixes((prevPeixes) =>
        prevPeixes.map((peixe) => {
          if (peixe.saude <= 0) return peixe;

          const desvioAmonia = Math.max(0, agua.amonia - peixe.amoniaMax);
          let danoAmonia = desvioAmonia > 0 ? (desvioAmonia <= 0.01 ? 0.6 : 0.6 + ((desvioAmonia - 0.01) / 0.01) * 0.3) : 0;

          const limiteNitrito = 0.05; 
          const desvioNitrito = Math.max(0, agua.nitrito - limiteNitrito);
          let danoNitrito = desvioNitrito > 0 ? 0.5 + ((desvioNitrito - 0.01) / 0.01) * 0.3 : 0;

          let desvioPh = agua.ph < peixe.phMin ? peixe.phMin - agua.ph : (agua.ph > peixe.phMax ? agua.ph - peixe.phMax : 0);
          let danoPh = desvioPh * 3; 

          let desvioTemp = agua.temperatura < peixe.tempMin ? peixe.tempMin - agua.temperatura : (agua.temperatura > peixe.tempMax ? agua.temperatura - peixe.tempMax : 0);
          let danoTemp = desvioTemp > 0 ? 0.6 + (desvioTemp * 1) : 0;

          const novoTempoSemComer = peixe.tempoSemComer + 1;
          let danoFome = novoTempoSemComer >= 4 ? 2 : 0;

          let danoTotal = Math.min(15, danoAmonia + danoNitrito + danoPh + danoTemp + danoFome);

          return { ...peixe, saude: Math.max(0, peixe.saude - danoTotal), tempoSemComer: novoTempoSemComer };
        })
      );
    }, 3000);

    return () => clearInterval(timer);
  }, [amoniaTimeChange, temperaturaDirecao, agua.amonia, agua.nitrito, agua.ph, agua.temperatura]);

  const handleAlimentar = (idPeixe) => {
    if (!podeAlimentar) return; 
    const peixeAlvo = getPeixe(idPeixe);
    if (peixeAlvo.saude <= 0) return;

    setPodeAlimentar(false);
    setTimeout(() => setPodeAlimentar(true), 2000);

    setAmoniaTimeChange((prev) => Number((prev + 0.01).toFixed(3)));

    let fatorEficacia = Math.max(0.2, 1 - (agua.amonia * 0.5) - (Math.abs(agua.ph - 7.0) * 0.2));
    let curaEfetiva = Math.max(1, Math.round(8 * fatorEficacia));

    setPeixes((prev) =>
      prev.map((p) => (p.id === idPeixe && p.saude > 0 ? { ...p, saude: Math.min(100, p.saude + curaEfetiva), tempoSemComer: 0 } : p))
    );
  };

  const handleMudarTemperatura = (valor) => {
    if (!podeMexerTemp) return;
    setPodeMexerTemp(false);
    setTimeout(() => setPodeMexerTemp(true), 500);
    setAgua((prev) => ({ ...prev, temperatura: Number((prev.temperatura + valor).toFixed(1)) }));
  };

  const handleTratarAmonia = () => {
    if (!podeMexerAmonia || agua.amonia <= 0) return;
    setPodeMexerAmonia(false);
    setTimeout(() => setPodeMexerAmonia(true), 3000);
    setAgua((prev) => {
      const removida = prev.amonia * 0.8;
      return { ...prev, amonia: Number((prev.amonia - removida).toFixed(3)), nitrito: Number((prev.nitrito + removida).toFixed(3)) };
    });
    setAmoniaTimeChange(0);
  };

  const handleMudarPh = (valor) => {
    if (!podeMexerPh) return;
    setPodeMexerPh(false);
    setTimeout(() => setPodeMexerPh(true), 1000);
    setAgua((prev) => ({ ...prev, ph: Number((prev.ph + valor).toFixed(2)) }));
  };

  const handleTratarNitrito = () => {
    if (!podeMexerNitrito || agua.nitrito <= 0) return;
    setPodeMexerNitrito(false);
    setTimeout(() => setPodeMexerNitrito(true), 6000);
    setAgua((prev) => ({ ...prev, nitrito: Number((prev.nitrito * 0.5).toFixed(3)) }));
  };

  return (
    <div className="p-6 max-w-7xl mx-auto flex flex-col gap-6 bg-[#f4f1ea] min-h-screen font-serif text-black relative">
      
      {/* Cabeçalho */}
      <div className="border-b-4 border-black pb-4 text-center">
        <span className="text-xs font-sans uppercase tracking-widest bg-black text-white px-2 py-0.5">Vol. 1 • Seção de Aquaristas da Comunidade</span>
        <h1 className="text-4xl font-black tracking-widest uppercase mt-2">The Daily Aquarium Gazette</h1>
        <p className="text-sm font-sans italic text-gray-700 mt-1">&quot;O espaço oficial onde os cidadãos publicam e gerenciam seus ecossistemas aquáticos.&quot;</p>
      </div>

      {/* Grid Principal */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-6 items-start">
        
        {/* Aquário */}
        <div className="relative w-full max-w-[800px] h-80 border-4 border-black bg-white shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] overflow-hidden">
          <div className="absolute top-2 left-2 bg-black text-white text-[10px] font-sans px-2 py-0.5 z-20 uppercase tracking-wider">
            Exibição do Aquário Atual (Publicado por Leitor)
          </div>
          <img className="w-full h-full object-cover filter contrast-110 pt-5" src={Foton.src} alt="Cenário do Aquário" />
          
          <div className={`absolute left-1/2 -translate-x-1/2 z-10 transition-all duration-[3000ms] ease-in-out ${getPeixe('bandeira').saude <= 0 ? '-top-6' : 'bottom-4'}`}>
            <Peixeobj imagem={Peixe2.src} morto={getPeixe('bandeira').saude <= 0} />
          </div>

          <div className={`absolute left-1/3 -translate-x-1/2 z-10 transition-all duration-[3000ms] ease-in-out ${getPeixe('corydoras').saude <= 0 ? '-top-6' : 'top-1/4'}`}>
            <Peixeobj imagem={Peixe1.src} morto={getPeixe('corydoras').saude <= 0} />
          </div>
        </div>
        
        {/* Coluna Direita (Monitores) */}
        <div className="flex flex-col gap-6 transform rotate-[0.5deg]">
          
          <div className="relative border-4 border-black bg-[#e9e5dc] p-4 shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] flex flex-col gap-2">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-4 bg-yellow-200 opacity-80 border border-black/30 transform rotate-1"></div>
            <div className="border-b-2 border-black pb-1"><span className="font-sans font-black text-xs uppercase">Monitor: Peixe Bandeira</span></div>
            <Peixesvivos peixeData={getPeixe('bandeira')} amoniaAtual={agua.amonia} onAlimentar={() => handleAlimentar('bandeira')} cooldown={!podeAlimentar} imagem={Peixe2.src} />
          </div>

          <div className="relative border-4 border-black bg-[#e9e5dc] p-4 shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] flex flex-col gap-2">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-4 bg-yellow-200 opacity-80 border border-black/30 transform -rotate-1"></div>
            <div className="border-b-2 border-black pb-1"><span className="font-sans font-black text-xs uppercase">Monitor: Corydoras</span></div>
            <Peixesvivos peixeData={getPeixe('corydoras')} amoniaAtual={agua.amonia} onAlimentar={() => handleAlimentar('corydoras')} cooldown={!podeAlimentar} imagem={Peixe1.src} />
          </div>

        </div>

      </div>

      {/* Painel de Controle Modularizado */}
      <PainelControle
        agua={agua}
        temperaturaDirecao={temperaturaDirecao}
        podeMexerPh={podeMexerPh}
        podeMexerAmonia={podeMexerAmonia}
        podeMexerNitrito={podeMexerNitrito}
        podeMexerTemp={podeMexerTemp}
        podeAlimentar={podeAlimentar}
        onMudarPh={handleMudarPh}
        onTratarAmonia={handleTratarAmonia}
        onTratarNitrito={handleTratarNitrito}
        onMudarTemperatura={handleMudarTemperatura}
      />

      {/* Rodapé */}
      <div className="w-full max-w-[1216px] h-16 border-4 border-black bg-white flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transform rotate-[-0.2deg]">
        <p className="font-sans text-xs tracking-widest uppercase font-bold">The Daily Aquarium Gazette • Artigo Científico Interativo para TCC</p>
      </div>

      <div className="pt-2">
        <Link href="./Page2" className="inline-block px-4 py-2 bg-black text-white font-sans font-bold text-sm uppercase border-2 border-black shadow-[4px_4px_0px_0px_rgba(100,100,100,1)] hover:bg-gray-800 transition transform rotate-[-0.5deg]">
          Ler Artigo: Como montar um aquário na vida real →
        </Link>
      </div>
    </div>
  );
}