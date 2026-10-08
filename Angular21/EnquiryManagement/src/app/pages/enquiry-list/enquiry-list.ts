import { Component, inject, OnInit, signal, computed, effect } from '@angular/core';
import { Masterservices } from '../../services/masterservices';
import { DatePipe, NgClass } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-enquiry-list',
  imports: [DatePipe, NgClass, FormsModule],
  templateUrl: './enquiry-list.html',
  styleUrl: './enquiry-list.css',
})
export class EnquiryList implements OnInit {

  masterServices = inject(Masterservices);
  protected Math = Math;

  // Reactivity with Signals
  enquiryList = signal<any[]>([]);
  isLoading = signal<boolean>(false);
  searchTerm = signal<string>('');
  
  // Pagination
  currentPage = signal<number>(1);
  itemsPerPage = 10;

  constructor() {
    // Reset to first page when search term changes
    effect(() => {
      this.searchTerm();
      this.currentPage.set(1);
    });
  }

  // Computed Properties (Reactive)
  filteredEnquiryList = computed(() => {
    const list = this.enquiryList();
    const term = this.searchTerm().toLowerCase();
    
    if (!term) return list;
    
    return list.filter(item => 
      item.customerName?.toLowerCase().includes(term) || 
      item.customerEmail?.toLowerCase().includes(term)
    );
  });

  paginatedEnquiryList = computed(() => {
    const list = this.filteredEnquiryList();
    const start = (this.currentPage() - 1) * this.itemsPerPage;
    return list.slice(start, start + this.itemsPerPage);
  });

  totalPages = computed(() => {
    return Math.ceil(this.filteredEnquiryList().length / this.itemsPerPage);
  });

  ngOnInit(): void {
    this.getEnquiryList();
  }

  getEnquiryList() {
    this.isLoading.set(true);
    this.masterServices.getEnquiryList().subscribe({
      next: (res) => {
        const sortedData = (res?.data || []).sort((a: any, b: any) => {
          return new Date(b.enquiryDate).getTime() - new Date(a.enquiryDate).getTime();
        });
        this.enquiryList.set(sortedData);
        this.isLoading.set(false);
      },
      error: (err) => {
        console.error('Error fetching enquiries:', err);
        this.isLoading.set(false);
      }
    });
  }

  onDelete(id: number) {
    const isDelete = confirm("Are you sure you want to delete this enquiry?");
    if (isDelete) {
      this.masterServices.deleteEnquiry(id).subscribe({
        next: (res) => {
          if (res.result) {
            alert("Enquiry deleted successfully");
            this.getEnquiryList();
          } else {
            alert(res.message);
          }
        },
        error: (err) => {
          console.error('Error deleting enquiry:', err);
        }
      });
    }
  }

  nextPage() {
    if (this.currentPage() < this.totalPages()) {
      this.currentPage.update(p => p + 1);
    }
  }

  prevPage() {
    if (this.currentPage() > 1) {
      this.currentPage.update(p => p - 1);
    }
  }
}
