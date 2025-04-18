import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Card, CardContent } from "./ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Анна Петрова",
    role: "Мама ученика, 12 лет",
    image: "",
    content: "Мой сын всегда не любил физику, но после VR-курса он буквально влюбился в этот предмет. Теперь он видит, как работают законы физики, а не просто читает о них в учебнике.",
    rating: 5
  },
  {
    name: "Михаил Сидоров",
    role: "Ученик, 15 лет",
    image: "",
    content: "Биология в VR - это совсем другое дело! Я смог путешествовать внутри клетки и видеть все процессы своими глазами. Информация усваивается намного лучше.",
    rating: 5
  },
  {
    name: "Екатерина Иванова",
    role: "Преподаватель",
    image: "",
    content: "Как педагог с 15-летним стажем, я была удивлена, насколько VR-технологии могут улучшить вовлеченность учеников. Материал усваивается быстрее и надолго.",
    rating: 4
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Отзывы о нашей школе</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Узнайте, что говорят ученики и родители о нашем VR-обучении
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="h-full">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star 
                      key={i} 
                      className={`h-4 w-4 ${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
                    />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <Avatar className="h-10 w-10 mr-3">
                    <AvatarImage src={testimonial.image} alt={testimonial.name} />
                    <AvatarFallback className="bg-primary text-primary-foreground">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;