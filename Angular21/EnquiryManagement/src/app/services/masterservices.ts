import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface Category {
  categoryId: number;
  categoryName: string;
  isActive: boolean;
}

export interface Status {
  statusId: number, statusName: string, isActive: boolean
}

export interface Enquiry {
  enquiryId: number,
  customerName: string,
  customerEmail: string,
  customerPhone: string,
  message: string,
  categoryId: number,
  statusId: number,
  enquiryType: string,
  isConverted: boolean,
  enquiryDate: string,
  followUpDate: string,
  feedback: string
}



export interface ApiResponse<T> {
  message: string;
  result: boolean;
  data: T;
}

@Injectable({
  providedIn: 'root',
})
export class Masterservices {

  constructor(private http: HttpClient) { }

  getAllCategory() {
    return this.http.get<ApiResponse<Category[]>>("https://api.freeprojectapi.com/api/Enquiry/get-categories");
  }

  getAllStatus() {
    return this.http.get<ApiResponse<Status[]>>("https://api.freeprojectapi.com/api/Enquiry/get-statuses");
  }

  saveNewEnquiry(obj: any) {
    return this.http.post<any>("https://api.freeprojectapi.com/api/Enquiry/create-enquiry", obj)
  }

  getEnquiryList() {
    return this.http.get<ApiResponse<Enquiry[]>>("https://api.freeprojectapi.com/api/Enquiry/get-enquiries");
  }

  deleteEnquiry(id: number) {
    return this.http.delete<ApiResponse<any>>(`https://api.freeprojectapi.com/api/Enquiry/delete-enquiry/${id}?id=${id}`);
  }

}
