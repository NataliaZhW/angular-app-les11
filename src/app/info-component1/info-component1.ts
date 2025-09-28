import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-info-component1',
  standalone: true, // ← ДОБАВЬТЕ ЭТО
  imports: [CommonModule, FormsModule], // ← ДОБАВЬТЕ ЭТО
  templateUrl: './info-component1.html',
  styleUrl: './info-component1.css'
})
// @Component({
//   selector: 'app-info-component1',
//   // standalone: true, 
//   imports: [CommonModule, FormsModule], 
//   templateUrl: './info-component1.html',
//   styleUrl: './info-component1.css'
// })
export class InfoComponent1Component {
  cityName: string = 'Орёл';
  foundedYear: number = 1566;
  population: number = 303169;
  area: number = 121.2;
  
  // Объект с информацией о городе
  cityInfo = {
    founder: 'Иван Грозный',
    nickname: 'Город первого салюта',
    timeZone: 'UTC+3',
    language: 'Русский',
    region: 'Орловская область',
    river: 'Ока'
  };

  // Массив достопримечательностей
  attractions = [
    { name: 'Орловский краеведческий музей', type: 'Музей', visited: true, rating: 5 },
    { name: 'Скульптура Орла', type: 'Памятник', visited: true, rating: 4 },
    { name: 'Тургеневский бережок', type: 'Парк', visited: false, rating: 5 },
    { name: 'Музей Тургенева', type: 'Музей', visited: true, rating: 5 },
    { name: 'Богоявленский собор', type: 'Собор', visited: false, rating: 4 },
    { name: 'Парк Победы', type: 'Парк', visited: true, rating: 4 },
    { name: 'Дворянское гнездо', type: 'Литературный музей', visited: false, rating: 5 }
  ];

  // Исторические факты
  historicalFacts = [
    'Основан в 1566 году как крепость для защиты южных границ Московского государства',
    'В Орле родились писатели И.С. Тургенев, Н.С. Лесков, Л.Н. Андреев',
    '5 августа 1943 года в Орле был дан первый в истории Великой Отечественной войны салют',
    'Город является крупным образовательным центром Центральной России'
  ];

  // Свойства для двусторонней привязки
  newAttraction: string = '';
  searchTerm: string = '';

  // Метод для добавления новой достопримечательности
  addAttraction() {
    if (this.newAttraction.trim()) {
      this.attractions.push({ 
        name: this.newAttraction, 
        type: 'Новая', 
        visited: false, 
        rating: 0 
      });
      this.newAttraction = '';
    }
  }

  // Метод для удаления достопримечательности
  removeAttraction(index: number) {
    this.attractions.splice(index, 1);
  }

  // Геттер для отфильтрованных достопримечательностей
  get filteredAttractions() {
    if (!this.searchTerm) {
      return this.attractions;
    }
    return this.attractions.filter(attraction => 
      attraction.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  // Вычисляемое свойство
  get visitedCount(): number {
    return this.attractions.filter(attraction => attraction.visited).length;
  }

  // Метод для изменения статуса посещения
  toggleVisited(index: number) {
    this.attractions[index].visited = !this.attractions[index].visited;
  }

  // Метод для получения цвета рейтинга
  getRatingColor(rating: number): string {
    if (rating >= 4) return '#27ae60';
    if (rating >= 3) return '#f39c12';
    return '#e74c3c';
  }

  // Метод для получения герба города
  getCoatOfArmsDescription(): string {
    return 'Герб Орла представляет собой серебряный щит, в лазоревом поле которого сидит чёрный одноглавый орёл с золотыми клювом и лапами';
  }
}