import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, GraduationCap, Headset } from "lucide-react";
import { Button } from "./ui/button";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="border-b shadow-sm bg-white sticky top-0 z-50">
      <div className="container flex justify-between items-center h-16 px-4 md:px-6">
        <Link to="/" className="flex items-center gap-2 text-primary font-bold text-xl">
          <GraduationCap className="h-6 w-6" />
          <span>ВР-Школа</span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-gray-700 hover:text-primary font-medium">
            Главная
          </Link>
          <Link to="/courses" className="text-gray-700 hover:text-primary font-medium">
            Курсы
          </Link>
          <Link to="/about" className="text-gray-700 hover:text-primary font-medium">
            О нас
          </Link>
          <Link to="/contact" className="text-gray-700 hover:text-primary font-medium">
            Контакты
          </Link>
          <Button className="bg-gradient-to-r from-vr-blue to-vr-purple text-white">
            <Headset className="mr-2 h-4 w-4" />
            Начать обучение
          </Button>
        </nav>
        
        <Button 
          variant="ghost" 
          size="icon" 
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </Button>
      </div>
      
      {isOpen && (
        <div className="md:hidden p-4 bg-white border-t">
          <nav className="flex flex-col space-y-4">
            <Link 
              to="/" 
              className="text-gray-700 hover:text-primary font-medium px-2 py-1"
              onClick={() => setIsOpen(false)}
            >
              Главная
            </Link>
            <Link 
              to="/courses" 
              className="text-gray-700 hover:text-primary font-medium px-2 py-1"
              onClick={() => setIsOpen(false)}
            >
              Курсы
            </Link>
            <Link 
              to="/about" 
              className="text-gray-700 hover:text-primary font-medium px-2 py-1"
              onClick={() => setIsOpen(false)}
            >
              О нас
            </Link>
            <Link 
              to="/contact" 
              className="text-gray-700 hover:text-primary font-medium px-2 py-1"
              onClick={() => setIsOpen(false)}
            >
              Контакты
            </Link>
            <Button className="bg-gradient-to-r from-vr-blue to-vr-purple text-white w-full">
              <Headset className="mr-2 h-4 w-4" />
              Начать обучение
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;