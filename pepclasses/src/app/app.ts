import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Profile } from './profile/profile';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Profile],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('pepclasses');

  name: string = "John Doe";
  count: number = 0;

  profiles = [
    {
      name: 'John Doe',
      role: 'Lead Instructor',
      bio: 'Senior Software Engineer with 8+ years of teaching experience.',
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&q=80'
    },
    {
      name: 'Jane Smith',
      role: 'Assistant Professor',
      bio: 'Specialist in Frontend Frameworks and UI/UX Design.',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80'
    },
    {
      name: 'Alex Rivera',
      role: 'Mentor & Architect',
      bio: 'Fullstack Dev passionate about Angular and performance tuning.',
      avatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=150&q=80'
    }
  ];

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
