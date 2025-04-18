import { Headset } from "lucide-react";
import { Button } from "./ui/button";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden py-20 md:py-32 bg-gradient-to-br from-background to-gray-100">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-vr-blue via-vr-purple to-vr-cyan">
              Учись в новом измерении
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-6">
              Инновационная школа с VR-технологиями для эффективного и увлекательного обучения. Погрузись в образовательную среду будущего уже сегодня!
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-gradient-to-r from-vr-blue to-vr-purple text-white hover:shadow-lg transition-shadow px-8 py-6 text-lg">
                <Headset className="mr-2 h-5 w-5" />
                Начать обучение
              </Button>
              <Button variant="outline" className="border-primary text-primary hover:bg-primary/5 px-8 py-6 text-lg">
                Узнать больше
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative w-full h-80 md:h-96">
              <div className="animate-float absolute -top-4 -right-4 w-48 h-48 rounded-2xl bg-gradient-to-br from-vr-blue/20 to-vr-blue/10 backdrop-blur-sm border border-white/20"></div>
              <div className="animate-float animation-delay-500 absolute top-20 right-20 w-64 h-64 rounded-2xl bg-gradient-to-br from-vr-purple/20 to-vr-purple/10 backdrop-blur-sm border border-white/20"></div>
              <div className="animate-float animation-delay-1000 absolute bottom-0 right-10 w-56 h-56 rounded-2xl bg-gradient-to-br from-vr-cyan/20 to-vr-cyan/10 backdrop-blur-sm border border-white/20"></div>
              <img 
                src="/placeholder.svg" 
                alt="Студент в VR-очках"
                className="absolute inset-0 m-auto h-72 w-72 object-contain z-10"
              />
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute top-1/3 left-0 w-64 h-64 bg-vr-blue/10 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-vr-purple/10 rounded-full filter blur-3xl"></div>
    </section>
  );
};

export default HeroSection;