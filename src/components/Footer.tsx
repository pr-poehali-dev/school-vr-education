import { Link } from "react-router-dom";
import { GraduationCap, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-center gap-2 text-white font-bold text-xl mb-4">
              <GraduationCap className="h-6 w-6" />
              <span>ВР-Школа</span>
            </Link>
            <p className="text-gray-300 mb-4">
              Инновационное обучение с применением технологий виртуальной реальности для школьников всех возрастов
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Навигация</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition">
                  Главная
                </Link>
              </li>
              <li>
                <Link to="/courses" className="text-gray-300 hover:text-white transition">
                  Курсы
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition">
                  О нас
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition">
                  Контакты
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Контакты</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-vr-blue" />
                <span className="text-gray-300">+7 (123) 456-78-90</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-vr-blue" />
                <span className="text-gray-300">info@vr-school.ru</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-vr-blue" />
                <span className="text-gray-300">г. Москва, ул. Примерная, д. 123</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Часы работы</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Понедельник - Пятница: 9:00 - 18:00</li>
              <li>Суббота: 10:00 - 15:00</li>
              <li>Воскресенье: Выходной</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} ВР-Школа. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;