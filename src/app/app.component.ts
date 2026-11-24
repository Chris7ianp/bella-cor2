import { Component, signal } from '@angular/core';
import { SITE_CONFIG } from './site-config';

type ServiceItem = {
  number: string;
  title: string;
  description: string;
  note: string;
  icon: 'sun' | 'face' | 'body';
};

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  readonly mobileMenuOpen = signal(false);
  readonly whatsappNumber = SITE_CONFIG.whatsappNumber.replace(/\D/g, '');
  readonly bookingPortalUrl = SITE_CONFIG.bookingPortalUrl;
  readonly instagramUrl = SITE_CONFIG.instagramUrl.trim();
  readonly address = SITE_CONFIG.address.trim();
  readonly currentYear = new Date().getFullYear();

  readonly services: ServiceItem[] = [
    {
      number: '01',
      title: 'Bronzeamento',
      description: 'Um cuidado pensado para valorizar o seu tom e entregar uma experiência que respeita a sua beleza.',
      note: 'Sua cor, sua escolha',
      icon: 'sun',
    },
    {
      number: '02',
      title: 'Estética facial',
      description: 'Momentos de cuidado para realçar a beleza natural, com atenção às necessidades de cada pele.',
      note: 'Cuidado em cada detalhe',
      icon: 'face',
    },
    {
      number: '03',
      title: 'Estética corporal',
      description: 'Um olhar individual para o bem-estar e para os cuidados que fazem você se sentir bem.',
      note: 'Beleza com acolhimento',
      icon: 'body',
    },
  ];

  closeMenu(): void {
    this.mobileMenuOpen.set(false);
  }

  toggleMenu(): void {
    this.mobileMenuOpen.update((isOpen) => !isOpen);
  }

}