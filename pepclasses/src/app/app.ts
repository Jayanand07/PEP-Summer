import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('pepclasses');

  name: string = "John Doe";
  count: number = 0;

  incrementVal(): void {
    this.count++;
  }

  decrementVal(): void {
    if (this.count > 0) {
      this.count--;
    }
  }

  // Carousel variables
  images: string[] = [
    'https://upload.wikimedia.org/wikipedia/commons/b/b4/Lionel-Messi-Argentina-2022-FIFA-World-Cup_(cropped).jpg',
    'https://upload.wikimedia.org/wikipedia/commons/c/c1/Lionel_Messi_20180626.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRm89ODp2sziKR5BJVHgSTIj5crWZ8ngcAJMH5YZm-VkA&s=10',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4g_oVYXbg1XUUVv-Mq17PJO4h5iv9nNgQ3Dg2a3j_AQ&s=10',
    'https://store.webkul.com/media/catalog/product/cache/1/thumbnail/250x250/9df78eab33525d08d6e5fb8d27136e95/u/n/unopim-public-image-url-thumb.png'
  ];
  currentIndex: number = 0;

  nextSlide(): void {
    if (this.currentIndex < this.images.length - 1) {
      this.currentIndex++;
    } else {
      this.currentIndex = 0;
    }
  }

  prevSlide(): void {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    } else {
      this.currentIndex = this.images.length - 1;
    }
  }
}
