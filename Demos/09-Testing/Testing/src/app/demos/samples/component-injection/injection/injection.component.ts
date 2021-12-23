import { Component, OnInit } from '@angular/core';
import { FoodService } from '../../foodService/food.service';
import { FoodItem } from '../../model/food-item.model';

@Component({
  selector: 'app-injection',
  templateUrl: './injection.component.html',
  styleUrls: ['./injection.component.scss'],
})
export class InjectionComponent implements OnInit {
  constructor(private fs: FoodService) {}

  food: FoodItem[];

  ngOnInit() {
    this.fs.getItems().subscribe((data: FoodItem[]) => {
      this.food = data;
    });
  }

  deleteFood(food: FoodItem) {
    this.food = this.food.filter((i) => i != food);
    this.fs.deleteItem(food);
  }
}
