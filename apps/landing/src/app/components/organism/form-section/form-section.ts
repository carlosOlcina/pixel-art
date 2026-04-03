import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
} from '@angular/core';
import { Section } from '../section/section';
import { ScrollSectionService } from '../../../services/scroll-section';
import { NgClass } from '@angular/common';
import { Title2 } from '../../atoms/title-2/title-2';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatTimepickerModule } from '@angular/material/timepicker';

@Component({
  selector: 'landing-form-section',
  imports: [
    Section,
    NgClass,
    Title2,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatDatepickerModule,
    MatTimepickerModule,
  ],
  providers: [provideNativeDateAdapter()],
  templateUrl: './form-section.html',
  styleUrl: './form-section.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class FormSection {
  scrollSectionService = inject(ScrollSectionService);

  isNext = computed(() => this.scrollSectionService.nextSection() === 'form');
  isOut = computed(() => this.scrollSectionService.outSection() === 'form');
  direction = this.scrollSectionService.direction;

  form = new FormGroup({
    phone: new FormControl('', [
      Validators.required,
      Validators.pattern(/^[0-9+]+$/),
    ]),
    date: new FormControl<Date | null>(null, [Validators.required]),
    time: new FormControl<Date | null>(null, [Validators.required]),
  });

  onSubmit() {
    if (this.form.valid) {
      console.log(this.form.value);
    }
  }
}
