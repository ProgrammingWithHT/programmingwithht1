import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Masterservices } from '../../services/masterservices';



@Component({
  selector: 'app-submit-enquiry',
  imports: [ReactiveFormsModule],
  templateUrl: './submit-enquiry.html',
  styleUrl: './submit-enquiry.css',
})
export class SubmitEnquiry implements OnInit {
  private fb = inject(FormBuilder);

  masterServices = inject(Masterservices);

  categories: any[] = [];
  statuses: any[] = [];

  ngOnInit(): void {
    this.getStatus();
    this.getCategory();
  }

  getCategory() {
    this.masterServices.getAllCategory().subscribe({
      next: (res) => {
        this.categories = res?.data;
      }
    })
  }

  getStatus() {
    this.masterServices.getAllStatus().subscribe({
      next: (res) => {
        this.statuses = res?.data;
      }
    })
  }



  enquiryForm: FormGroup;

  constructor() {
    this.enquiryForm = this.fb.group({
      enquiryId: [0],
      customerName: ['', Validators.required],
      customerEmail: ['', [Validators.required, Validators.email]],
      customerPhone: ['', Validators.required],
      message: ['', Validators.required],
      categoryId: ['', Validators.required],
      statusId: [1, Validators.required],
      enquiryType: ['Online', Validators.required],
      isConverted: [false],
      enquiryDate: [new Date().toISOString()],
      followUpDate: [''],
      feedback: ['']
    });
  }

  onSubmit() {
    if (this.enquiryForm.valid) {
      const formValue = this.enquiryForm.value;
      const payload = {
        ...formValue,
        categoryId: Number(formValue.categoryId),
        statusId: Number(formValue.statusId)
      };

      this.masterServices.saveNewEnquiry(payload).subscribe({
        next: (res) => {
          if (res && res.result) {
            alert('Enquiry submitted successfully!');
            // Reset form but keep some defaults
            this.enquiryForm.reset({
              enquiryId: 0,
              statusId: 1,
              enquiryType: 'Online',
              isConverted: false,
              enquiryDate: new Date().toISOString()
            });
          } else {
            alert(res?.message || 'Failed to submit enquiry.');
          }
        },
        error: (err) => {
          console.error('API Error:', err);
          alert('An error occurred during submission.');
        }
      });
    } else {
      // Trigger validation messages
      this.enquiryForm.markAllAsTouched();
    }
  }
}
