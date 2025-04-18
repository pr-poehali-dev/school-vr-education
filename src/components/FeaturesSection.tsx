import { Monitor, BookOpen, Brain, Headset, Award, Clock } from "lucide-react";

const features = [
  {
    icon: <Monitor className="h-10 w-10 text-vr-blue" />,
    title: "Современное оборудование",
    description: "Используем самые последние модели VR-очков и мощные компьютеры для полного погружения"
  },
  {
    icon: <BookOpen className="h-10 w-10 text-vr-purple" />,
    title: "Адаптированная программа",
    description: "Учебные материалы специально разработаны для обучения в виртуальной реальности"
  },
  {
    icon: <Brain className="h-10 w-10 text-vr-cyan" />,
    title: "Развитие когнитивных навыков",
    description: "VR-обучение активирует дополнительные участки мозга, улучшая восприятие информации"
  },
  {
    icon: <Headset className="h-10 w-10 text-vr-blue" />,
    title: "Полное погружение",
    description: "Учащиеся погружаются в образовательную среду на 100%, что устраняет отвлекающие факторы"
  },
  {
    icon: <Award className="h-10 w-10 text-vr-purple" />,
    title: "Сертифицированные преподаватели",
    description: "Наши педагоги прошли специальную подготовку для работы с VR-технологиями"
  },
  {
    icon: <Clock className="h-10 w-10 text-vr-cyan" />,
    title: "Эффективное обучение",
    description: "Исследования показывают, что VR-обучение на 30% эффективнее традиционного"
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Почему VR-обучение эффективно</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Технологии виртуальной реальности открывают новые возможности в образовании, 
            делая процесс обучения более интерактивным и увлекательным
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="p-6 rounded-lg border border-gray-100 hover:shadow-md transition-shadow bg-white"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;