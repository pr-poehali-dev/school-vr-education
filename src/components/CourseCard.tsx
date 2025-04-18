import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { BadgeInfo, Clock, Users } from "lucide-react";

export interface CourseProps {
  id: string;
  title: string;
  description: string;
  image: string;
  level: "Начальный" | "Средний" | "Продвинутый";
  duration: string;
  students: number;
}

const CourseCard: React.FC<CourseProps> = ({
  title,
  description,
  image,
  level,
  duration,
  students
}) => {
  return (
    <Card className="overflow-hidden group hover:shadow-lg transition-shadow duration-300">
      <div className="relative h-48 overflow-hidden">
        <img
          src={image || "/placeholder.svg"}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-2 right-2 bg-white/90 text-primary font-medium px-2 py-1 rounded-full text-xs">
          {level}
        </div>
      </div>
      
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-bold">{title}</CardTitle>
        <CardDescription className="line-clamp-2">{description}</CardDescription>
      </CardHeader>
      
      <CardContent className="pb-2">
        <div className="flex justify-between text-sm text-gray-600">
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4 text-vr-blue" />
            <span>{duration}</span>
          </div>
          <div className="flex items-center gap-1">
            <Users className="h-4 w-4 text-vr-purple" />
            <span>{students} учеников</span>
          </div>
        </div>
      </CardContent>
      
      <CardFooter>
        <Button className="w-full bg-gradient-to-r from-vr-blue to-vr-purple">
          Подробнее
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CourseCard;