import { Mail, Phone, MapPin } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

const ContactSection = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-4">Свяжитесь с нами</h2>
            <p className="text-gray-600 mb-8">
              У вас остались вопросы или вы хотите записать ребенка на пробное занятие? 
              Свяжитесь с нами любым удобным способом или оставьте заявку, и мы вам перезвоним.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <Phone className="h-5 w-5 text-primary mt-1 mr-3" />
                <div>
                  <p className="font-medium">Телефон</p>
                  <p className="text-gray-600">+7 (123) 456-78-90</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Mail className="h-5 w-5 text-primary mt-1 mr-3" />
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-gray-600">info@vr-school.ru</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-primary mt-1 mr-3" />
                <div>
                  <p className="font-medium">Адрес</p>
                  <p className="text-gray-600">г. Москва, ул. Примерная, д. 123</p>
                  <p className="text-gray-500 text-sm">
                    Пн-Пт: 9:00 - 18:00<br />
                    Сб: 10:00 - 15:00<br />
                    Вс: Выходной
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-100">
            <h3 className="text-xl font-semibold mb-6">Оставить заявку</h3>
            
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Имя
                  </label>
                  <Input id="name" placeholder="Введите ваше имя" />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Телефон
                  </label>
                  <Input id="phone" placeholder="+7 (___) ___-__-__" />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <Input id="email" type="email" placeholder="Введите ваш email" />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Сообщение
                </label>
                <Textarea id="message" placeholder="Напишите ваш вопрос или комментарий" rows={4} />
              </div>
              
              <Button className="w-full bg-gradient-to-r from-vr-blue to-vr-purple">
                Отправить заявку
              </Button>
              
              <p className="text-xs text-gray-500 text-center mt-4">
                Нажимая кнопку "Отправить заявку", вы соглашаетесь с нашей 
                политикой конфиденциальности и даете согласие на обработку персональных данных.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;