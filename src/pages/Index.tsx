import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { useEffect, useState } from "react";

const Index = () => {
  const [codeBlocks, setCodeBlocks] = useState<{ id: number; x: number; y: number; code: string; delay: number }[]>([]);

  const codeSnippets = [
    "public class Player : MonoBehaviour",
    "void Start() { Debug.Log(\"Game Started\"); }",
    "transform.Translate(Vector3.forward * speed);",
    "if (Input.GetKeyDown(KeyCode.Space))",
    "Rigidbody rb = GetComponent<Rigidbody>();",
    "void OnTriggerEnter(Collider other)",
    "GameObject.Instantiate(bulletPrefab);",
    "animator.SetBool(\"isRunning\", true);",
    "Camera.main.transform.LookAt(target);",
    "AudioSource.PlayClipAtPoint(sound, pos);"
  ];

  useEffect(() => {
    const blocks = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      code: codeSnippets[Math.floor(Math.random() * codeSnippets.length)],
      delay: Math.random() * 20
    }));
    setCodeBlocks(blocks);
  }, []);
  const courses = [
    {
      id: 1,
      title: "Основы Unity 3D",
      description: "Изучите базовые принципы создания 3D игр в Unity",
      duration: "8 недель",
      level: "Начальный",
      price: "12,990₽",
      image: "/img/0c7a7ace-af90-41c2-8a3b-9d1513124ef4.jpg",
      skills: ["Unity Interface", "GameObjects", "Scripts", "Physics"]
    },
    {
      id: 2,
      title: "3D Моделирование для игр",
      description: "Создание и оптимизация 3D моделей для игровых проектов",
      duration: "6 недель", 
      level: "Средний",
      price: "15,990₽",
      image: "/img/460597a1-a1ca-4e73-9859-5e3a0c00d257.jpg",
      skills: ["Blender", "Texturing", "Animation", "Optimization"]
    },
    {
      id: 3,
      title: "Продвинутая разработка",
      description: "Создание сложных игровых механик и системы",
      duration: "12 недель",
      level: "Продвинутый", 
      price: "22,990₽",
      image: "/img/0c7a7ace-af90-41c2-8a3b-9d1513124ef4.jpg",
      skills: ["AI Systems", "Shaders", "Networking", "Performance"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-unity-dark via-gray-900 to-unity-dark font-roboto relative overflow-hidden">
      {/* Floating Code Blocks */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {codeBlocks.map((block) => (
          <div
            key={block.id}
            className="absolute text-unity-orange/30 font-mono text-sm animate-slide-up opacity-40 whitespace-nowrap"
            style={{
              left: `${block.x}%`,
              top: `${block.y}%`,
              animationDelay: `${block.delay}s`,
              animationDuration: '12s'
            }}
          >
            {block.code}
          </div>
        ))}
      </div>
      {/* Header */}
      <header className="border-b border-unity-gray/20 bg-unity-dark/95 backdrop-blur-sm sticky top-0 z-50 relative">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-unity-orange rounded-lg flex items-center justify-center">
                <Icon name="Gamepad2" size={24} className="text-white" />
              </div>
              <h1 className="text-2xl font-bold text-white">Unity Academy</h1>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#courses" className="text-gray-300 hover:text-unity-orange transition-colors">Курсы</a>
              <a href="#about" className="text-gray-300 hover:text-unity-orange transition-colors">О нас</a>
              <a href="#contact" className="text-gray-300 hover:text-unity-orange transition-colors">Контакты</a>
            </div>
            
            <Button className="bg-unity-orange hover:bg-unity-orange/90 text-white">
              Войти
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 relative z-10">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Создавай игры в
              <span className="text-unity-orange block md:inline md:ml-4">Unity 3D</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Профессиональные курсы по разработке 3D игр и работе с моделями. 
              От основ до продвинутых техник создания игровых миров.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" className="bg-unity-orange hover:bg-unity-orange/90 text-white text-lg px-8 py-4">
                <Icon name="Play" size={20} className="mr-2" />
                Начать обучение
              </Button>
              <Button size="lg" variant="outline" className="border-unity-blue text-unity-blue hover:bg-unity-blue hover:text-white text-lg px-8 py-4">
                <Icon name="BookOpen" size={20} className="mr-2" />
                Демо-урок
              </Button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-unity-orange mb-2">500+</div>
                <div className="text-gray-400">Выпускников</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-unity-orange mb-2">15</div>
                <div className="text-gray-400">Курсов</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-unity-orange mb-2">95%</div>
                <div className="text-gray-400">Трудоустройство</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-unity-orange mb-2">24/7</div>
                <div className="text-gray-400">Поддержка</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section id="courses" className="py-20 px-4 bg-gray-900/50 relative z-10">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Популярные курсы</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Выберите программу обучения, которая подходит вашему уровню и целям
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course) => (
              <Card key={course.id} className="bg-unity-dark/80 border-unity-gray/20 hover:border-unity-orange/50 transition-all duration-300 hover:transform hover:scale-105">
                <div className="aspect-video overflow-hidden rounded-t-lg">
                  <img 
                    src={course.image} 
                    alt={course.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge 
                      variant={course.level === 'Начальный' ? 'secondary' : course.level === 'Средний' ? 'default' : 'destructive'}
                      className="text-xs"
                    >
                      {course.level}
                    </Badge>
                    <span className="text-unity-blue font-semibold">{course.duration}</span>
                  </div>
                  
                  <CardTitle className="text-white text-xl">{course.title}</CardTitle>
                  <CardDescription className="text-gray-300">
                    {course.description}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="space-y-3">
                    <div className="flex flex-wrap gap-2">
                      {course.skills.map((skill) => (
                        <Badge key={skill} variant="outline" className="text-xs border-unity-blue/30 text-unity-blue">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>

                <CardFooter className="flex justify-between items-center">
                  <div className="text-2xl font-bold text-unity-orange">
                    {course.price}
                  </div>
                  <Button className="bg-unity-orange hover:bg-unity-orange/90 text-white">
                    <Icon name="ShoppingCart" size={16} className="mr-2" />
                    Записаться
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Почему выбирают нас?</h2>
            <p className="text-xl text-gray-300">Все необходимое для успешной карьеры в геймдеве</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="w-16 h-16 bg-unity-orange/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-unity-orange/30 transition-colors">
                <Icon name="Code" size={32} className="text-unity-orange" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Практические проекты</h3>
              <p className="text-gray-300">Создавайте реальные игры в процессе обучения</p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-unity-blue/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-unity-blue/30 transition-colors">
                <Icon name="Users" size={32} className="text-unity-blue" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Менторство</h3>
              <p className="text-gray-300">Персональная поддержка от опытных разработчиков</p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-unity-orange/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-unity-orange/30 transition-colors">
                <Icon name="Trophy" size={32} className="text-unity-orange" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Сертификация</h3>
              <p className="text-gray-300">Получите признанные в индустрии сертификаты</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-unity-orange to-unity-blue">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Готов начать свой путь в геймдеве?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Присоединяйся к тысячам разработчиков, которые уже создают удивительные игры
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-unity-orange hover:bg-gray-100 text-lg px-8 py-4">
              <Icon name="Rocket" size={20} className="mr-2" />
              Начать бесплатно
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-unity-orange text-lg px-8 py-4">
              <Icon name="MessageCircle" size={20} className="mr-2" />
              Задать вопрос
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-unity-dark border-t border-unity-gray/20 py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-unity-orange rounded-lg flex items-center justify-center">
                  <Icon name="Gamepad2" size={20} className="text-white" />
                </div>
                <h3 className="text-lg font-bold text-white">Unity Academy</h3>
              </div>
              <p className="text-gray-400">
                Профессиональное обучение разработке игр в Unity 3D
              </p>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Курсы</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-unity-orange transition-colors">Основы Unity</a></li>
                <li><a href="#" className="hover:text-unity-orange transition-colors">3D Моделирование</a></li>
                <li><a href="#" className="hover:text-unity-orange transition-colors">Программирование</a></li>
                <li><a href="#" className="hover:text-unity-orange transition-colors">Game Design</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Поддержка</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-unity-orange transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-unity-orange transition-colors">Документация</a></li>
                <li><a href="#" className="hover:text-unity-orange transition-colors">Сообщество</a></li>
                <li><a href="#" className="hover:text-unity-orange transition-colors">Контакты</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-gray-400">
                <div className="flex items-center space-x-2">
                  <Icon name="Mail" size={16} />
                  <span>info@unityacademy.ru</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Phone" size={16} />
                  <span>+7 (495) 123-45-67</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-unity-gray/20 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Unity Academy. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;