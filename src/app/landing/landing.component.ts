import { Component, OnInit } from '@angular/core';
import {ProgressBarMode} from '@angular/material/progress-bar';
import skills from 'src/assets/data/skills.json';
import { faGithub, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  mode: ProgressBarMode = 'determinate';
  skills: any = skills;
  faGithub = faGithub;
  faTwitter = faTwitter;
  faInstagram = faInstagram;

  constructor() { }

  ngOnInit(): void {
    console.log(this.skills);
  }

}
