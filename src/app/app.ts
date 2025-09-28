import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  // Данные о городе Орёл
  cityName: string = 'Орёл';
  foundedYear: number = 1566;
  population: number = 303169;
  
  // Массив достопримечательностей
  attractions = [
    { name: 'Орловский краеведческий музей', visited: true },
    { name: 'Скульптура Орла', visited: true },
    { name: 'Тургеневский бережок', visited: false }
  ];

  // Для двусторонней привязки
  newAttraction: string = '';

  // Метод добавления
  addAttraction() {
    if (this.newAttraction) {
      this.attractions.push({ name: this.newAttraction, visited: false });
      this.newAttraction = '';
    }
  }

  // Переключение статуса
  toggleVisited(index: number) {
    this.attractions[index].visited = !this.attractions[index].visited;
  }
}