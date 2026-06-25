import { Component, input } from '@angular/core';

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.html',
  styleUrl: './profile.css',
})
export class Profile {
  profile = input.required<{
    name: string;
    role: string;
    bio: string;
    avatar: string;
  }>();
}
