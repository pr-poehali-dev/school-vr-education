import { Button } from "./ui/button";
import CourseCard, { CourseProps } from "./CourseCard";

const popularCourses: CourseProps[] = [
  {
    id: "1",
    title: "Основы физики в VR",
    description: "Изучите базовые законы физики через интерактивные эксперименты в виртуальной реальности",
    image: "/placeholder.svg",
    level: "Начальный",
    duration: "8 недель",
    students: 120
  },
  {
    id: "2",
    title: "Виртуальное путешествие в космос",
    description: "Исследуйте планеты солнечной системы и далекие галактики в формате виртуальной реальности",
    image: "/placeholder.svg",
    level: "Начальный",
    duration: "6 недель",
    students: 98
  },
  {
    id: "3",
    title: "Биология человека в 3D",
    description: "Детальное изучение анатомии и физиологии человека с возможностью взаимодействия с 3D-моделями",
    image: "/placeholder.svg",
    level: "Средний",
    duration: "10 недель",
    students: 75
  }
];

const PopularCourses = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-3xl font-bold mb-2">Популярные курсы</h2>
            <p className="text-gray-600">Самые востребованные программы обучения в VR-формате</p>
          </div>
          <Button variant="outline" className="hidden md:flex">
            Все курсы
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {popularCourses.map((course) => (
            <CourseCard key={course.id} {...course} />
          ))}
        </div>
        
        <div className="mt-8 text-center md:hidden">
          <Button variant="outline">
            Все курсы
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PopularCourses;